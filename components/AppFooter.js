export default {
  name: 'AppFooter',
  computed: {
    year() {
      return new Date().getFullYear();
    }
  },
  template: `
    <footer>
      <p>Built by <span>Darshit Dave</span> · {{ year }}</p>
      <div class="footer-right">v1.0.0 // PORTFOLIO</div>
    </footer>
  `
};
