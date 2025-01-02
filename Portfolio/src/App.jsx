import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";


export default function App() {
	return (
		<>
			<Navbar />
			<div className='sectionBody'>
				<Outlet />
				<Toaster position="bottom-right" />
			</div >
		</>
	)
}