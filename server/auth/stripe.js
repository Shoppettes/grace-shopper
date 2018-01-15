const router = require('express').Router()
const configureStripe = require('stripe');
const STRIPE_SECRET_KEY = 'sk_test_xZyHnhnfqIRUspR0XTM1DHqi';

const stripe = configureStripe(STRIPE_SECRET_KEY);

const postStripeCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
        res.status(500).send({error: stripeErr});
    } else {
        res.status(200).send({success: stripeRes});
    }
}

// router.get('/', (req, res) => {
//     res.send({message: 'Stripe checkout server!', timestamp: new Date().toString})
// })

router.post('/', (req, res) => {
    console.log('request', req.body);
    stripe.charges.create(req.body, postStripeCharge(res))
})


module.exports = router