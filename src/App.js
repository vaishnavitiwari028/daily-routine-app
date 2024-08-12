import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { useTasks } from './useTasks';

const App = () => {
  const { tasks, addTask, updateTaskStatus, deleteTask } = useTasks();

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
