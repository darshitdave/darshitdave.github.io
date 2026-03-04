export default {
  name: 'IntroSection',
  template: `
    <section id="intro">
      <div class="intro-decor"></div>
      <div class="intro-inner">
        <div class="terminal-prompt">
          <span class="tp-path">~/portfolio</span>
          <span class="tp-dollar">$</span>
          <span class="tp-cmd">whoami</span>
          <span class="tp-cursor"></span>
        </div>
        <h1 class="intro-name">
          <span class="hn-solid">Darshit</span>
          <span class="hn-outline">Dave.</span>
        </h1>
        <div class="intro-role">
          <div class="hr-line"></div>
          Full Stack Developer
          <div class="hr-line hr-line--fade"></div>
        </div>
        <p class="intro-desc">
          Designing and building scalable web applications from robust backend APIs to intuitive, user focused interfaces.
        </p>
        <div class="intro-actions">
          <a href="#projects" class="btn btn-primary">
            <i class="fa-solid fa-code"></i>view_projects()
          </a>
          <a href="#contact" class="btn btn-ghost">
            <i class="fa-solid fa-terminal"></i>get_in_touch()
          </a>
        </div>
      </div>
    </section>
  `
};
