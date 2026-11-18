VIZABLE MEDIA — SIX-PAGE APPROVED DESIGN BUILD
November 17, 2026

WHAT'S INCLUDED
The six matching primary pages: index.html (Home), work.html (Our Work),
pricing.html, about.html, process.html (How It Works), and contact.html.
Their shared design uses deep navy, coral, and soft seafoam, the VM emblem,
matching navigation and footer, and Chad's burgundy-shirt portrait.

Our Work links to three clickable, FICTIONAL demonstrations:
demo-landscaping.html, demo-cleaning.html, and demo-handyman.html. These are
concept designs, not client projects or testimonials. Arnie's actual work is
not presented as an authorized client project.

The pricing page has an interactive One-Time Purchase / Monthly Subscription
switch. The Contact page has Request a Call / Send a Message options. The
six plan buttons open a package summary, scope notice, and consent step.
An unlinked project-intake.html page is supplied for after payment; it does
not validate a Stripe purchase on its own.

HOW TO PREVIEW
1. Unzip every file into ONE folder, keeping names unchanged.
2. Double-click index.html in that folder, or run a local static server.
3. Check the six navigation pages, sample designs, pricing selector and
   Contact tabs. Test on desktop and mobile before going live.

IMPORTANT: NOT READY TO ACCEPT PAYMENTS OR INQUIRIES
The attractive page designs and client-side interactions are working, but
the payment and form-delivery services are intentionally disconnected.
Visitors who attempt checkout or form submission see a truthful preview
message. NO payment is collected, and NO message is delivered yet.

CONNECT THE SIX STRIPE CHECKOUT OPTIONS
Open site-config.js and supply the HTTPS Stripe Payment Link or Checkout
URL for each key:
  starter-monthly, business-monthly, premium-monthly,
  starter-onetime, business-onetime, premium-onetime.

Displayed one-time prices: Starter $499, Business $749, Premium $999.
Displayed subscriptions: Starter $59/month, Business $79/month, Premium
$99/month. Subscription setup fees are $125, $175, and $297 respectively.
The site advertises the FIRST month paid at checkout plus the SECOND and
THIRD months FREE, then normal billing resuming in month four. Carefully
configure and test the corresponding Stripe products, setup-fee charges,
subscription discounts/schedules, taxes, cancellation terms, and customer
receipts so that real checkout matches those exact displayed promises.

Recommended payment flow: package selection → Stripe-hosted payment →
Stripe confirmation → project-intake.html → Chad verifies payment and
reviews scope → design starts. Configure the Stripe success return URL for
the post-payment intake page; do not assume that a URL parameter or form
submission establishes payment. Use Stripe's actual record as authority.

CONNECT THE CONTACT AND INTAKE FORMS
First purchase or configure a business mailbox, then set up a reliable
form service such as Formspree. Insert its HTTPS form endpoint in
site-config.js at formEndpoint. Test delivery to your actual inbox,
including request type, reply-to and junk folder. Add anti-spam/privacy
protections and a published privacy policy before launching.

HOW THE FLOW HANDLES PAY-FIRST
The checkout dialog explains that Chad reviews project requirements AFTER
payment. If a request is outside the purchased package, the stated policy
is to discuss an upgrade or give a full refund BEFORE work begins. Confirm
the precise written scope, revisions, ownership, deliverables, domain and
hosting responsibilities, cancellation/refund policy, and taxes with a
qualified advisor before taking live payments.

TECHNICAL NOTES
- Main shared styles are in site-final.css; shared interactive behavior is
  in site-final.js; external connection points are in site-config.js.
- Retained styles/assets support the homepage hero, sample concepts and
  four-step process. Do not delete them when uploading to GitHub.
- All images and code files must be published in the same folder structure.
- The logo artwork was taken from an approved design mockup for the shared
  header; vm-approved-source.jpg is supplied for reference.
- project-intake.html carries a noindex directive, but noindex is not an
  access control. It contains no secret payment verification.

Keep this ZIP as the design-stage master. Connect Stripe and email/forms,
test the full purchase and submission flows, and then publish to GitHub.
