class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onLoadData = this.onLoadData.bind(this);
    this.onSaveAction = this.onSaveAction.bind(this);
    this.onSavedDataChanged = this.onSavedDataChanged.bind(this);

    this.model.handleFetchStatus(this.onLoadData);
    this.model.fetchJobs();
    this.model.handleOnSavedDataChanged(this.onSavedDataChanged);

    this.view.handleSaveAction(this.onSaveAction);
  }

  onLoadData(jobs) {
    this.view.handleLoading(jobs);
  }

  onSaveAction(id) {
    this.model.handleSaveAction(id);
  }

  onSavedDataChanged(savedItem, id) {
    this.view.onSavedDataChanged(savedItem, id);
  }
}

export default Controller;
