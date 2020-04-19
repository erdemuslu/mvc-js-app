class View {
  constructor() {
    this.root = document.getElementById('root');

    this.header = document.createElement('header');
    this.headerTitle = document.createElement('h1');
    this.headerTitle.innerText = 'Is Ilanlari';
    this.headerBookmarkItem = document.createElement('div');
    this.headerBookmarkItem.setAttribute('class', 'saved-items');
    this.header.append(this.headerTitle);
    this.header.append(this.headerBookmarkItem);
    this.root.append(this.header);

    this.list = document.createElement('div');
    this.list.setAttribute('class', 'list');
    this.root.append(this.list);

    this.loadingSection = document.createElement('section');
    this.loadingSection.innerText = 'Loading...';

    this.root.append(this.loadingSection);
  }

  createListItem(item, index) {
    const listItem = document.createElement('div');
    listItem.setAttribute('class', 'list-item');

    const listItemTitle = document.createElement('h1');
    listItemTitle.innerText = item.title;

    const listItemCompany = document.createElement('h3');
    listItemCompany.innerText = item.company_name;

    const listItemButton = document.createElement('a');
    listItemButton.innerText = 'Basvur';
    listItemButton.setAttribute('href', item.url);

    const listItemSaveButton = document.createElement('button');
    listItemSaveButton.innerText = 'Kaydet';
    listItemSaveButton.id = index;
    listItemSaveButton.addEventListener('click', this.handleSave.bind(this));

    listItem.append(listItemTitle);
    listItem.append(listItemCompany);
    listItem.append(listItemButton);
    listItem.append(listItemSaveButton);

    return listItem;
  }

  handleSaveAction(func) {
    this.handleSaveFunc = func;
  }

  handleSave(e) {
    this.handleSaveFunc(e.target.id);
  }

  onSavedDataChanged(savedItem, id) {
    const savedItemEl = this.createListItem(savedItem, id);
    this.header.append(savedItemEl);
  }

  createList(jobs) {
    jobs.map((item, index) => {
      const listItem = this.createListItem(item, index);

      return this.list.append(listItem);
    });
  }

  handleLoading(jobs) {
    if (jobs) {
      this.loadingSection.classList.add('is-none');
      this.createList(jobs);
    }
  }
}

export default View;
