import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../BlogCard/BlogCard'
import './Sidebar.css'
import blogPost from '../../Data/blog.json'
export default function Sidebar(props) {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts])

    return (

        <div className="sidebarContainer">
            <BlogCard style={{ marginBottom: "20px", padding: "20px", boxSizing: "border-box" }}>
                <div className="cardHeader">
                    <span >About Us</span>
                </div>
                <div className='profileImageContainer'>
                    <img src="/Images/team.jpg" alt="teamImage"></img>
                </div>
                <div className="personalBio">
                    <p>We are the team of professional consultant. We will help you throughout the hectic bachelors admission procedure.</p>

                </div>
            </BlogCard>

            <BlogCard style={{ marginBottom: "20px", padding: "20px", boxSizing: "border-box" }}>
                <div className="cardHeader">
                    <span >Social Network</span>
                </div>
            </BlogCard>

            <BlogCard style={{ marginBottom: "20px", padding: "20px", boxSizing: "border-box" }}>
                <div className="cardHeader">
                    <span>Recent Post</span>
                </div>
                <div className="recentPosts">
                    {posts.map(post => {
                        return (
                            <Link key={post.id} to={`/ComputerScienceIT/${post.id}`}>
                                <div className="recentPost">
                                    <h3>{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                </div>

                            </Link>
                        );

                    })}



                </div>
            </BlogCard>



        </div >
    )
}
