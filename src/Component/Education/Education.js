import React from "react";
import "./Education.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap} from "react-icons/fa"

const Education = () => {

    const data = [
        {
            name: "Addis Ababa Unversity",
            degree: "BSc in Electrical and Computer Engineering",
            year: "2015-20",
            des: "During my stay in Addis Ababa university, I have learned several programming languages and participated on different projects which helped me enhance my developer skills."
        },
        {
            name: "Tarcha High school",
            degree: "High school Graduation",
            year: "2012-15",
            des: "Aside from academical excellence, I have participated in various school activities on those four years of high school which helped me to value team work and contribution to the society."
        },
    ]

    const colors = [
        "#FF1042",
        "#0088FE",
    ]

    return (
        <div className="container education-section" id="education">
            
            <div className="section-title">
                <h5>Education</h5>
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
                                icon={<FaGraduationCap />}
                            >
                                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{item.degree}</h5>
                                <p>
                                {item.des}
                                </p>

                            
                            </VerticalTimelineElement>
                        ))}

                    </VerticalTimeline>
                </div>

        </div>
    )
}

export default Education;