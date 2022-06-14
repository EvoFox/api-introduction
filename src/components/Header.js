import styled from "styled-components";

const Header = () => {
	const Head = styled.div`
		position: fixed;
		top: 0;
		z-index: 1;

		width: 100vw;
		height: 100px;

		display: flex;
		justify-content: space-evenly;
		padding-top: 30px;

		background-color: var(--color-2);
		font-family: var(--main-font);
	`;
	return (
		<Head>
			<h1>Week 6</h1>
			<h2>Code Nation</h2>
		</Head>
	);
};

export default Header;
