import React, {useState} from 'react';
import TaskList from './components/TaskList';
import TaskInput from "./components/TaskInput";
import './App.css';
import {Task} from "./Types";

const initialState: Task[] = [
  {
    id: 2,
    title: '次のTODO',
    done: false
  },
  {
    id: 1,
    title: '最初のTODO',
    done: true
  },
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState)
  return (
    <div>
      <TaskInput />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
