export interface ITask {
  title: string
  completed: boolean
  complete: () => void
}

export interface ICollection<T> {
  collection: T[]
  add: (item: T) => void
  delete: (index: number) => void
}
