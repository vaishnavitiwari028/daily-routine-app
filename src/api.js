import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080';

export const fetchTasks = async () => {
  try {
    const { data } = await axios.get(`${backendUrl}/api/tasks`);
    return data;
  } catch (error) {
    throw new Error('Error fetching tasks');
  }
};

export const addTask = async (taskText) => {
  try {
    const { data } = await axios.post(`${backendUrl}/api/tasks`, {
      text: taskText,
      status: 'to do'
    });
    return data;
  } catch (error) {
    throw new Error('Error adding task');
  }
};

export const updateTaskStatus = async (id, newStatus) => {
  try {
    const { data } = await axios.put(`${backendUrl}/api/tasks/${id}`, {
      status: newStatus
    });
    return data;
  } catch (error) {
    throw new Error('Error updating task status');
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${backendUrl}/api/tasks/${id}`);
  } catch (error) {
    throw new Error('Error deleting task');
  }
};
