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

const Slideshow = () => {
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
                <div className="backGrid_div">
                    <div className='grid-items'>

                        <div className='grid-itemFirst'>
                            <h1>Beauty Pics</h1>
                            <div className='pic'>
                                <img alt="Beauty picks" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg" className="landscape-image" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg" />
                                <Link to="/shop now" className='linkClick'>
                                    <p> Shop now</p>
                                </Link>
                            </div>
                        </div>

                        <div className='grid-item1'>
                            <h1>Easy Returns</h1>
                            <div className='pic'>
                                <img alt="Easy returns" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_2x._SY608_CB432774709_.jpg" className="landscape-image" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_2x._SY608_CB432774709_.jpg" />
                            </div>
                            <Link to="/shop now">
                                <p> Learn more</p>
                            </Link>
                        </div>
                        <div className='grid-item2'>
                            <h1>Health and Personal Care</h1>
                            <div className='pic'>
                                <img alt="Health &amp; Personal Care" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg" className="landscape-image" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg" />
                                <Link to="/" className='linkClick'>
                                    <p> Shop now</p>
                                </Link>
                            </div>
                        </div>

                        <div className='grid-item3'>
                            <h2>Sign in the for the best experience</h2>
                            <button>Sign in securely</button>
                        </div>

                        <div className='grid-item4'>
                            <img alt="We ship 45 million products around the world" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_2x._CB418309979_.jpg" height="100%" width="300px" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_2x._CB418309979_.jpg" />
                        </div>
                        <div className='grid-item5'>
                            <h1>Electronics</h1>
                            <div className='pic'>
                                <img alt="Electronics" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg" className="landscape-image" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg" />
                                <Link to="/" className='linkClick'>
                                    <p>See more</p>
                                </Link>
                            </div>
                        </div>
                        <div className='grid-item6'>
                            <h1>Get fit at home</h1>
                            <div className='pic'>
                                <img alt="Get fit at home" src="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg" className="landscape-image" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg" />
                                <Link to="/" className='linkClick'>
                                    <p>Explore now</p>
                                </Link>
                            </div>
                        </div>
                        <div className='grid-item7'>
                            <h1>Dresses</h1>
                            <div className='pic'>
                                <img alt="Dresses" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg" className="landscape-image" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg" />
                                <Link to="/" className='linkClick'>
                                    <p>Shop now</p>
                                </Link>
                            </div>
                        </div>
                        <div className='grid-item8'>
                            <h1>Shop by category</h1>
                            <div className='modules'>

                                <div className='mod1'>
                                    <Link to="/" className='linkClick'>
                                        <img alt="Computers &amp; Accessories" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer240x._SY170_CB468850970_.jpg" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer240x._SY170_CB468850970_.jpg" />
                                        <span className='imagename'>computers & accessories</span>
                                    </Link>
                                </div>
                                <div className='mod2'>
                                    <Link to="/" className='linkClick'>
                                        <img alt="Video Games" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_240X._SY170_CB438749318_.jpg" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_240X._SY170_CB438749318_.jpg" />
                                        <span className='imagename'>VideoGames</span>
                                    </Link>
                                </div>


                                <div className='mod3'>
                                    <Link to="/" className='linkClick'>
                                        <img alt="Baby" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby240X._SY170_CB468850909_.jpg" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby240X._SY170_CB468850909_.jpg" />
                                        <span className='imagename1'>Baby</span>
                                    </Link>
                                </div>
                                <div className='mod4'>
                                    <Link to="/" className='linkClick'>
                                        <img alt="Toys &amp; Games" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys240X._SY170_CB468851693_.jpg" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys240X._SY170_CB468851693_.jpg" />
                                        <span className='imagename'>Toys& Games</span>
                                    </Link>
                                </div>

                            </div>
                            {/* <p>Shop now</p> */}
                        </div>

                    </div >
                </div>

            </div>
            <div className="productDisplay">
                <Products />
            </div>
            <div className='grid2-items'>
                <div className='grid-itemFirst'>
                            <h1>Beauty Pics</h1>
                            <div className='pic'>
                                <img alt="Beauty picks" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg" className="landscape-image" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg" />
                                <Link to="/shop now" className='linkClick'>
                                    <p> Shop now</p>
                                </Link>
                            </div>
                        </div>

                        <div className='grid-item1'>
                            <h1>Easy Returns</h1>
                            <div className='pic'>
                                <img alt="Easy returns" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_2x._SY608_CB432774709_.jpg" className="landscape-image" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_2x._SY608_CB432774709_.jpg" />
                            </div>
                            <Link to="/shop now">
                                <p> Learn more</p>
                            </Link>
                        </div>

            </div>

        </div>

    )
}

export default Slideshow