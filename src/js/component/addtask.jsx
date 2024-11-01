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

    const completeTask = (id) => {
        fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(
				{
					"label": props.task.label,
					"is_done": true
				}
			),
			headers: {
				'Content-type': 'application/json'
			}
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(response => props.getFetch())
			.catch(error => console.error(error));
    }

    return (
        <div id="item">
            <div id="label">{props.task.label}</div>
            <span id="complete" type="button" className={props.task.is_done ? "completed" : "btn btn-outline-success"} onClick={()=> {
                completeTask(props.id)
            }}>{props.task.is_done ? "completed" : "complete"}</span>
            <span className="X btn" onClick={() => {
                removeTask(props.id);
            }}>X</span>
        </div>
    )
}

export default AddTask;