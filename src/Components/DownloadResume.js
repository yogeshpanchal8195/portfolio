import React from 'react'
import ResumeDoc from './YogeshResume.pdf'

export default function DownloadResume() {
   return (
      <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
         <a href={ResumeDoc} download="Yogesh_Resume.pdf" target='_blank' rel="noreferrer">
            <button style={{'border':'none'}}>Download Resume</button>
         </a>

      </div>
   )
}
