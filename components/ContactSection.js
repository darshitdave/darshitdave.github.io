export default {
  name: 'ContactSection',
  mounted() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    this.$el.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  },
  template: `
    <section id="contact">
      <div class="section-inner">
        <div class="section-header">
          <span class="section-num">04.</span>
          <h2 class="section-title">Contact</h2>
          <div class="section-line"></div>
        </div>
        <div class="contact-box reveal">
          <div class="contact-eyebrow">
          </div>
          <h2 class="contact-headline">Let's Connect.</h2>
          <p class="contact-sub">
            Open to full-time roles, contracts &amp; collaborations.
            Reach out, I respond fast.
          </p>
          <div class="contact-links">
            <a
              href="https://linkedin.com/in/darshit-dave"
              target="_blank"
              rel="noopener"
              class="btn btn-primary"
            >
              <i class="fa-brands fa-linkedin"></i>linkedin_profile()
            </a>
            <a
              href="https://github.com/darshitdave"
              target="_blank"
              rel="noopener"
              class="btn btn-ghost"
            >
              <i class="fa-brands fa-github"></i>github_profile()
            </a>
          </div>
        </div>
      </div>
    </section>
  `
};
