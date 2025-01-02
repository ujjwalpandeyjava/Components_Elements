function Navbar() {

	return (
		<div className="navbar" >
			<h1>IAM<span style={{ "color": "orangered" }}>UJJWALPANDEY</span></h1>
			<div className="hamburger">
				<input type="checkbox" id="check" />
				<label htmlFor="check">
					<i className="fas fa-bars" id="btn"></i>
					<i className="fas fa-times" id="cancel"></i>
				</label>
				<div className="sidebar move" onClick={() => document.getElementById("check").click()}>
					<h3><a href="#home">Home</a></h3>
					<h3><a href="#aboutSection">About</a></h3>
					<h3><a href="#experience">Experience</a></h3>
					<h3><a href="#skills">Skills</a></h3>
					<h3><a href="#summarySection">Summary</a></h3>
					<h3><a href="#contactMeSection">Contact</a></h3>
				</div>
			</div>
			<div className="menus">
				<h3><a href="#home">Home</a></h3>
				<h3><a href="#aboutSection">About</a></h3>
				<h3><a href="#experience">Experience</a></h3>
				<h3><a href="#skills">Skills</a></h3>
				<h3><a href="#summarySection">Summary</a></h3>
				<h3><a href="#contactMeSection">Contact</a></h3>
			</div>
		</div>
	)
}
export default Navbar;