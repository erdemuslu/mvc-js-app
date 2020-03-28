class Model {
  constructor() {
    this.data = [];
  };

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
}

export default Model;
