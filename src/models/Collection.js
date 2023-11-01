export default class Collection {
  collection = [];

  add(item) {
    this.collection.push(item);
  }

  delete(index) {
    this.collection.splice(index, 1);
  }
}
