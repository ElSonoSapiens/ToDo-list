import "./App.css";
import logo from "./img/kiwi.jpeg";
import Contador from "./components/contador.jsx";
import Boton from "./components/boton.jsx";
import { useState } from "react";

function App() {
	const [numClicks, setNumClicks] = useState(0);

	const manejarClick = () => {
		setNumClicks(numClicks + 1);
	};

	const reiniciarContador = () => {
		setNumClicks(0);
	};

	return (
		<div className="App">
			<div className="logo-contenedor">
				<img src={logo} alt="logardo" />
			</div>
			<div className="contenedor-principal">
				<Contador numClicks={numClicks} />
				<Boton texto="Click" esBotonDeClick={true} manejarClick={manejarClick} />
				<Boton texto="Reiniciar" esBotonDeClick={false} manejarClick={reiniciarContador} />
			</div>
		</div>
	);
}

export default App;
