import React from "react";
import "./WorkExperience.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdGroupWork } from "react-icons/md";


const WorkExperience = () => {

    const data = [
        {
            companyname: "Black Lion Technology S.C",
            position: "Web developer",
            des: "I have worked as part time intern in this company. This is where I layed ground to my programming career.",
            year: "2019-20",
            
            techskill: [
                {
                    techname: "HTML"
                },
                {
                    techname: "CSS"
                },
                {
                    techname: "Javascript"
                },
                {
                    techname: "MySQL"
                },
            ]
        },
        {
            companyname: "EiN Technologies",
            position: "Full Stack Developer",
            des: "My first developer full time job in which I worked as a junior Web developer first and still working there as Full stack developer.",
            year: "2020-present",
            
            techskill: [
                {
                    techname: "Node JS"
                },
                {
                    techname: "React JS"
                },
                {
                    techname: "Express JS"
                },
                {
                    techname: "Mongo DB"
                },
            ]
        },
        {
            companyname: "Delivery Hawassa",
            position: "Web Developer",
            des: "I am working here as part time Software Engineer for one of prominent express service provider in the country.",
            year: "2020-present",

            techskill: [
                {
                    techname: "Wordpress"
                },
                {
                    techname: "React JS"
                },
                {
                    techname: "Express JS"
                },
                {
                    techname: "Material UI"
                },
            ]
        },
        
    ]

    const colors = [
        "#800000",
        "#FF8042",
        "#001CCE",
        "#4B088A",
    ]

    return (
        <div className="container work-experience-section" id="work-experience">


            <div className="section-title">
                <h5>Work Experience</h5>
                <span className="line"></span>
            </div>

                <div className="timeline-section">
                    <VerticalTimeline lineColor="#FF1042">

        {data.map((item,index)=>(
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: colors[index], color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #FFBB24' }}
    date={item.year}
    dateClassName="date-class"
    iconStyle={{ background: colors[index], color: '#fff' }}
    icon={<MdGroupWork />}
  >
    <h3 className="vertical-timeline-element-title">{item.companyname}</h3>
    <h4 className="vertical-timeline-element-subtitle">{item.positionL}</h4>
    <p>
      {item.des}
    </p>

            <div className="row">

                {item.techskill.map((tec,index)=>(
                       <div className="col-xl-34 col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="tech-skills">
                                <p>{tec.techname}</p>
                            </div>
                        </div>
                ))}

            </div>
            
  </VerticalTimelineElement>
        ))}


  
  
                    </VerticalTimeline>
                </div>

                

        </div>
    )
}

export default WorkExperience