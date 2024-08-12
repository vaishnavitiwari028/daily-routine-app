import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, status: "to do" }]);
  };

  const updateTaskStatus = (id, status) => {
    console.log(id, status)
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const deleteTask = (id) => {
    console.log(id)
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="Main">
      <div  className="App">
        <h1>Daily Routine</h1>
        <TaskInput addTask={addTask} />
      </div>
      <div>
        <TaskList
          tasks={tasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
