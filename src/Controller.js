class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  };

  render() {
    this.view.render();
  }
}

export default Controller;
