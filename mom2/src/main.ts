import './style.css'

export interface Todo {
  task: string,
  completed: boolean,
  priority: number
}

export class ToDoList{
  //array med todo-objekt
  public todos: Todo[] = [];
  //konstruktor, ladda in från localstorage
  constructor(){
    this.todos = [],
    this.loadFromLocalStorge();
  }

  public addTodo(task: string, priority: number): boolean{
    if(task !== "" && priority !== 1 && priority !== 2 && priority !== 3){
      return false;
    }
    //Nytt objekt med todos interface
    const newTodo: Todo = {
      task: task,
      priority: priority,
      completed: false
    }
    console.log(newTodo);

    this.todos.push(newTodo);
    this.saveToLocalStorage();
    return true;
  }
  //Funktion för att visa om en att-göra är avklarad
  public markTodoCompleted(todoIndex: number): void{
    if(todoIndex >= 0 && this.todos.length){
      this.todos[todoIndex].completed = true;
      this.saveToLocalStorage();
    }
  }

  //Hämta alla todos
  getTodos(): Todo[]{
    return this.todos;
  }

  //Sparar till localstorage
  public saveToLocalStorage(): void{
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  //Läser in från localstorage
  public loadFromLocalStorge(): void{
    const storagedTodos = localStorage.getItem("todos");
    if(storagedTodos){
      this.todos = JSON.parse(storagedTodos);
    }
  }
}