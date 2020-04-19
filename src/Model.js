class Model {
  constructor() {
    this.data = [];
    this.savedData = [];
  }

  handleOnSavedDataChanged(func) {
    this.onSavedDataChanged = func;
  }

  handleFetchStatus(func) {
    this.fetchSuccess = func;
  }

  fetchJobs() {
    fetch('https://codepen.io/jobs.json')
      .then((res) => res.json())
      .then(({ jobs }) => {
        this.data = jobs;

        this.fetchSuccess(this.data);
      });
  }

  handleSaveAction(id) {
    const savedItem = this.data[id];
    this.savedData.push(savedItem);
    this.onSavedDataChanged(savedItem, id);
  }
}

export default Model;
