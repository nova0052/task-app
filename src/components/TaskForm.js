import React, { useState } from 'react';
import { API } from 'aws-amplify';

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newTask = { title: taskTitle };
      await API.post('taskManagerAPI', '/tasks', { body: newTask });
      // TODO: Display success message or update TaskList component
    } catch (error) {
      // TODO: Handle errors and display error messages
    }
    setTaskTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Task Title"
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;

