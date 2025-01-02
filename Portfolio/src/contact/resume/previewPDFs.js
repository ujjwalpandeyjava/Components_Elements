import PDFViewer from '../../document/PDFViewer';
import previewCSS from './previews.module.css';


export default function PreviewPDFs({ close }) {
	const closeBtnHandler = (event) => {
		event.preventDefault();
		event.stopPropagation();
		close(false)
	}

	return (
		<section id="previews" className={previewCSS.previewsFullPage} onClick={(e) => closeBtnHandler(e)}>
			<div className={previewCSS.previewSection} onClick={(e) => e.stopPropagation()}>
				<PDFViewer />
				<div className={previewCSS.closeBtn} onClick={() => close(false)}>X</div>
			</div>
		</section>
	)
}