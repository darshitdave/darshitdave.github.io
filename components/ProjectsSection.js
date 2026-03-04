export default {
  name: 'ProjectsSection',
  props: {
    projects: {
      type: Array,
      required: true
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
    <section id="projects">
      <div class="section-inner">
        <div class="section-header">
          <span class="section-num">03.</span>
          <h2 class="section-title">Projects</h2>
          <div class="section-line"></div>
        </div>
        <div class="projects-grid">
          <div
            class="project-card reveal"
            v-for="(p, i) in projects"
            :key="p.name"
          >
            <div class="project-header">
              <div class="p-header-left">
                <div class="p-icon"><i :class="p.icon"></i></div>
                <span class="p-num">PROJECT_{{ String(i+1).padStart(2,'0') }}</span>
              </div>
              <a :href="p.url" target="_blank" rel="noopener" class="p-github-link">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            <div class="project-body">
              <h3 class="project-title">{{ p.name }}</h3>
              <p class="project-desc">{{ p.desc }}</p>
              <div class="project-tech">
                <span class="tech-pill" v-for="t in p.tech" :key="t">{{ t }}</span>
              </div>
            </div>
            <div class="project-footer">
              <a :href="p.url" target="_blank" rel="noopener" class="p-link">
                View Source <i class="fa-solid fa-arrow-right"></i>
              </a>
              <span class="p-tag">github.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};
