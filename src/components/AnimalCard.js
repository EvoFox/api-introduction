import styled from "styled-components";

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
	// Styled Components
	const Wrapper = styled.div`
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;

		width: 45%;
		margin: 30px;
		background-color: #ada7c9;
		padding-bottom: 30px;
		border-radius: 30px;
	`;

	const AnimalImg = styled.img`
		width: 400px;
		height: 400px;
		object-fit: cover;

		margin-top: 30px;
		border-radius: 30px;
	`;
	const AnimalTable = styled.table`
		margin: auto;
		width: 80%;
	`;

	const AnimalTitle = styled.td`
		width: 20%;
		padding-top: 10px;
	`;
	const AnimalContent = styled.td`
		width: 80%;
	`;

	return (
		<Wrapper>
			<AnimalImg src={image} alt={type} />
			<h2>{name}</h2>
			<AnimalTable>
				<tr>
					<AnimalTitle>Property</AnimalTitle>
					<AnimalContent>Description</AnimalContent>
				</tr>
				<tr>
					<AnimalTitle>Latin Name</AnimalTitle>
					<AnimalContent>{latin}</AnimalContent>
				</tr>
				<tr>
					<AnimalTitle>Type of animal</AnimalTitle>
					<AnimalContent>{type}</AnimalContent>
				</tr>
				<tr>
					<AnimalTitle>Lifespan</AnimalTitle>
					<AnimalContent>{lifespan} years</AnimalContent>
				</tr>
				<tr>
					<AnimalTitle>Habitat and diet</AnimalTitle>
					<AnimalContent>
						Lives in {habitat} and is most commonly found in {geographical}{" "}
						where it eats {diet}
					</AnimalContent>
				</tr>
			</AnimalTable>
		</Wrapper>
	);
};

export default AnimalCard;
