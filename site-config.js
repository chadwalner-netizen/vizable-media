/* Launch connections — fill these in after business email and Stripe are ready.
   Public checkout URLs and a form endpoint are safe to configure here.
   Never put Stripe secret keys or email passwords in this file. */
window.VIZABLE_CONFIG = {
  formEndpoint: 'https://formspree.io/f/moedwbrk',
  checkoutLinks: {
    'starter-monthly': '',
    'business-monthly': '',
    'premium-monthly': '',
    'starter-onetime': '',
    'business-onetime': '',
    'premium-onetime': ''
  }
};
