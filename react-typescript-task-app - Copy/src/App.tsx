import React, { Fragment, useState, useRef } from "react";
import "./App.css";

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const taskInput = useRef<InputElement>(null);

  interface Task {
    name: string;
    done: boolean;
  }
  type FormElement = React.FormEvent<HTMLFormElement>;
  type InputElement = HTMLInputElement;

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    taskInput.current?.focus();
  };

  const addTask = (name: string): void => {
    const newTasks: Task[] = [...tasks, { name: name, done: false }];
    setTasks(newTasks);
    console.log(tasks);
  };

  // const toggleDoneTask = (tDone: Task) => {

  // }
  const toggleDoneTask = (index: number): void => {
    const newTasks: Task[] = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const removeTask = (index: number): void => {
    const newTasks: Task[] = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <div className="wrapperForm">
        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="Escribe aquí tu tarea"
            className="inputForm"
            type="text"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            ref={taskInput}
            autoFocus
          />

          <button id="submitButton" type="submit">
            Save
          </button>
        </form>
      </div>
      {tasks.map((t: Task, i: number) => {
        return (
          <>
            <div
              key={i}
              className="wrapper-h1"
              style={{ backgroundColor: "white" }}
            >
              <h1
                className="titleH1"
                style={{
                  textDecoration: t.done === true ? "line-through" : "",
                }}
              >
                {t.name}
              </h1>
              <div className="wrapperButtons">
                <button
                  className="button-completed"
                  onClick={
                    () => toggleDoneTask(i)
                    // () => toggleDoneTask(t)
                  }
                >
                  {t.done === true ? "❌" : "✔️"}
                </button>
                <button className="deleteTask" onClick={() => removeTask(i)}>
                  🗑️
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
