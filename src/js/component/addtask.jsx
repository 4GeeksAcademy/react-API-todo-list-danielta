import React from "react";



const AddTask = (props) => {

    const removeTask = (id) => {
        fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) throw Error(res.statusText);
                console.log(res);
                props.getFetch();
            })
            .catch(error => console.error(error));
    };

    return (
        <div id="item">
            <div>{props.task.label}</div>
            <span className="X btn" onClick={() => {
                removeTask(props.id);
            }}>X</span>
        </div>
    )
}

export default AddTask;