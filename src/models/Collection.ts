import { ICollection } from '../types'

export default class Collection<T> implements ICollection<T> {
  collection: T[] = [];

  add<T>(item: T): void {
    this.collection.push(item);
  }

  delete(index: number): void {
    this.collection.splice(index, 1);
  }
}
