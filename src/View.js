class View {
  constructor() {
    this.root = document.getElementById('root');

    this.loadingSection = document.createElement('section');
    this.loadingSection.innerText = 'Loading...';

    this.root.append(this.loadingSection);
  }

  handleLoading(jobs) {
    if (jobs) {
      this.loadingSection.classList.add('is-none');
    }
  }

  render() {
    this.root.append('mounted');
  }
}

export default View;
