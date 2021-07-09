export interface ITodo {
    task: string;
    day: number
  }

  export interface IPropsTodo {
    todo: ITodo;
    handleRemove (removedTodo:string): void; 
}