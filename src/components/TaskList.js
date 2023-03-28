import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.taskId} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;

