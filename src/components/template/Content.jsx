import './Content.css'
import React from 'react'
import Header from './Header'


export default props =>
    <React.Fragment>

        <Header {...props}/>
        <main className="content d-flex justify-content-center">
            <div className="main">
                {props.children}
            </div>
        </main>
    </React.Fragment>