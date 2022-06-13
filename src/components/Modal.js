import { motion } from "framer-motion";

const Modal = ({ image, link, setModal }) => {
	return (
		<div className="modal-bg">
			<motion.div
				className="modal-wrapper"
				initial={{ x: -1000 }}
				animate={{
					x: 0,
					duration: 2,
				}}
			>
				<img className="modal-img" src={image} />
				<div className="modal-content">
					<p className="modal-p"></p>
					<a
						className="modal-btn"
						href={link}
						target="_blank"
						onClick={() => setModal((prev) => !prev)}
					>
						Click here to share this fox!
					</a>
				</div>
				<button
					className="close-modal"
					aria-label="Close modal"
					onClick={() => setModal((prev) => !prev)}
				/>
			</motion.div>
		</div>
	);
};

export default Modal;
