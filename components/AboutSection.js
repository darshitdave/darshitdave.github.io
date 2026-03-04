export default {
  name: 'AboutSection',
  props: {
    projectCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    yearsExperience() {
      const start = new Date(2018, 5, 1); // June 2018
      const now = new Date();
      return Math.floor((now - start) / (1000 * 60 * 60 * 24 * 365.25));
    }
  },
  mounted() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    this.$el.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  },
  template: `
    <section id="about">
      <div class="section-inner">
        <div class="section-header">
          <span class="section-num">01.</span>
          <h2 class="section-title">About</h2>
          <div class="section-line"></div>
        </div>
        <div class="about-grid">
          <div class="code-block reveal">
            <div class="code-bar">
              <div class="cd cd-r"></div>
              <div class="cd cd-y"></div>
              <div class="cd cd-g"></div>
              <span class="code-filename">about.json</span>
            </div>
            <div class="code-content">
              <div><span class="c-purple">const</span> <span class="c-blue">developer</span> <span class="c-dim">=</span> <span class="c-dim">{</span></div>
              <div>&nbsp;&nbsp;<span class="c-yellow">name</span><span class="c-dim">:</span>&nbsp;&nbsp;<span class="c-orange">"Darshit Dave"</span><span class="c-dim">,</span></div>
              <div>&nbsp;&nbsp;<span class="c-yellow">role</span><span class="c-dim">:</span>&nbsp;&nbsp;<span class="c-orange">"Full Stack Developer"</span><span class="c-dim">,</span></div>
              <div>&nbsp;&nbsp;<span class="c-yellow">focus</span><span class="c-dim">: [</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-orange">"Scalable Web Platforms"</span><span class="c-dim">,</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-orange">"API Design & Integrations"</span><span class="c-dim">,</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-orange">"AI-driven Solutions"</span></div>
              <div>&nbsp;&nbsp;<span class="c-dim">],</span></div>
              <div>&nbsp;&nbsp;<span class="c-yellow">strengths</span><span class="c-dim">: [</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-orange">"Maintainable system architecture"</span><span class="c-dim">,</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-orange">"End-to-end delivery"</span></div>
              <div>&nbsp;&nbsp;<span class="c-dim">],</span></div>
              <div>&nbsp;&nbsp;<span class="c-yellow">openToWork</span><span class="c-dim">:</span> <span class="c-green">true</span></div>
              <div><span class="c-dim">};</span></div>
            </div>
          </div>
          <div class="stat-grid reveal">
            <div class="stat-item">
              <div class="stat-num">{{ yearsExperience }}+</div>
              <div class="stat-label">Years of experience</div>
            </div>
            <div class="stat-item">
              <div class="stat-num">{{ projectCount }}</div>
              <div class="stat-label">GitHub projects</div>
            </div>
            <div class="stat-item">
              <div class="stat-num">∞</div>
              <div class="stat-label">Curiosity to learn</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};
