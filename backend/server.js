require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./db");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

const authMiddleware = require("./middleware/authMiddleware");
const adminMiddleware = require("./middleware/adminMiddleware");

const app = express();


// =========================
// MIDDLEWARE
// =========================

app.use(cors());

app.use(express.json());


// =========================
// CHECK MIDDLEWARE
// =========================

console.log(
    "authMiddleware:",
    typeof authMiddleware
);

console.log(
    "adminMiddleware:",
    typeof adminMiddleware
);

console.log(
    "JWT SECRET EXISTS:",
    !!process.env.JWT_SECRET
);


// =========================
// DATABASE
// =========================

connectDB();


// =========================
// ROUTES
// =========================

app.use(
    "/users",
    userRoutes
);

app.use(
    "/products",
    productRoutes
);

app.use(
    "/cart",
    cartRoutes
);

app.use(
    "/orders",
    orderRoutes
);


// =========================
// TEST ROUTE
// =========================

app.get("/", (req, res) => {
    res.json({
        message: "Amazon Clone API is running"
    });
});


// =========================
// ERROR HANDLER
// =========================

app.use((err, req, res, next) => {
    console.error(
        "SERVER ERROR:",
        err
    );

    res.status(500).json({
        message: "Internal server error"
    });
});


// =========================
// SERVER
// =========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});