import React from 'react';
import BennsPhoto from '../../assets/images/benspicture.JPG'

const About = () => {
    return (
        <section className='my-5 about' name='container' style={{'textAlign': 'center'}}>
            <div className=''>
                <img className='bio-photo' alt='Benjamin' src={BennsPhoto}/>
            </div>
            <h1 id='about'>About Me</h1>
            <p className='text-background' id='aboutText'>
            Hi, my name is Benjamin Asabir, and i am a freelance Graphic Designer/ Web Developer. 
            I am currently enrolled in the Coding Boot Camp Program in University Of Toronto to further my skill and knowledge.
            <br />
            The intricacies of Web/App Development has long been a strong passion of mine. 
            My goal in the near future is to become a Front End Web Developer, 
            and as i improve my skills, work my way toward a Full Stack Developer. 
            <br />
            Feel free to check out my work!
            </p>
        </section>
    )
};

export default About;