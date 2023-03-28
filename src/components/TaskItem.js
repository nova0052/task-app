import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li>
      {task.title}
      {/* TODO: Add buttons or actions to update, complete, or delete tasks */}
    </li>
  );
};

export default TaskItem;

