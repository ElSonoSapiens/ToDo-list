import "./App.css";
import img from "./img/img.jpeg";
import TaskList from "./components/TaskList.jsx";

function App() {
	return (
		<div className="App">
			<div className="taskApp">
				<div className="logoContainer"></div>
				{/* Espacio */}
				<div className="taskMainList">
					<h1>Tasks</h1>
					<TaskList />
				</div>
				<img className="logo" src={img} alt="logo de imagen" />
			</div>
		</div>
	);
}

export default App;
