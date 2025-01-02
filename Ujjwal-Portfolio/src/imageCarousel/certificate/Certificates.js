import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, HashNavigation, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import c1 from '../certificate/images/Bootstrap 4 with projects.jpg';
import c2 from '../certificate/images/Complete Front-End Web Development Course.jpg';
import c3 from '../certificate/images/Advanced JS - JavaScript for QA Engineers and SDETs.jpg';
import c4 from '../certificate/images/React- 6.5hr course.jpg';
import c5 from '../certificate/images/Bootstrap - Unleash the power Rapid web Development.jpg';
import c6 from '../certificate/images/Web Development - 22 Courses in 1 Course.jpg';
import c7 from '../certificate/images/Java Servlets and JSP - Build Java EE app.jpg';
import c8 from '../certificate/images/Complete Best ever Java Course 2000+ example, 92 hours lecture.jpg';
import c9 from '../certificate/images/Java Programming - Complete Beginner to Advanced.jpg';
import c10 from '../certificate/images/Spring Framework with Spring Boot.jpg';
import c11 from '../certificate/images/Daily Brief Internship Certificate Ujjwal.jpg';
import c12 from '../certificate/images/Awesome - Java Programming.jpg';
import c13 from '../certificate/images/Python from Udemy.jpg';
import c14 from '../certificate/images/React Js - Complete Guid fro Frontend Web Development.jpg';
import c15 from '../certificate/images/Java Collection Frameworks + Generics+ 5.5Hrs.jpg';
import CSS from './Certificates.module.css';



const certificatesJSON = [
	{
		name: "Bootstrap 4 with projects",
		description: "About this certificate",
		path: c1
	},
	{
		name: "Complete Front-End Web Development Course",
		description: "About this certificate",
		path: c2
	},
	{
		name: "Advanced JS - JavaScript for QA Engineers and SDETs",
		description: "About this certificate",
		path: c3
	},
	{
		name: "React- 6.5hr course",
		description: "About this certificate",
		path: c4
	},
	{
		name: "Bootstrap - Unleash the power Rapid web Development",
		description: "About this certificate",
		path: c5
	},
	{
		name: "Web Development - 22 Courses in 1 Course",
		description: "About this certificate",
		path: c6
	},
	{
		name: "Java Servlets and JSP - Build Java EE app",
		description: "About this certificate",
		path: c7
	},
	{
		name: "Complete Best ever Java Course 2000+ example, 92 hours lecture",
		description: "About this certificate",
		path: c8
	},
	{
		name: "Java Programming - Complete Beginner to Advanced",
		description: "About this certificate",
		path: c9
	},
	{
		name: "Spring Framework with Spring Boot",
		description: "About this certificate",
		path: c10
	},
	{
		name: "Daily Brief Internship Certificate Ujjwal",
		description: "About this certificate",
		path: c11
	},
	{
		name: "Awesome - Java Programming",
		description: "About this certificate",
		path: c12
	},
	{
		name: "Python from Udemy",
		description: "About this certificate",
		path: c13
	},
	{
		name: "React Js - Complete Guid fro Frontend Web Development",
		description: "About this certificate",
		path: c14
	},
	{
		name: "Java Collection Frameworks Generics+ 5.5Hrs",
		description: "About this certificate",
		path: c15
	}
]
function Certificates() {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);

	const [allSlides, setAllSlides] = useState([]);


	useEffect(() => {
		[...certificatesJSON].forEach((eachImg, index) => {
			let newSlide = <SwiperSlide key={"eachSlide" + (index + 1)}>
				<article className={CSS.eachCertificate}>
					<section className={CSS.eachCertificate_Inner}><img className={CSS.eachCertificateImg} src={eachImg.path} alt={eachImg.name} /></section>
					<section className={CSS.eachCertificate_Details}>
						<section className={CSS.eachCertificate_Inner_Name}>{eachImg.name}</section>
					</section>
				</article>
			</SwiperSlide>
			setAllSlides(prevSlides => [...prevSlides, newSlide]);
		});
		return () => {
			setAllSlides([]);
		}
	}, []);

	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};


	return (
		<div className={`${CSS.certificates} parallelBackgroundImage bg-Image1`}>
			<h1 className='sectionHeading blueHeading mb-1em'>Certificates</h1>
			<Swiper
				centeredSlides={true}
				spaceBetween={60}
				slidesPerView={2}
				breakpoints={{
					// width >= 0px
					0: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					// width >= 640px
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
					1824: {
						slidesPerView: 4,
						spaceBetween: 50,
					}
				}}
				loop={true}
				autoplay={{
					delay: 25000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				navigation={true}
				hashNavigation={{
					watchState: true,
				}}
				keyboard={{
					enabled: true,
				}}
				modules={[Autoplay, Pagination, Navigation, HashNavigation, Keyboard]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				className="mySwiper">
				{allSlides}
				<div className={CSS.autoplay_progress} slot="container-end">
					<svg viewBox="0 0 48 48" ref={progressCircle}>
						<circle cx="24" cy="24" r="20"></circle>
					</svg>
					<span ref={progressContent}></span>
				</div>
			</Swiper>
		</ div>
	)
}
export default Certificates