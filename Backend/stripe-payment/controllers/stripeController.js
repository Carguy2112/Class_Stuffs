const stripe = require("stripe")(process.env.STRIPE_API_KEY);

const stripeController = async (req, res) => {
    const { purchase, total_amount, shipping_fee } = req.body;

    const calculatedOrderAmount = () => {
        return total_amount + shipping_fee;
    };

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculatedOrderAmount(),
        currency: "usd",
    });

    res.json({ clientSecret: paymentIntent.client_secret });
};

module.exports = stripeController;
