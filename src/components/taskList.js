import { NewTask } from './newTask'


export const TaskRow = props => 
{

 

  return(
  <tr key={props.task.name}>
    <td>{props.task.name}</td>
    <td>
      {props.task.description}
    </td>
   
    <td>
      <button  type="button" className="btn btn-danger" onClick={() => props.deleteTask(props.task.name)}>Delete</button>
      <button type="button" className="btn btn-info" >
        Edit
      </button>
    </td>

  </tr>
  )
};