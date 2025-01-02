import React from 'react'

export default function EachSkill({ eachSkill, indexing }) {
	if (eachSkill.show) {
		return (
			<div key={`skill-${indexing}`} className='eachSkill'>
				{eachSkill.googleURL ?
					<a href={eachSkill.googleURL} target="_blank" rel="noopener noreferrer"><img src={eachSkill.url} alt={eachSkill.alt} /></a> :
					<img src={eachSkill.url} alt={eachSkill.alt} />
				}
			</div>)
	} else
		return null;
}