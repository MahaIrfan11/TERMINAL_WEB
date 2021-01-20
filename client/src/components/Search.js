import React from 'react'
import './Search.css'

export default function Search() {
    return (
        <div>
            <div className="searchBox">
                <input className="discipline" type="text" placeholder="Discipline"></input>
                <input className="worldwide" type="text" placeholder="Worldwide"></input>
                <button className="searchButton">Search</button>
                <span className="bottomtext"><br></br>Explore more than 5,000 study programmes from all around the world with UniExplorer.</span>

            </div>

        </div>
    )
}
