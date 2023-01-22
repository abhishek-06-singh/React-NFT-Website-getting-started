

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './hero-section.css'
import heroImg from '../../assets/images/hero.png'

const HeroSection = () => {
  return <section className="hero__section">
  <Container>
    <Row>
        <Col lg='6' md='6'>
            <div className="hero__content">
                <h2> Discover rare digital art and collect <span> . sell extraordinary . </span>
                NFTs</h2>
                <p>NFT means non-fungible tokens (NFTs), which are generally created using the same type of programming  used for cryptocurrencies.In simple terms these cryptographic 
                     assets are based on blockchain technology</p>
                     <div className="hero__btns d-flex align-items-center gap-4">
                     <button className='d-flex align-items-center gap-2'>
                        <i class="ri-rocket-fill"></i><Link to='/market'>Explore</Link>
                        </button>
                     <button className='d-flex align-items-center gap-2'>
                        <i class="ri-ball-pen-fill"></i><Link to='/create'>Create</Link>
                        </button>

                     </div>
            </div>
        </Col>
        <Col lg='6' md='6' >
            <div className="hero__img">
                <img src={heroImg} alt="" className='w-100' />
            </div>
        </Col>
    </Row>
  </Container>
  </section>
}

export default HeroSection