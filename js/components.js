/* ============================================================
   WANDERING PINE PRESS — Nav & Footer Injector
   Include this AFTER main.js on every page.
   It injects the shared nav and footer so you only
   ever edit one place.
   ============================================================ */

(function () {
  const NAV_HTML = `
  <nav>
    <a href="index.html" class="nav-logo">
      <img src="images/logo.png" alt="Wandering Pine Press logo" />
      <span>Wandering Pine Press</span>
    </a>
    <button class="nav-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
      <li><a href="games.html">Games</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="media.html">Media</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="press.html">Press</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>`;

  const FOOTER_HTML = `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="footer-logo">
          <img src="images/logo.png" alt="Wandering Pine Press" />
          <span>Wandering Pine Press</span>
        </a>
        <p>Independent tabletop RPG publisher. Narrative-first games for real, busy lives.</p>
      </div>
      <div class="footer-col">
        <h5>Games</h5>
        <ul>
          <li><a href="game-terminus.html">Terminus X7Z</a></li>
          <li><a href="game-alleys.html">In Alleys Dark</a></li>
          <li><a href="game-chaterra.html">Fires of Chaterra</a></li>
          <li><a href="game-clockwork.html">Clockwork &amp; Chaos</a></li>
          <li><a href="games.html">All Games →</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="media.html">Media &amp; Podcast</a></li>
          <li><a href="press.html">Press Kit</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Support</h5>
        <ul>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="privacy.html#terms">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} Wandering Pine Press. All rights reserved.</p>
      <div class="social-links">
        <a href="https://www.drivethrurpg.com" target="_blank" rel="noopener">DriveThruRPG</a>
        <a href="https://www.youtube.com/@wanderingpinepress" target="_blank" rel="noopener">YouTube</a>
        <a href="https://www.instagram.com/wanderingpinepress" target="_blank" rel="noopener">Instagram</a>
      </div>
    </div>
  </footer>`;

  // Inject nav
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.innerHTML = NAV_HTML;

  // Inject footer
  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
})();
