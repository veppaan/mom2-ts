import './style.css';

import {ToDoList} from "./toDoClass.ts";

      const todoList = new ToDoList();

      renderTodo();

      const toDoForm = document.getElementById("todo-form") as HTMLFormElement;
      toDoForm.addEventListener("submit", function (event){
        event.preventDefault();

      //const form = document.getElementById("todo-form");
        const todoValue = document.getElementById("todo") as HTMLInputElement;
        const priorityValue = document.getElementById("priority") as HTMLSelectElement;

        console.log(todoValue.value + " " + priorityValue.value);

        const success = todoList.addTodo(todoValue.value, parseInt(priorityValue.value));

        if(success){
          todoValue.value = "";
          renderTodo();
        }else{
          alert("Fel i inmatning!")
        }
      });

      function markCompleted(index: number) {
      todoList.markTodoCompleted(index);
      renderTodo();
    }

      function renderTodo() {
        const todoSection = document.getElementById("all-todos") as HTMLElement;

        todoSection.innerHTML = "";

        todoList.getTodos().forEach((todo, index) => {
          const liEl = document.createElement("li");
          liEl.innerHTML = `${todo.task} (Prioritet: ${todo.priority})`;

          if(!todo.completed) {
            const button = document.createElement("button");
            button.textContent ="Markera klar";
            button.id="done-btn";
            button.onclick = () => {
              markCompleted(index);
            };
            liEl.appendChild(button);
            todoSection.appendChild(liEl);
          }
        });
      }