const AnimalCard = ({
	name,
	latin,
	type,
	lifespan,
	habitat,
	diet,
	geographical,
	image,
}) => {
	return (
		<div className="animal-card">
			<img src={image} alt={type} />
			<h2>{name}</h2>
			<table>
				<tr>
					<td className="title">Property</td>
					<td className="title">Description</td>
				</tr>
				<tr>
					<td className="title">Latin Name</td>
					<td className="content">{latin}</td>
				</tr>
				<tr>
					<td className="title">Type of animal</td>
					<td className="content">{type}</td>
				</tr>
				<tr>
					<td className="title">Lifespan</td>
					<td className="content">{lifespan} years</td>
				</tr>
				<tr>
					<td className="title">Habitat and diet</td>
					<td className="content">
						Lives in {habitat} and is most commonly found in {geographical}{" "}
						where it eats {diet}
					</td>
				</tr>
			</table>
		</div>
	);
};

export default AnimalCard;


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
			{/* <Footer /> */}