const Order = require("../models/Order");
const router = require("express").Router();

// const {
//     verifyToken,
//     verifyTokenAndAdmin,
//     verifyTokenAndAuthorization
// } = require("./verifyToken");


//CREATE
//TODO deleted verifyToken check if important
router.post("/", async (req,res)=>{
    const newOrder = new Order(req.body);
    
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async (req,res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedOrder);
    }catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", async (req,res) => {
    try {
         await Order.findByIdAndDelete(req.params.id );
        res.status(200).json("Order has been deleted!");
    }catch (err) {
        res.status(500).json(err);
    }
});

// GET USER Orders
router.get("/find/:userId", async (req,res) => {
    try {
        const order = await Order.find({userId: req.params.userId});
        res.status(200).json(order);
    }catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL ORDERS
router.get("/", async (req,res)=>{
    try{
        const orders = await Order.find();
        rest.status(200).json(orders);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;