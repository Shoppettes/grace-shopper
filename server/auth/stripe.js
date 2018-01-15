const router = require('express').Router()
const configureStripe = require('stripe');
const STRIPE_SECRET_KEY = require('../../secrets').STRIPE_SECRET_KEY;

const stripe = configureStripe(STRIPE_SECRET_KEY);

const postStripeCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
        res.status(500).send({error: stripeErr});
    } else {
        res.status(200).send({success: stripeRes});
    }
}


router.post('/', (req, res) => {
    // console.log('request', req.body);
    stripe.charges.create(req.body, postStripeCharge(res))
    .then(data => res.json(data))
})


module.exports = router