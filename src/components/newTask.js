import React, { useState } from 'react';


export const NewTask = props => {

    const [newTaskName, setTaskName] = useState('');
    const [newTaskDescription, setTaskDescription] = useState('');

    const updateTaskName = e => setTaskName(e.target.value)
    const updateTaskDescription = e => setTaskDescription(e.target.value)
    const createNewTask = () => {
        (props.addTask(newTaskName, newTaskDescription))
        setTaskName('')
        setTaskDescription('')
    }

    

    return (
        <div className="my-1">
            <label htmlFor="form-control">Name</label>
            <input type="text" className="form-control"
                value={newTaskName}
                onChange={updateTaskName}
            />
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={newTaskDescription} rows="3" onChange={updateTaskDescription} ></textarea>
            <button className="btn btn-primary mt-1" onClick={createNewTask}>
                add
            </button>

        </div>
    )
}