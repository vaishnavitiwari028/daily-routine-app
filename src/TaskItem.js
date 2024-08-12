import React from "react";
import "./App.css";

const TaskItem = ({ task, updateTaskStatus, deleteTask }) => {
  return (
    <div className="List">
      <h3>Status: {task.status}</h3>
      <h3>Task Name:  {task.text}</h3> 
      <h3>Change Status: </h3>

      <li>
        <button
          className="button_Progress"
          onClick={() => updateTaskStatus(task.id, "In Progress")}
        >
          In Progress
        </button>
        <button
          className="button_Done"
          onClick={() => updateTaskStatus(task.id, "Done")}
        >
          Done
        </button>
        <button className="button_delete" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default TaskItem;
