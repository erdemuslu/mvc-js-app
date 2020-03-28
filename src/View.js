class View {
  constructor() {
    this.root = document.getElementById('root');
  };

  render() {
    this.root.append('mounted');
  }
}

export default View;
