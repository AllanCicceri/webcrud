import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="nav">
        <Link to="/" className="ps-3">
            <i className="fa fa-home me-1"></i>Home
        </Link>
        <Link to="/users" className="ps-3">
            <i className="fa fa-users me-1"></i>Users
        </Link>

    </aside>