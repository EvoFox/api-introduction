import { useEffect, useState } from "react";
import styled from "styled-components";

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

	// Styled Components
	const App = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	`;
	const Content = styled.div`
		width: 100vw;
		height: auto;

		padding-top: 110px;
		padding-bottom: 60px;
		background-color: #64a6bd;
		margin: auto;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	`;
	const FoxButton = styled.button`
		min-width: 100px;
		max-height: 70px;
		margin: auto;
		padding: 16px 32px;
		border-radius: 4px;
		border: none;
		background: var(--color-4);
		color: #fff;
		font-size: 24px;
		cursor: pointer;
	`;

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
		<App>
			<Header />

			<Content>
				{error && <p>{error}</p>}
				<FoxButton onClick={openModal}>Get a fox!</FoxButton>
				{modal ? (
					<Modal image={fox.image} link={fox.image} setModal={setModal} />
				) : null}
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
			</Content>
			<Footer />
		</App>
	);
};

export default App;
