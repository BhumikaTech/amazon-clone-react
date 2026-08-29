const Product = require("../models/product");

// =========================
// GET ALL PRODUCTS
// =========================

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch products",
            error: error.message
        });
    }
};


// =========================
// GET SINGLE PRODUCT
// =========================

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch product",
            error: error.message
        });
    }
};


// =========================
// CREATE PRODUCT
// =========================

const addProduct = async (req, res) => {
    try {
        const {
            title,
            description,
            price,
            image,
            category,
            rating,
            stock
        } = req.body;

        const product = await Product.create({
            title,
            description,
            price,
            image,
            category,
            rating,
            stock
        });

        res.status(201).json({
            message: "Product added successfully",
            product
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to add product",
            error: error.message
        });
    }
};


// =========================
// UPDATE PRODUCT
// =========================

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product updated successfully",
            product
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to update product",
            error: error.message
        });
    }
};


// =========================
// DELETE PRODUCT
// =========================

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete product",
            error: error.message
        });
    }
};


// =========================
// EXPORT
// =========================

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};