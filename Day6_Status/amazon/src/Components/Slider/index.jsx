import React from 'react'
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import './slide.css'
import { Link } from 'react-router-dom'
import Products from '../Products';



const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    // infinite: true,
    // indicators: true,
    // arrows: true
}

const AppSlider = () => {
    return (
        <div>

            <div className="containerSlide">
                <Slide{...proprietes}>
                    <div className="each-slide">
                        <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="img1" />
                    </div>

                    <div className="each-slide">
                        <img src="https://m.media-amazon.com/images/I/61W-QJozfgL._SX3000_.jpg" alt="img2" />
                    </div>

                    <div className="each-slide">
                        <img src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" alt="img3" />
                    </div>

                    <div className="each-slide">
                        <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="img5" />
                    </div>

                </Slide>
                </div>
           
        </div>

    )
}

export default AppSlider;