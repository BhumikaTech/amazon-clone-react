const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

console.log("authMiddleware:", typeof authMiddleware);
console.log("adminMiddleware:", typeof adminMiddleware);

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {
    res.status(200).json({
        message: "You are authenticated",
        user: req.user
    });
});

router.get("/admin-test", authMiddleware, adminMiddleware, (req, res) => {
    res.status(200).json({
        message: "Admin access granted",
        user: req.user
    });
});

module.exports = router;