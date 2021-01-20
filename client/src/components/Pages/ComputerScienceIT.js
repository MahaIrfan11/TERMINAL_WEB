import React from 'react'
import './blogstyle.css'
import CommentBox from './CommentBox';
import blogdata from './cs.json'
import { Link } from 'react-router-dom';

export default function ComputerScienceIT() {
    return (
        <div className="CSContainer">

            <div className="ContainerBlog">
                <h1 className="MainHeadingBlog">List of All Best CS Universities in Pakistan</h1>
                <p className="IntroBlog">Computer science is one of the most popular fields in the World today. Most students want to go in computer science due to its increased scope in the past few years. Computer science is the study of computing technologies, both hardware and software. It is although complicated due to programming and algorithms, however if the university is selected wisely, there would be no worries.
There are a lot of universities offering bachelor’s in computer science so choosing the right university is a difficult decision. In this article for those students who want to study computer science in future, we have organized top universities in Pakistan for CS.</p>

            </div>
            <div className="TOC">
                <h2>Table of Content:-</h2>
                <ul className="nav1">
                    {
                        blogdata.map((blogdetail, index) => {
                            return (

                                <li>{blogdetail.id} - {blogdetail.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
            {
                blogdata.map((blogdetail, index) => {
                    return (
                        <div className="myContent">
                            <hr></hr>
                            <h2 className="UninameBlog">{blogdetail.id} - {blogdetail.title}</h2>
                            <hr></hr>
                            <h5>{blogdetail.address}</h5>
                            <h5>{blogdetail.number}</h5>
                            <h5>{blogdetail.email}</h5>
                            <h5>Fee Range: <mark> {blogdetail.fee}</mark></h5>
                            <img src={blogdetail.blogimage} alt="University Image" className="uniImageBlog"></img>
                            <p className="UniDescription">{blogdetail.des}</p>
                            <h3 className="Courses">{blogdetail.courseheading}</h3>
                            <ul>
                                <li></li>
                                <li>{blogdetail.courses1}</li>
                                <li>{blogdetail.courses2}</li>
                                <li>{blogdetail.courses3}</li>
                            </ul>
                        </div>

                    );

                })


            }
            <h4>For more information, and get help from consultant for admission guidance, join the<Link to="/posts"> Discussion forum</Link></h4>

            <CommentBox />

        </div>)
}
