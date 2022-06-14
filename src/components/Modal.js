import { motion } from "framer-motion";
import styled from "styled-components";

const Modal = ({ image, link, setModal }) => {
	const ModalBackground = styled.div`
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 9999;

		position: fixed;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	`;
	const ModalWrapper = styled.div`
		width: 800px;
		height: 500px;
		box-shadow: 0 5px, 16px rgba(0, 0, 0, 0.2);
		background-color: #fff;
		color: #000;
		display: grid;
		grid-template-columns: 1fr 1fr;
		position: relative;
		z-index: 10;
		border-radius: 10px;
		button {
			cursor: pointer;
			position: absolute;
			top: 20px;
			right: 20px;
			width: 32px;
			height: 32px;
			padding: 0;
			z-index: 10;
		}
	`;

	const FoxImage = styled.img`
		width: 100%;
		height: 500px;
		object-fit: cover;
		border-radius: 10px 0 0 10px;
		background: var(--color-5);
	`;

	const ModalContent = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		line-height: 1.8;
		color: var(--color-4);
		p {
			margin-bottom: 1rem;
		}
		a {
			-webkit-appearance: button;
			-moz-appearance: button;
			appearance: button;

			text-decoration: none;
			color: initial;

			padding: 10px 24px;
			background: var(--color-4);
			color: #fff;
			border: none;
		}
	`;

	return (
		<ModalBackground>
			<ModalWrapper
				as={motion.div}
				className="modal-wrapper"
				initial={{ x: -1000 }}
				animate={{
					x: 0,
					duration: 2,
				}}
			>
				<FoxImage src={image} />
				<ModalContent>
					<p className="modal-p"></p>
					<a
						className="modal-btn"
						href={link}
						target="_blank"
						onClick={() => setModal((prev) => !prev)}
					>
						Share this fox!
					</a>
				</ModalContent>
				<button
					aria-label="Close modal"
					onClick={() => setModal((prev) => !prev)}
				/>
			</ModalWrapper>
		</ModalBackground>
	);
};

export default Modal;
