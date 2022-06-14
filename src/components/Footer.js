import styled from "styled-components";

const Footer = () => {
	const Foot = styled.div`
		position: fixed;
		bottom: 0;
		z-index: 1;

		width: 100vw;
		height: 50px;

		display: flex;
		justify-content: center;
		padding-top: 30px;

		background-color: var(--color-2);
		font-family: var(--main-font);
	`;

	return (
		<Foot>
			<sub>Evo Fox</sub>
		</Foot>
	);
};

export default Footer;
