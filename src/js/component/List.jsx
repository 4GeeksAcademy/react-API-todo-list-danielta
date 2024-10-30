import React from "react";
import { useState } from "react";
import AddTask from "./addtask";


const List = (props) => {

    return (
        <div className = "list">
            {props.taskList.map((task, index) => (
                <AddTask key={index} index={index} task={task} taskList={props.taskList} setTaskList={props.setTaskList}/>)
            )}
        </div>
    )


}


export default List;

