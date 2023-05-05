const express = require(`express`);
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const orderRoute = require("./routes/order");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const jwt = require("jsonwebtoken");
const cors = require("cors");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection Successfull"))
.catch((err) => {
    console.log(err);
});
app.use(cors());
app.use(express.json());
app.use("/api/orders", orderRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);

app.listen(process.env.PORT || 8800, ()=>{
    console.log("Backend server is running!");
});

