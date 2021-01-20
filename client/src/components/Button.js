import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export function Button() {
    return (
        <Link to="/register">
            <button className="btn"> Sign Up</button>
        </Link>
    );
}