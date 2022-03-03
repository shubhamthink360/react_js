// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

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
// Delete Task
const deleteTask=(id) =>{
  setTasks(tasks.filter((task)=>task.id!==id));
}
const addTask = (task) => {
  console.log(task)
}
 //Toggle reminder
 const toggleReminder=(id) =>{
   setTasks(
     tasks.map((task)=>
     task.id===id ? {...task,reminder : !task.reminder
     } :task )
   )
 }
  return (
    <>      
      <div className="container">
      <Header title="Default props and isRequired Test"/>
      <AddTask onAdd={addTask}/>
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: "No tasks"}  
      
      </div>
    </>
  );
}
export default App;
