'use strict';

module.exports = {
  // App name.
  appName: 'Rocket Rides',

  // Server port.
  port: 8080,

  // Secret for cookie sessions.
  secret: 'YOUR_SECRET',

  // Configuration for Stripe.
  // API Keys: https://dashboard.stripe.com/account/apikeys
  // Connect Settings: https://dashboard.stripe.com/account/applications/settings
  stripe: {
    secretKey: 'sk_test_xZyHnhnfqIRUspR0XTM1DHqi',
    publishableKey: 'pk_test_4j8nxKms5tgqYitAFPPjBZ01',
    clientId: 'ca_C87QKxNvRy9PUmKJGlugNMJ61nmZnfXH',
    authorizeUri: 'https://connect.stripe.com/express/oauth/authorize',
    tokenUri: 'https://connect.stripe.com/oauth/token'
  },

};
