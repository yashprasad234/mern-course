/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    // done
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    // done
    this.todos = this.todos
      .slice(0, indexOfTodo)
      .concat(this.todos.slice(indexOfTodo + 1, this.todos.length));
  }

  update(index, updatedTodo) {
    if (index < this.todos.length) {
      this.todos[index] = updatedTodo;
      return this.todos[index];
    } else return this.todos;
  }

  getAll() {
    // done
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo < this.todos.length) return this.todos[indexOfTodo];
    return null;
  }

  clear() {
    // done
    this.todos = [];
  }
}

module.exports = Todo;
