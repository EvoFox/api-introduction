import { useEffect, useState } from "react";
import "./App.css";
import AnimalCard from "./components/AnimalCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";

const App = () => {
	const [zooAnimal, setZooAnimal] = useState([]);
	const [error, setError] = useState(null);

	// Code-along
	useEffect(() => {
		const fetchAnimals = async () => {
			try {
				const response = await fetch(
					"https://zoo-animal-api.herokuapp.com/animals/rand/4"
				);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const data = await response.json();
				setZooAnimal(data);
				console.log(data);
			} catch (error) {
				console.log(error);
				setError("Could not fetch the data.");
			}
		};
		fetchAnimals();
	}, []);

	const [fox, setFox] = useState([]);
	const [modal, setModal] = useState(false);

	//Solo version, pulling from randomfox.ca/floof
	// JSON data in this is {image} and {link}
	useEffect(() => {
		const fetchFox = async () => {
			try {
				const response = await fetch("https://randomfox.ca/floof/");
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const data = await response.json();
				setFox(data);
				console.log(data);
			} catch (error) {
				console.log(error);
				setError("Could not fetch the fox 😢");
			}
		};
		fetchFox();
	}, []);

	const openModal = () => {
		setModal((prev) => !prev);
	};

	return (
		<div className="App">
			<Header />
			{error && <p>{error}</p>}
			<button className="main-btn" onClick={openModal}>
				Get a fox!
			</button>
			{modal ? (
				<Modal image={fox.image} link={fox.image} setModal={setModal} />
			) : null}

			{/* <div className="animal-card-wrapper">
				{zooAnimal.map((animal) => (
					<AnimalCard
						name={animal.name}
						latin={animal.latin_name}
						type={animal.animal_type}
						lifespan={animal.lifespan}
						habitat={animal.habitat}
						diet={animal.diet}
						geographical={animal.geo_range}
						image={animal.image_link}
					/>
				))}
			</div> */}
			<Footer />
		</div>
	);
};

export default App;
