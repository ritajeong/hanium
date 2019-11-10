import React from 'react';
import styles from './Review.scss';

const Review = () => {
    return (
        <div className="review">
         <iframe title = "reviewPaper"
         width="1440" 
         height="900" 
         src="https://app.powerbi.com/view?r=eyJrIjoiOTdjYmRjMzctNzNhZS00YzNjLWE0NGMtZDRmYzBmMDQ3YTUwIiwidCI6ImI1ZmFiNDQxLWZmYTMtNGMzZi1iYTk4LWNiM2MyOTg5ZmNkMCIsImMiOjEwfQ%3D%3D"
         frameborder="5" 
         allowFullScreen="true"></iframe>
        </div>
    );
};

export default Review;