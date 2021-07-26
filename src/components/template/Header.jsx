import './Header.css'
import React from 'react'

export default props =>
    <header className="header">
        <div className="display-4 text-center">
            <i className={props.icon}></i> {props.title}
        </div>
        <div className="text-center">
            {props.subtitle}
        </div>
    </header>