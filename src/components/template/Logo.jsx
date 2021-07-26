import './Logo.css'
import Image from '../../assets/imgs/logo.jpg'
import React from 'react'

export default props =>
    <aside className="logo">
        <img src={Image} className="img" alt="" />
    </aside>