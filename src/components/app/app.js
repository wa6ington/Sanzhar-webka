import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";
import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1, done: false },
      { label: "Make Awesome App", important: true, id: 2, done: false },
      { label: "Have a lunch", important: false, id: 3, done: false },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((item) => item.id !== id),
    }));
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: Date.now(), // Генерация уникального ID
      done: false,
    };

    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem],
    }));
  };

  render() {
    const doneCount = this.state.todoData.filter((item) => item.done).length;
    const toDoCount = this.state.todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
