import React,{useState} from "react";
import './TechStack.css';
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';


const TechStack = () => {

    const data=[

        {
            name: "Full stack Developer"
        },
        {
            name: "Node js"
        },
        {
            name: "React js"
        },
        {
            name: "CSS"
        },
        {
            name: "Express js"
        },
        {
            name: "HTML"
        },
        {
            name: "Vanilla Javascript"
        },
        {
            name: "Mongo DB"
        },
        {
            name: "MySQL"
        },
        {
            name: "SQL"
        },
        {
            name: "Git"
        },
        {
            name: "JAVA"
        },
        {
            name: "UI/UX Design"
        },
        {
            name: "jQuery"
        },
        {
            name: "Mern stack Developer"
        }
    ]

const colors = [

    "#F1C40F",
    "#EB984E",
    "#D5DBDB",
    "#FE2EF7",
    "#C39BD3",
    "#00C49F",
    "#73C6B6",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#0088FE",
    "#00C49F",
    "#FFBB28",

]

const [showMoreTechStack,setShowMoreTechStack] = useState(9);

const loadMore = ()=>{
    setShowMoreTechStack((prev)=>prev+3);
}

    return (
        <div className="container techstack-section" id="tech-stack">

            <div className="section-title">
                <h5>Tech Stack</h5>
                <span className="line"></span>
            </div>

            <div className="row">

                {data.slice(0,showMoreTechStack).map((item,index)=>(
                    
                <Fade right>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>

                        <div className={index===0?"tech-content-marked tech-content":"tech-content" }>
                            <span className="tech-number" style={{backgroundColor: colors[index]}}>
                            {index+1}
                            </span>
                            <p>{item.name}</p>

                        </div>


                    </div>
                </Fade>

                ))}

        
            </div>

            {showMoreTechStack >= data.length ? null: (
                <Zoom>
                    <span className="lot-more-tech-stack" onClick={loadMore}>
                        Load More
                    </span> 
                    </Zoom> 
            )}
                
            
                
        </div>
    )
}

export default TechStack