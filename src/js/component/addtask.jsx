import React from "react";



const AddTask = (props) => {

    const removeTask = (id) => {
        fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) throw Error(res.statusText);
                return res.json();
            })
            .then(response => console.log(response))
            .catch(error => console.error(error));
    };

    return (
        <div id="item">
            <div>{props.task.label}</div>
            <span className="X btn" onClick={() => {
                removeTask(props.id);
                props.getFetch()
            }}>X</span>
        </div>
    )
}

export default AddTask;