import './style.css'

interface Todo {
  task: string,
  completed: boolean,
  priority: number
}

class ToDoList{
  //array med todo-objekt
  public todos: Todo[] = [];
  //konstruktor, ladda in från localstorage
  constructor(){
    this.loadFromLocalStorge();
  }

  public addTodo(task: string, priority: number): boolean{
    if(task !== "" && priority !== 1 && priority !== 2 && priority !== 3){
      return false;
    }
    return true;
  }
  //Spara till localstorage
  public loadFromLocalStorge(): void{
    const storagedTodos = localStorage.getItem("todos");
    if(storagedTodos){
      this.todos = JSON.parse(storagedTodos);
    }
  }

}