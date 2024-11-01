import React from "react";
import { useState, useEffect } from "react";
import List from "./List";
import Login from "./loginpage";


//create your first component
const Home = () => {
	const [taskList, setTaskList] = useState([])
	const [createTask, setCreateTask] = useState("")
	const [user, setUser] = useState("")
	const [password, setPassword] = useState("")
	const [loggedIn, setLoggedIn] = useState(true)
	const [registeredUsers, setRegisteredUsers] = useState([
		{ user: "danielta", password: "1234" },
		{ user: "George", password: "5678" },
		{ user: "Derek", password: "password" },
		{ user: "Marjorie", password: "passphrase" }
	])


	const getFetch = () => {
		fetch("https://playground.4geeks.com/todo/users/danielta")
			.then((res) => res.json())
			.then((response) => setTaskList(response.todos))
			.catch((err) => console.log(err))
	};


	const addItem = (newItem) => {
		fetch('https://playground.4geeks.com/todo/todos/danielta', {
			method: 'POST',
			body: JSON.stringify(
				{
					"label": newItem,
					"is_done": false
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
			.then(response => getFetch())
			.catch(error => console.error(error));
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
									if (createTask == "") { null }
									else {
										addItem(createTask);
										setCreateTask("");
									}
								}
							}} />
							<span id="addButton" className="btn btn-primary" onClick={() => {
								if (createTask == "") { null }
								else {
									addItem(createTask);
									setCreateTask("");
								}
							}}>Add</span>
						</div>
						<List taskList={taskList} setTaskList={setTaskList} getFetch={getFetch} />
						<div id="itemCounter">{taskList && taskList.length !== 0 ? `${taskList.length} items left` : "No tasks in list"}</div>
					</div>
				</div>
				:
				<Login user={user} setUser={setUser} password={password} setPassword={setPassword} loggedIn={loggedIn} setLoggedIn={setLoggedIn} registeredUsers={registeredUsers} setRegisteredUsers={setRegisteredUsers} taskList={taskList} setTaskList={setTaskList} />
			}</div>
	);
};

export default Home;
