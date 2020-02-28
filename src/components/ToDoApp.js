import React, { Component } from "react";

class ToDoApp extends Component {
  state = {
    input: "",
    todos: [
      {
        title: "My task",
        isCompleted: false,
        id: 0
      }
    ]
  };


  // When the value input changes , we save it in the state.input
  handleInput = e => this.setState({ input: e.target.value });

  //Add btn , we check if the input is not Empty then we create a new Todo and Add it in the state
  handleAddTodo = () => {
    if (this.state.input.trim() === "")
      return alert("Cannot add an empty todo");

    const newTodo = {
      title: this.state.input,
      isCompleted: false,
      id: Date.now()
    };
    //add The new Todo and reset the input
    //                      old state.todosValue + newTodo(object)
    this.setState({ todos: [...this.state.todos, newTodo], input: "" });
  };

  // OnClick , depends of the id , we change the state of isCompleted to true
  handleComplete = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(el =>
        el.id === id ? { ...el, isCompleted: !el.isCompleted } : el
      )
    });
  };

  // onCLick depends of the id , we filter the old state of todos to remove the item from the data
  hadndleDelete = id =>
    this.setState({
      todos: this.state.todos.filter(el => el.id !== id)
    });

  render() {
    return (
      <>
        <div className="jumbotron jumbotron-fluid bg-primary text-light">
          <div className="container ">
            <h1 className="display-3 font-weight-bold text-right">To-Do-App</h1>
            <p className="lead text-right">Add new Task</p>
            <input
              onChange={this.handleInput}
              type="text"
              value={this.state.input}
              className="task-input form-control mb-3"
              placeholder="Add new Task"
            />
            <button
              onClick={this.handleAddTodo}
              className="btn-add btn btn-primary btn-outline-light float-right"
            >
              Add
            </button>
          </div>
        </div>
        <ul className="tasks-container container ">
          <li className="d-flex justify-content-center">
            <h2 className="  text-muted border-bottom text-center pb-3 ">
              Let's get some work done !
            </h2>
          </li>

          {/* todo card map  */}
          {this.state.todos.map(el => (
            <li
              className="row d-flex align-items-baseline border-bottom py-3"
              key={el.id}
            >
              <button
                onClick={() => this.handleComplete(el.id)}
                className="btn-outline-secondary btn mr-3"
              >
                {el.isCompleted ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => this.hadndleDelete(el.id)}
                className="btn-outline-secondary btn mr-3"
              >
                Delete
              </button>
              <h3
                style={
                  el.isCompleted ? { textDecoration: "line-through" } : null
                }
              >
                {el.title}
              </h3>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ToDoApp;
