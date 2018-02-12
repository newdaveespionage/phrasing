const Storage = {
  initialize(key = 'phrasingData') {
    this.key = key;
    this.data = window.localStorage.getItem(key);
    if (!this.data) {
      this.data = {}
    } else {
      this.data = JSON.parse(this.data);
    }
  },
  getData(key) {
    return this.data[key] || false;
  },
  setData(key, value) {
    this.data[key] = value;
  },
  store() {
    if (!this.data) {
      this.initialize();
    }
    window.localStorage.setItem(this.key, JSON.stringify(this.data));
  }
}

export default Storage;
