export default {
  name: 'SkillsSection',
  props: {
    skills: {
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
    <section id="skills">
      <div class="section-inner">
        <div class="section-header">
          <span class="section-num">02.</span>
          <h2 class="section-title">Tech Stack</h2>
          <div class="section-line"></div>
        </div>
        <div class="skills-grid">
          <div
            class="skill-category reveal"
            v-for="cat in skills"
            :key="cat.name"
          >
            <div class="skill-cat-title">
              <i :class="cat.icon"></i>{{ cat.name }}
            </div>
            <div class="skill-tags">
              <span
                class="skill-tag"
                v-for="s in cat.items"
                :key="s"
              >{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};
