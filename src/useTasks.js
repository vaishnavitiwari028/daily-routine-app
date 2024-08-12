import { useState, useEffect } from 'react';
import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (task) => {
    try {
      const response = await axios.post(`${backendUrl}/api/tasks`, { text: task, status: 'to do' });
      setTasks(prevTasks => [...prevTasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTaskStatus = async (id, status) => {
    try {
      const response = await axios.put(`${backendUrl}/api/tasks/${id}`, { status });
      setTasks(prevTasks => prevTasks.map(task => (task.id === id ? response.data : task)));
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/tasks/${id}`);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return { tasks, addTask, updateTaskStatus, deleteTask };
};
