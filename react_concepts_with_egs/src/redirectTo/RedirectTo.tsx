import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface RedirectToProps {
	url: string;
}

const RedirectTo: React.FC<RedirectToProps> = ({ url }) => {
	const nav = useNavigate();

	useEffect(() => {
		nav(url);
	}, [url]);

	return <>{url}</>;
};

export default RedirectTo;