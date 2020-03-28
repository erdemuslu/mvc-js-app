class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onLoadData = this.onLoadData.bind(this);

    this.model.handleFetchStatus(this.onLoadData);
    this.model.fetchJobs();
  };

  onLoadData(jobs) {
    this.view.handleLoading(jobs);
  }

  render() {
    this.view.render();
  }
}

export default Controller;
