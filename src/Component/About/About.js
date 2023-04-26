import React from "react";
import "./About.css"
import ProfilePic from "../../Image/eyuel.jpg"
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
    return (
        <div className="container about-section" id="about">

            <div className="row">

            <Fade bottom>

                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

                    <div className="about-image">
                        <img src={ProfilePic} alt="Profile photo"/>
                    </div>

                </div>

            </Fade>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

                    <div className="about-details">
                    
                    <Flip left>
                        <div className="about-title">
                            <h5>About Me</h5>
                            <span className="line"></span>
                        </div>
                    </Flip>

                    <Fade right>
                        <p>
                        Full stack developer with 4 year experience in creating, designing and testing web applications. I am comfortable working 
                        on various web technologies like Nodejs, Express and React in addition to the basic web development combinations(HTML/CSS/JAVASCRIPT) 
                        alongside various databases like MySQL, Mongo DB and PostgreSQL technologies . I have shown tremendous dedication to work in collaboration
                        with my team and deliver the task assigned to me in time. I believe I will be invaluable addition to your team or any project you assign to me individually in my area of expertise.
                        </p>
                    </Fade>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default About