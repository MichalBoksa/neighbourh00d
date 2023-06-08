const router = require("express").Router();
const Stripe = require("stripe");

require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_KEY);

router.post("/payment", async (req,res) =>{
  
    const line_items = req.body.cartItems.map((item) =>{
        return{
            price_data: {
                currency: "pln",
                product_data: {
                  name: item.title,
                  images: [item.img],
                  description: item.desc,
                  metadata: {
                    id: item._id,
                  },
                },
                unit_amount: item.price * 100,
              },
              quantity: item.quantity,
            };
    });
   
   const session = await stripe.checkout.sessions.create({     //check stripe variable
  
    shipping_address_collection: {
      allowed_countries: ['PL'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'pln',
          },
          display_name: 'DPD',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 2,
            },
            maximum: {
              unit: 'business_day',
              value: 5,
            },
          },
        },
      },
    ],

    phone_number_collection: {
      enabled: true,
    },
    payment_method_types: ['card', 'p24','blik'],
        line_items,
        mode:"payment",
        locale:"pl",
        success_url:`${process.env.CLIENT_URL}/checkoutSuccess?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:`${process.env.CLIENT_URL}/cart`,
    });

    res.send({url:session.url});
});

router.get('/session/:session', async (req, res) => {
try{
  const sessionRes = await stripe.checkout.sessions.retrieve(req.params.session);
   res.status(200).json(sessionRes);
}
catch(err){
  res.status(500).json(err);
}
 
});

module.exports = router;