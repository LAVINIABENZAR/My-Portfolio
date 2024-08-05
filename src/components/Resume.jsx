import React from 'react';
import { saveAs } from 'file-saver';
import resume from './resume/resume.pdf'; 

export default function Resume() {
  const handleDownload = () => {
    saveAs(resume, 'resume.pdf');
  };

  return (
    <button onClick={handleDownload}>Download Resume</button>
  );
}

