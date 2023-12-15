import "./App.css";
import img01 from "./img/img-01.png";
import TaskList from "./components/TaskList.jsx";

function App() {
	return (
		<div className="App">
			<div className="taskApp">
				<div className="logoContainer">
					<img className="logo" src={img01} alt="logo de imagen" />
				</div>
				{/* Espacio */}
				<div className="taskMainList">
					<h1>Tasks</h1>
					<TaskList />
				</div>
			</div>
		</div>
	);
}

export default App;
