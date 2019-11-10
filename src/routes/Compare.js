import React from 'react';
import styles from './Compare.scss';

const Compare = () => {
    return (
      <div className="compare">
       <iframe title = "comparePaper" 
      width="1440" 
      height="900" 
      src="https://app.powerbi.com/view?r=eyJrIjoiZGMwMDI4MjEtMmQ1Zi00NWRhLWI5NTAtY2VmZjQ2NTZkOWYzIiwidCI6ImI1ZmFiNDQxLWZmYTMtNGMzZi1iYTk4LWNiM2MyOTg5ZmNkMCIsImMiOjEwfQ%3D%3D" 
      frameborder="5" 
      allowFullScreen="true"></iframe>
        </div>
    );
};

export default Compare;