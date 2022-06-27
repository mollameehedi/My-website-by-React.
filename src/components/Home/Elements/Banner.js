import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import TypeAnimation from 'react-type-animation';
import {FaFacebookF} from "react-icons/fa";
import BannerPHoto from '../../../assets/images/homebanner.png';

const Banner = () => {
  return (
    <Container fluid id='HomeBanner'>
        <Container>
            <Row>
                <Col md='6'>
                    <div className='bannerContent'>
                         <div className='bannerContentText'>
                                <h6>WELCOME TO MY WORLD</h6>
                                <h1>Hi, I’m <span> Mehedi </span></h1>
                                    <TypeAnimation
                                    cursor={true}
                                    sequence={[
                                    'A Web desinger',
                                    2000,
                                    'A Developer',
                                    2000,
                                    'A Mern Developer',
                                    2000,
                                    ]}
                                    wrapper="h1"
                                    repeat={Infinity}
                                />
                                 <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                            <div className='socialAndSkill'>
                               <div className='socialMedia'>
                                <p>FIND WITH ME</p>
                                    <ul>
                                        <li><a href=''><FaFacebookF/></a></li>
                                        <li><a href=''><FaFacebookF/></a></li>
                                        <li><a href=''><FaFacebookF/></a></li>
                                    </ul>
                               </div>
                               <div className='skills'>
                               <p>BEST SKILL ON</p>
                                    <ul>
                                        <li><FaFacebookF/></li>
                                        <li><FaFacebookF/></li>
                                        <li><FaFacebookF/></li>
                                    </ul>
                               </div>
                            </div>
                         </div>
                    </div>
                </Col>
                <Col md='6'>
                    <div className='bannerImg'>
                        <div className='bannerPhoto'>
                            <img src={BannerPHoto} alt='homebanner.png'/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default Banner