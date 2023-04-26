import React from "react";
import "./Home.css";
import Typewriter from 'typewriter-effect';
import MyCv from './Resume2.pdf';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
 


const Home = ({theme, changeTheme}) => {
    return (
        <div className="container-fluid home" id="home">

            <div className="theme-change" onClick={changeTheme}>

                {theme === "light" ? (<p><BsFillMoonStarsFill size={40}/></p>):(<p className="sun-theme-icon"><BsFillSunFill size={40}/></p>)}

            </div>
           
            <div className="container home-content">
            <Fade right>
                <h1>Hello there, I am Eyuel Ayele</h1>
                <h3>
                    <Typewriter
                        options={{
                            strings: ['Full Stack Software Developer', 'MERN Stack', 'Web Developer', 'UI/UX Designer'],
                            autoStart: true,
                            loop: true,
                            delay: 5
                        }}
                    />
                </h3>
                </Fade>
                <Fade bottom>
                    <div className="button-for-action">
                    <Link to='contact' 
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}>
                            <div className="hire-me">

                                Hire Me
                        
                            </div>
                    </Link>
                            <div className="get-resume">
                                <a href={MyCv} download="Eyuel_Resume.pdf">
                                    Get Resume
                                </a>                   
                            </div>
                    </div>
                </Fade>
            </div>
        </div>
)
};

export default Home;