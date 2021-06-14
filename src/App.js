import './App.css';
import React, { useState } from 'react';
import Navegation from './components/nav'

import { TaskRow } from './components/taskList'
import { NewTask } from './components/newTask'

function App() {

  const [userName, setUserName] = useState("Braian");
  const [taskItems, setTaskItems] = useState([
    {
      "name": "Task One",
      "description": "descripcion de la tarea 1",
    
    },
    {
      "name": "Task two",
      "description": "descripcion de la tarea 2",
  
    },
    {
      "name": "Task three",
      "description": "descripcion de la tarea 3",
      
    }
  ]
  );

  const addTask = (taskName,taskDescription) => {
   if(taskName === '') {
      alert("tu tarea no puede tener nombre vacio")
    }else if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, description:taskDescription}])
    }
    
    else{
      alert("ya existe una task con ese nombre")
    }
  }

  const deleteTask = taskName =>{
      const filteredTask = taskItems.filter(t=>t.name !==taskName)
      setTaskItems(filteredTask)
      }
  
  const returnTaskInfo = (taskName, taskDescription)=>{
      const taskInfo = setTaskItems({name:taskName , description:taskDescription })
    return(
      taskInfo
    )
  }

  const taskTableRows = () =>
    taskItems.map(task => (
      <TaskRow key={task.name} task={task} deleteTask={deleteTask} />
    ));

  return (
    <div className="App">
      <Navegation title={"Tasks react"} userName={userName} taskItems={taskItems} />
      <NewTask addTask={addTask} />
      <div className="table">
        <table className="table table-stripped table-bordered">
          <thead>
            <tr>
              <th> Name</th>
              <th> Description</th>
              <th>Delte</th>
            </tr>
          </thead>

          <tbody>
            {taskTableRows()}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
