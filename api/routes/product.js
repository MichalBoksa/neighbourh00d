const Product = require("../models/Product");

const {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndAuthorization
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", async (req,res)=>{
    
    const newProduct = new Product(req.body);
    console.log(req.body);
    try{
        const savedProduct = await newProduct.save();
        
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req,res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedProduct);
    }catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req,res) => {
    try {
         await Product.findByIdAndDelete(req.params.id );
        res.status(200).json("Product has been deleted!");
    }catch (err) {
        res.status(500).json(err);
    }
});

// GET PRODUCT
router.get("/find/:id", async (req,res) => {
    try {
        const product = await Product.findById(req.params.id );
        res.status(200).json(product);
    }catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL PRODUCTS
router.get("/", async (req,res) => {
    const qNew = req.query.new;
    try {
        let products;
        products =  qNew? await Product.find().sort({createdAt: -1})
                : await Product.find();
        
        res.status(200).json(products);
    }catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;