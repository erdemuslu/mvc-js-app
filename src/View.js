class View {
  constructor() {
    this.root = document.getElementById('root');

    this.createHeaderView();

    this.list = document.createElement('div');
    this.list.setAttribute('class', 'list');
    this.root.append(this.list);

    this.loadingSection = document.createElement('section');
    this.loadingSection.innerText = 'Loading...';

    this.root.append(this.loadingSection);

    this.handleSave = this.handleSave.bind(this);
  }

  createHeaderView() {
    this.header = document.createElement('header');

    this.headerLogoWrapper = document.createElement('div');
    this.headerLogoWrapper.classList.add('header-logo');
    this.headerTitle = document.createElement('h1');
    this.headerTitle.innerText = 'Is Ilanlari';
    this.headerLogoWrapper.append(this.headerTitle);

    this.headerCtaWrapper = document.createElement('div');
    this.headerCtaWrapper.classList.add('header-cta');
    this.headerCtaButton = document.createElement('button');
    this.headerCtaButton.innerText = 'Kaydedilen Is Ilanlari';
    this.headerCtaButton.addEventListener('click', this.showSavedItems.bind(this));
    this.headerCtaCountEl = document.createElement('span');
    this.headerCtaCountEl.innerText = '0';
    this.headerCtaButton.append(this.headerCtaCountEl);
    this.headerCtaWrapper.append(this.headerCtaButton);

    this.headerBookmarkItem = document.createElement('div');
    this.headerBookmarkItem.setAttribute('class', 'saved-items');

    this.header.append(this.headerLogoWrapper);
    this.header.append(this.headerCtaWrapper);
    this.header.append(this.headerBookmarkItem);

    this.root.append(this.header);
  }

  showSavedItems() {
    this.headerBookmarkItem.classList.add('is-show');
  }

  createListItem(item, index, type = 'save') {
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
    listItemSaveButton.innerText = type === 'save' ? 'Kaydet' : 'Sil';
    listItemSaveButton.id = index;
    listItemSaveButton.addEventListener('click', type === 'save' ? this.handleSave : this.handleRemove, true);

    listItem.append(listItemTitle);
    listItem.append(listItemCompany);
    listItem.append(listItemButton);
    listItem.append(listItemSaveButton);

    return listItem;
  }

  handleRemove(e) {
    console.log('handleRemove', e);
  }

  handleSaveAction(func) {
    this.handleSaveFunc = func;
  }

  handleSave(e) {
    this.handleSaveFunc(e.target.id);
  }

  onSavedDataChanged(savedItem, id) {
    const targetButton = document.querySelector(`.list .list-item button[id="${id}"]`);
    targetButton.removeEventListener('click', this.handleSave, true);
    targetButton.innerText = 'Sil';
    targetButton.addEventListener('click', this.handleRemove);

    const savedItemEl = this.createListItem(savedItem, id, 'remove');
    this.headerBookmarkItem.append(savedItemEl);
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
