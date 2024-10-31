import React from "react";
import { useState, useEffect } from "react";
import AddTask from "./addtask";


const List = (props) => {
    useEffect(() => {props.getFetch()},[])

    return (
        <div className = "list">
            {props.taskList.map((task, index) => (
                <AddTask key={index} id={task.id} task={task} taskList={props.taskList} setTaskList={props.setTaskList} getFetch={props.getFetch}/>)
            )}
        </div>
    )


}


export default List;

