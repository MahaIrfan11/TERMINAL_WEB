import React from "react";
import "./NewsArticle.css"
import { Link } from "react-router-dom"

function NewsArticle({ data }) {
    return (
        <div className="news">
            <Link to={data.url}> <h3 className="news__title">{data.title}</h3></Link>
            <img className="news__image" src={data.urlToImage}></img>
            <p className="news__desc">{data.description}</p>
            <span className="news__author">{data.author}</span> <br />
            <span className="news__published">{data.publishedAt}</span>
            <span className="news__source">{data.source.name}</span>
        </div>
    );
}

export default NewsArticle;