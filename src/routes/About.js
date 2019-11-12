import React from 'react';
import styles from './About.scss';
import image from '../images/teamImage.jpg';


const About = () => {
    return (
        <div className="raw">
        <div className="about">
          <ul>
                <li>팀명 : 갑분사<br></br>(갑(겁)없이 모든걸 분석하는 사람들)</li>
                   <br></br>
                    <li> 팀원 : </li>
                    <p>- 김소연 </p>
                    <p>-  정진주 </p>
                     <p>-  허담  (팀장)</p>
                     <p>-  허예슬 </p>
                 
            </ul>
            </div>
            <div clasName="image">
            <img src={image} className="teamImage" alt="team image"/>
        </div>
        </div>
    );
};

export default About;