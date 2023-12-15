import React, { useState } from "react";
import "../styleSheets/taskForm.css";
import { v4 as uuidv4 } from "uuid";

const TaskForm = (props) => {
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
		// console.log(e.target.value);
	};

	const handleSend = (e) => {
		e.preventDefault();
		// console.log("Form sent");

		const newTask = {
			id: uuidv4(),
			text: input,
			completed: false,
		};

		props.onSubmit(newTask);
	};

	return (
		<form className="taskForm" onSubmit={handleSend}>
			<input className="taskInput" type="text" placeholder="Write a task" name="text" onChange={handleChange} />
			<button className="taskButton">Add task</button>
		</form>
	);
};

export default TaskForm;
