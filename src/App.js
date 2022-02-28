// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  // State
  const[tasks, setTasks] = useState([
  {
      id: 1,
      text: "Task 1",
      day: "28th Feb 2022",
      reminder: true, 
  },
  {
      id: 2,
      text: "Task 2",
      day: "1 March 2022",
      reminder: true, 
  },
  {
      id: 3,
      text: "Task 3",
      day: "28th Feb 2022",
      reminder: false, 
  },
  ])
  return (
    
    <>      
      <div className="container">
      <Header title="Default props and isRequired Test"/>
      <Tasks tasks={tasks}/>  
      </div>
    </>
  );
}
export default App;
