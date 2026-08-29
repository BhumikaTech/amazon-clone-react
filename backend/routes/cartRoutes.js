const express = require("express");

const {
    addToCart,
    getCart,
    updateCartQuantity,
    removeFromCart
} = require("../controllers/cartController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get user's cart
router.get("/", authMiddleware, getCart);

// Add product to cart
router.post("/", authMiddleware, addToCart);

// Update product quantity
router.put("/:productId", authMiddleware, updateCartQuantity);

// Remove product from cart
router.delete("/:productId", authMiddleware, removeFromCart);

module.exports = router;