import { ITask } from '../types'

class Api {
  tasks(): Promise<ITask[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { title: "Default Task 1", completed: true },
          { title: "Default Task 2", completed: false }
        ]);
      }, 2000);
    });
  }
}

export default new Api();
