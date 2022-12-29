import React from 'react'
import Navbar from './navbar'
import './index.css'
export default function Index(props) {
    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="main-wrap">
                    {props.children}

                
                </div>
            </div>

        </div>
    )
}
