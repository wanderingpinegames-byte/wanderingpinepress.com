WANDERING PINE PRESS — Website Files
=====================================

FOLDER STRUCTURE:
  index.html          — Homepage
  games.html          — Full game catalog
  game-terminus.html  — Terminus X7Z full campaign
  game-alleys.html    — In Alleys Dark full campaign
  game-chaterra.html  — One Night Worlds: Fires of Chaterra
  game-clockwork.html — One Night Worlds: Clockwork & Chaos
  game-onw-terminus.html — One Night Worlds: Terminus X7Z
  game-onw-alleys.html   — One Night Worlds: In Alleys Dark
  about.html          — About the Hazzards
  blog.html           — Blog & News
  media.html          — Podcast, YouTube, Actual Play
  press.html          — Press Kit
  contact.html        — Contact form
  faq.html            — FAQ
  privacy.html        — Privacy Policy & Terms

  css/style.css       — Shared stylesheet (colors, nav, footer, buttons)
  js/main.js          — Shared JavaScript (mobile nav, forms, scroll)
  js/components.js    — Nav & footer HTML injection (edit once, updates everywhere)
  images/logo.png     — Your logo

HOW TO UPDATE THE NAV OR FOOTER:
  Edit js/components.js — the nav and footer are defined there.
  Every page loads them automatically. You only need to change one file.

HOW TO ADD A BLOG POST:
  See the comment block inside blog.html for the template to copy/paste.

HOW TO WIRE UP THE EMAIL FORM:
  In index.html and blog.html, replace the .signup-form div with your
  email platform's embed code (Mailchimp, ConvertKit, etc.)

HOW TO WIRE UP THE CONTACT FORM:
  In contact.html, add action="https://formspree.io/f/YOUR_ID" method="POST"
  to the <form> tag. Sign up free at formspree.io.

HOW TO ADD COVER ART:
  Replace the .img-placeholder divs in each game page with:
  <img src="images/your-cover.jpg" alt="Game title cover art" />
  Put image files in the /images/ folder.

PLACEHOLDER COMMENTS:
  Search for "<!-- ADD:" throughout the files to find every spot
  that needs content filled in by Brian or Crystal.

SOCIAL LINKS:
  Instagram: @wanderingpinepress (https://www.instagram.com/wanderingpinepress)
  YouTube:   @wanderingpinepress (https://www.youtube.com/@wanderingpinepress)
  Email:     WanderingPineGames@gmail.com

All links to DriveThruRPG currently point to https://www.drivethrurpg.com
Update them with your actual product URLs once published.
