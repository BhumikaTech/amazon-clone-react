const Cart = require("../models/cart");
const Product = require("../models/product");

// =========================
// ADD PRODUCT TO CART
// =========================

const addToCart = async (req, res, next) => {
    try {
        const { productId, quantity = 1 } = req.body;
        const userId = req.user.userId;

        if (!productId) {
            return res.status(400).json({
                message: "Product ID is required"
            });
        }

        if (quantity < 1) {
            return res.status(400).json({
                message: "Quantity must be at least 1"
            });
        }

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        if (product.stock < quantity) {
            return res.status(400).json({
                message: "Insufficient stock"
            });
        }

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({
                userId,
                items: [
                    {
                        productId,
                        quantity
                    }
                ]
            });
        } else {
            const existingItem = cart.items.find(
                item => item.productId.toString() === productId
            );

            if (existingItem) {
                const newQuantity = existingItem.quantity + quantity;

                if (newQuantity > product.stock) {
                    return res.status(400).json({
                        message: "Insufficient stock"
                    });
                }

                existingItem.quantity = newQuantity;
            } else {
                cart.items.push({
                    productId,
                    quantity
                });
            }
        }

        await cart.save();

        res.status(200).json({
            message: "Product added to cart",
            cart
        });

    } catch (error) {
        next(error);
    }
};


// =========================
// GET CART
// =========================

const getCart = async (req, res, next) => {
    try {
        const userId = req.user.userId;

        const cart = await Cart.findOne({ userId })
            .populate("items.productId");

        if (!cart) {
            return res.status(200).json({
                userId,
                items: []
            });
        }

        res.status(200).json(cart);

    } catch (error) {
        next(error);
    }
};


// =========================
// UPDATE CART QUANTITY
// =========================

const updateCartQuantity = async (req, res, next) => {
    try {
        const { quantity } = req.body;
        const userId = req.user.userId;
        const { productId } = req.params;

        if (!quantity || quantity < 1) {
            return res.status(400).json({
                message: "Quantity must be at least 1"
            });
        }

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        if (quantity > product.stock) {
            return res.status(400).json({
                message: "Insufficient stock"
            });
        }

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        const item = cart.items.find(
            item => item.productId.toString() === productId
        );

        if (!item) {
            return res.status(404).json({
                message: "Product not found in cart"
            });
        }

        item.quantity = quantity;

        await cart.save();

        res.status(200).json({
            message: "Cart quantity updated",
            cart
        });

    } catch (error) {
        next(error);
    }
};


// =========================
// REMOVE PRODUCT FROM CART
// =========================

const removeFromCart = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const { productId } = req.params;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        const itemExists = cart.items.some(
            item => item.productId.toString() === productId
        );

        if (!itemExists) {
            return res.status(404).json({
                message: "Product not found in cart"
            });
        }

        cart.items = cart.items.filter(
            item => item.productId.toString() !== productId
        );

        await cart.save();

        res.status(200).json({
            message: "Product removed from cart",
            cart
        });

    } catch (error) {
        next(error);
    }
};


// =========================
// EXPORT
// =========================

module.exports = {
    addToCart,
    getCart,
    updateCartQuantity,
    removeFromCart
};