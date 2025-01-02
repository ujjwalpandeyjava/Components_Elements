import cvPreview from './images/Resume_CV/cvPreviewImage.jpeg';
import UjjwalCV from './images/Resume_CV/ujjwal_Pandey_C_V.pdf';
import downArrow2 from './images/arrow-down.png';
import previewCSS from './previews.module.css';


export default function PreviewPDFs(props) {
	return (
		<section id="previews" className={previewCSS.previewsFullPage} onClick={() => props.viewPreview(false)}>
			<div className={previewCSS.previewSection} onClick={(e) => e.stopPropagation()}>
				<div className={previewCSS.eachPreview}>
					<img className={previewCSS.previewImage} src={cvPreview} alt="C.V. preview" />
					<div>C.V. in pdf format <img src={downArrow2} style={{ height: '15px', width: '18px' }} alt="Down arrow" /></div>
					<div className={previewCSS.downloadCV}><a className={previewCSS.downloadCV} href={UjjwalCV} download="_Ujjwal-full_stack-C.V.pdf">Download C.V</a></div>
				</div>
				<div className={previewCSS.closeBtn} onClick={() => props.viewPreview(false)}>X</div>
			</div>
		</section>
	)
}