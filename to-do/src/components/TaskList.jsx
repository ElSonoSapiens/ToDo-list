import React, { useState } from "react";
import Task from "../components/Task.jsx";
import TaskForm from "../components/TaskForm.jsx";
import "../styleSheets/taskList.css";

const TaskList = () => {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		console.log(task);
		if (task.text.trim()) {
			task.text = task.text.trim();
			const tasksUpdated = [task, ...tasks];
			setTasks(tasksUpdated);
		}
		// console.log("Task added");
	};

	const deleteTask = (id) => {
		const tasksUpdated = tasks.filter((task) => task.id !== id);
		setTasks(tasksUpdated);
	};

	const completeTask = (id) => {
		const tasksUpdated = tasks.map((task) => {
			if (task.id === id) {
				task.completed = !task.completed;
			}
			return task;
		});
		setTasks(tasksUpdated);
	};

	return (
		<>
			<TaskForm onSubmit={addTask} />
			<div className="taskListContainer">
				{tasks.map((task) => (
					<Task key={task.id} id={task.id} text={task.text} completed={task.completed} completeTask={completeTask} deleteTask={deleteTask} />
				))}
			</div>
		</>
	);
};

export default TaskList;
