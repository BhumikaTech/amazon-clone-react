const express = require("express");

const {
    createOrder,
    getUserOrders
} = require("../controllers/orderController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// =========================
// CREATE ORDER
// =========================

router.post(
    "/",
    authMiddleware,
    createOrder
);

// =========================
// GET USER ORDERS
// =========================

router.get(
    "/",
    authMiddleware,
    getUserOrders
);

module.exports = router;