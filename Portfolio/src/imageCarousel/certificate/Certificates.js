import { Suspense, useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, HashNavigation, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import c3 from '../certificate/images/Advanced JS - JavaScript for QA Engineers and SDETs.jpg';
import c12 from '../certificate/images/Awesome - Java Programming.jpg';
import c1 from '../certificate/images/Bootstrap 4 with projects.jpg';
import c8 from '../certificate/images/Complete Best ever Java Course 2000+ example, 92 hours lecture.jpg';
import c2 from '../certificate/images/Complete Front-End Web Development Course.jpg';
import c11 from '../certificate/images/Daily Brief Internship Certificate Ujjwal.jpg';
import c15 from '../certificate/images/Java Collection Frameworks + Generics+ 5.5Hrs.jpg';
import c7 from '../certificate/images/Java Servlets and JSP - Build Java EE app.jpg';
import c4 from '../certificate/images/React- 6.5hr course.jpg';
import c10 from '../certificate/images/Spring Framework with Spring Boot.jpg';
import c6 from '../certificate/images/Web Development - 22 Courses in 1 Course.jpg';
import c9 from '../certificate/images/Java Programming.jpg';


import { useImage } from 'react-image';
import certificatesCSS from './Certificates.module.css';

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
		name: "Spring Framework with Spring Boot 5.5+ hours lecture",
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
		name: "Java Collection Frameworks Generics+ 5.5Hrs",
		description: "About this certificate",
		path: c15
	},
	{
		name: "Java Programming for Complete Beginners 3+ hours",
		description: "Java Programming for Complete Beginners",
		path: c9
	}

	
]

function MyImageComponent({ url, imgAlt }) {
	const { src } = useImage({
		srcList: url,
	})
	return <img src={src} alt={imgAlt} />
}

function Certificates() {
	const [allSlides, setAllSlides] = useState([]);
	useEffect(() => {
		[...certificatesJSON, ...certificatesJSON].forEach((eachImg, index) => {
			let newSlide = <SwiperSlide key={"eachSlide" + (index + 1)}>
				<article className={certificatesCSS.eachCertificate}>
					<section className={certificatesCSS.eachCertificate_Inner}><img className={certificatesCSS.eachCertificateImg} src={eachImg.path} alt={eachImg.name} /></section>
					<section className={certificatesCSS.eachCertificate_Details}>
						<section className={certificatesCSS.eachCertificate_Inner_Name}>{eachImg.name}</section>
					</section>
				</article>
			</SwiperSlide>
			setAllSlides(prevSlides => [...prevSlides, newSlide]);
		});
		return () => {
			setAllSlides([]);
		}
	}, []);

	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};
	const numberedPagination = {
		clickable: true,
		dynamicBullets: true,
	};

	return (
		<div className={[certificatesCSS.certificates, "parallelBackgroundImage bg-Image1"].join(" ")}>
			<Suspense>
				<h1 className={certificatesCSS.sectionHeading}>Special Certificates</h1>
				<div className={certificatesCSS.specialCertificates}>
					<MyImageComponent url='https://i.pinimg.com/originals/ba/77/67/ba77677b7be504b25ee2a8ea05c0a385.jpg' imgAlt="My first ever certificate F-Tech" />
					<MyImageComponent url='https://i.pinimg.com/originals/53/dd/ee/53ddeeca3ebe2859ebce42c28673da6b.jpg' imgAlt="3-year Web development specialization certificate From NIIT" />
				</div>
			</Suspense>
			<h1 className={certificatesCSS.sectionHeading}>Dedicated Certifications</h1>
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
					delay: 4000,
					disableOnInteraction: false,
				}}
				pagination={numberedPagination}
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
				<div className={certificatesCSS.autoplay_progress} slot="container-end">
					<svg viewBox="0 0 48 48" ref={progressCircle}>
						<circle cx="24" cy="24" r="20"></circle>
					</svg>
					<span ref={progressContent}></span>
				</div>
			</Swiper>
		</ div >
	)
}

export default Certificates