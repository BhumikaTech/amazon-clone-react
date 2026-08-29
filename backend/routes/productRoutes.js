const express = require("express");

const {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();


// =========================
// GET ALL PRODUCTS
// =========================

router.get(
    "/",
    getProducts
);


// =========================
// GET SINGLE PRODUCT
// =========================

router.get(
    "/:id",
    getProductById
);


// =========================
// ADD PRODUCT - ADMIN
// =========================

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    addProduct
);


// =========================
// UPDATE PRODUCT - ADMIN
// =========================

router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    updateProduct
);


// =========================
// DELETE PRODUCT - ADMIN
// =========================

router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    deleteProduct
);


module.exports = router;