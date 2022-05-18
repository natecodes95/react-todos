import React, { useState } from "react";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const addTask = (name) => {
    const newTask = { id: "id", name: name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completd={task.completd}
      key={task.id}
    />
  ));
  // const taskList = props.tasks?.map((task) => (
  //   <Todo
  //     id={task.id}
  //     name={task.name}
  //     completed={task.completed}
  //     key={task.id}
  //   />
  // ));

  return (
    <div className="todoapp stack-large">
      <h1>React To Do List</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul>{taskList}</ul>
    </div>
  );
}

export default App;
