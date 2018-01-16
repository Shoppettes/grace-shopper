const router = require('express').Router();
const configureStripe = require('stripe');
const stripe = configureStripe(process.env.STRIPE_SECRET_KEY);

const postStripeCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
        console.log('throwing stripe error')
        console.error(stripeErr);
        res.status(500).send({error: stripeErr});
    } else {
        res.status(200).send({success: stripeRes});
    }
}


router.post('/', (req, res, next) => {
    const {amount, source, description, currency} = req.body
    console.log('request ', req.body)
    stripe.charges.create({
        amount, 
        source, 
        currency, 
        description
    }, postStripeCharge(res))
})


module.exports = router

/**
 * 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const router = require('express').Router()
const keyPublishable = process.env.STRIPE_PUBLISHABLE_KEY

module.exports = router

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

router.post('/', (req, res, next) => {
  const {amount, source, description, currency} = req.body
  stripe.charges.create({
    amount,
    source,
    currency,
    description
  }, postStripeCharge(res))
})
 */