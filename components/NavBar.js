export default {
  name: 'NavBar',
  data() {
    return {
      menuOpen: false
    };
  },
  template: `
    <nav>
      <div class="nav-inner">
        <div class="nav-logo">
          <span class="prompt">~/</span>darshit.dave
        </div>
        <div class="nav-status">
          <div class="status-dot"></div>
          available_for_work
        </div>
        <ul class="nav-links">
          <li><a href="#about">about</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
        <button
          class="nav-hamburger"
          @click="menuOpen = !menuOpen"
          :class="{ open: menuOpen }"
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <!-- Mobile drawer -->
      <div class="nav-drawer" :class="{ open: menuOpen }">
        <a href="#about"    @click="menuOpen = false">about</a>
        <a href="#skills"   @click="menuOpen = false">skills</a>
        <a href="#projects" @click="menuOpen = false">projects</a>
        <a href="#contact"  @click="menuOpen = false">contact</a>
      </div>
    </nav>
  `
};
