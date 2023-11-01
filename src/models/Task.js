export default class Task {
  title = "";
  completed = false;

  constructor({ title, completed }) {
    this.title = title;
    this.completed = completed;
  }
}
