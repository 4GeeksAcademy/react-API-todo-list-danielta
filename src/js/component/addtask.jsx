import React from "react";



const AddTask = (props) => {

    const removeTask = (index) => {
        var newList=props.taskList.filter((element, index2) => index2 != index)
        props.setTaskList(newList)
    }

    return (
        <div id="item">
            <div>{props.task}</div>
            <span className="X btn" onClick={()=>removeTask(props.index)}>X</span>
        </div>
    )
}

export default AddTask;