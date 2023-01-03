import React,{useState} from 'react'
import { amazonCatg } from '../../Data/DataFile'
import {Link} from 'react-router-dom';
import '../grid1-slides/slide.css';

const Categories = () => {
    const [useCatg] = useState(amazonCatg)
  return (

    <div className='grid-items'>
        <h4 className="Catg_div_h4">Shop by Category</h4>

    <ul className='Catg_div_ul'>
      {useCatg.map((x) => (
        <Link to='/' >
            <li className= "Catg_div_ul_li" key={x.id}><img className="catgImages" src={x.src} alt="images"/><p>{x.text}</p></li>
        </Link>
        
      ))}
      </ul>
    </div>
  )
}

export default Categories
