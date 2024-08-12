import React from 'react';
import TaskItem from './TaskItem';
import './App.css'; 

const TaskList = ({ tasks, updateTaskStatus, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
