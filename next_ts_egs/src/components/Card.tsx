import Image from 'next/image';
import "../app/globals.css";
import { ReactNode } from 'react';

interface CardProps {
	children?: ReactNode;
	imageSrc?: string;
	title?: string;
	text?: string;
}
const Card = ({ children, imageSrc, title, text }: CardProps) => {
	if (children) {
		return <div className="card">{children}</div>;
	}
	return (
		<div className="card">
			{imageSrc && <div className="card-img-wrapper">
				<Image src={imageSrc}
					alt={title || "Card Image"}
					width={300}
					height={180}
					className="card-img"
				/>
			</div>}
			<div className="card-content">
				{title && <h2 className="card-title">{title}</h2>}
				{text && <p className="card-text">{text}</p>}
				<button className="card-btn">Learn More</button>
			</div>
		</div>
	);
};

export default Card;
