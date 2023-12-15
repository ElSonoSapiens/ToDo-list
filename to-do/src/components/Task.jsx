import React from "react";
import "../styleSheets/task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Task = ({ id, text, completed, completeTask, deleteTask }) => {
	return (
		<div className={completed ? "taskContainer completed" : "taskContainer"}>
			<div className="taskText" onClick={() => completeTask(id)}>
				{text}
			</div>
			<div className="taskIconContainer" onClick={() => deleteTask(id)}>
				<AiOutlineCloseCircle className="taskIcon" />
			</div>
		</div>
	);
};

export default Task;
