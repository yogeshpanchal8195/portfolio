import React from 'react'
import ResumeDoc from './YogeshResume.pdf'

export default function DownloadResume() {
   return (
      <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
         <a href={ResumeDoc} download="Yogesh_Resume" target='_blank'>
            <button style={{'border':'none'}}>Download Resume</button>
         </a>

      </div>
   )
}
