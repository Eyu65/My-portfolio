import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {

    const data = [
        {
            name: "Online publishing platform",
            des: "API for online publishing platform with various features to help the publisher interact with the reader. The features include user management and Admin regulation, creation, updating and deletion of a post with file management, the same features for a comment as the post and categories for different kinds of posts.",
            projectLink: "https://github.com/Eyu65/Blog-backend",
            techUsed: [
                {
                    techname: "Node js"
                },
                {
                    techname: "Express js"
                },
                {
                    techname: "Javascript"
                },
                {
                    techname: "Mongo DB"
                },
            ]
        },
        {
            name: "Inventory Management System",
            des: "Open source inventory management api, which can be modified with different features as one's request. This API is built using Node js, Express js and Mongo DB. In addition to the limited feature here, I can design for any kind of custom demand and add the Frontend part too.",
            projectLink: "",
            techUsed: [
                {
                    techname: "Node js"
                },
                {
                    techname: "Express js"
                },
                {
                    techname: "Mongo DB"
                },
            ]
        },
        {
            name: "Online Store",
            des: "Online musical instrument store where people can buy different kinds of products. The Frontend part of this project is basically built with React framework, CSS and Javascript. The code for the backend is also attached here but I contributed to the frontend part only.",
            projectLink: "https://github.com/Eyu65/gomusic-frontend",
            techUsed: [
                {
                    techname: "React"
                },
                {
                    techname: "CSS"
                },
                {
                    techname: "Javascript"
                },
            ]
        },
        {
            name: "Portfolio Website",
            des: "Personal portfolio website designed using React framework for the entire Frontend. Styled with CSS and used Node js for designing API endpoint for the purpose of sending Email.",
            projectLink: "",
            techUsed: [
                {
                    techname: "React"
                },
                {
                    techname: "Node js"
                },
                {
                    techname: "CSS"
                },
                {
                    techname: "Netlify"
                },
            ],
        }
    ]

    return (
        <div className="container project-section" id="projects">

<div className="section-title">
                <h5>Projects</h5>
                <span className="line"></span>
            </div>

            <div className="row">

                {data.map((item,index)=>(
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">

                    <ProjectList {...item}/>

                    </div>
                ))}

                

            </div>

        </div>
    )
}

export default Project;