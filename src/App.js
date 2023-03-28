import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
// import any other required components or styles

const App = () => {
  // You can manage the state for tasks here, and pass it down to TaskList as a prop
  // const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      {/* <TaskList tasks={tasks} /> */}
    </div>
  );
};

export default App;

