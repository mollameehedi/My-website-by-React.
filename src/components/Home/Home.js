import React from 'react'
import NavMenu from './Elements/NavMenu'
import Banner from './Elements/Banner';
import Service from '../Elements/Service';
import './Home.scss';

const Home = () => {
  console.log(document.html);
  return (
    <div>
        <NavMenu/>
        <Banner/>
        <Service/>
    </div>
  )
}

export default Home