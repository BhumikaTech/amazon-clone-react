const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log("Connected to MongoDB Atlas");
    } catch (error) {
        console.log("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;