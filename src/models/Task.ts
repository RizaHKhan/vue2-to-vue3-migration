import { ITask } from '../types'

export default class Task implements ITask {
  title = "";
  completed = false;

  constructor({ title, completed }: ITask) {
    this.title = title;
    this.completed = completed;
  }

  complete() {
    this.completed = true
  }
}
