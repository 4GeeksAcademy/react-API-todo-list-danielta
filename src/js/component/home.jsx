import React from "react";
import { useState } from "react";
import List from "./List";
import Login from "./loginpage";


//create your first component
const Home = () => {
	const [taskList, setTaskList] = useState([])
	const [createTask, setCreateTask] = useState("")
	const [user, setUser] = useState("")
	const [password, setPassword] = useState("")
	const [loggedIn, setLoggedIn] = useState(false)
	const [registeredUsers, setRegisteredUsers] = useState([
		{user: "Daniel", password: "1234"}, 
		{user: "George", password: "5678"}, 
		{user: "Derek", password: "password"}, 
		{user: "Marjorie", password: "passphrase"}
	])

	const addItem = (newItem) => {
		setTaskList([...taskList, newItem]);
	};

	return (
		<div>
			{loggedIn == true ?
				<div className="page">
					<h1>todos</h1>
					<div id="toDoList">
						<div id="addLine">
							<input id="inputField" type="text" onChange={(e) => setCreateTask(e.target.value)} value={createTask} onKeyUp={(e) => {
								if (e.key === "Enter") {
									if (createTask == "") {null}
									else {
										addItem(createTask);
										setCreateTask("");}
								}
							}} />
							<span id="addButton" className="btn btn-primary" onClick={() => {
								if (createTask == "") {null}
								else {
									addItem(createTask);
									setCreateTask("");}
							}}>Add</span>
						</div>
						<List taskList={taskList} setTaskList={setTaskList} />
						<div id="itemCounter">{taskList.length === 0 ? "No tasks in list" : `${taskList.length} items left`}</div>
					</div>
				</div>
				:
				<Login user={user} setUser={setUser} password={password} setPassword={setPassword} loggedIn={loggedIn} setLoggedIn={setLoggedIn} registeredUsers={registeredUsers} setRegisteredUsers={setRegisteredUsers}/>
			}</div>
	);
};

export default Home;
