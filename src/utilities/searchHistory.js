class SearchHistory {
  constructor() {
    this.data = localStorage.getItem('searchHistory') ? JSON.parse(localStorage.getItem('searchHistory')) : [];
  }
  add(content) {
    this.data.push(content);
  }
  remove(index) {
    this.data.splice(index, 1);
  }
  clear() {
    this.data = [];
  }
  save() {
    const data = JSON.stringify(this.data);
    localStorage.setItem('searchHistory', data);
  }
  getData() {
    return this.data;
  }
}
export const history = new SearchHistory();
