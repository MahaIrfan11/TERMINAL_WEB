import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import "./NewsArticle.css"

function News(props) {
    const { data } = useContext(NewsContext);
    console.log(data);

    return (
        <div>
            <h2 className="head__text">Trending News</h2>
            <div className="all__news">
                {data
                    ? data.articles.map((news) => (
                        <NewsArticle data={news} key={news.url} />
                    ))
                    : "Loading"}
            </div>
        </div>
    );
}

export default News;