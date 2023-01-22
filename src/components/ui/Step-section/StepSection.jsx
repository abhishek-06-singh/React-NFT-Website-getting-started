

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './step-section.css'

const STEP__DATA =[
    {
        title:'Setup your wallet',
        desc: 'Enable purchases in one minute using any fiat payment method. Get started in 10 minutes, for free.',
        icon: 'ri-wallet-3-fill'
    },
    {
        title:'Create collection',
        desc: 'Enable purchases in one minute using any fiat payment method. Get started in 10 minutes, for free.',
        icon: 'ri-layout-4-fill'
    },
     {
        title:'Add your NFTS',
        desc: 'Enable purchases in one minute using any fiat payment method. Get started in 10 minutes, for free.',
        icon: 'ri-add-box-fill'
    }, 
    {
        title:'List them for sale ',
        desc: 'Enable purchases in one minute using any fiat payment method. Get started in 10 minutes, for free.',
        icon: 'ri-money-dollar-circle-fill'
    },
    
]

const StepSection = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='mb-4'>
                <h3 className="step__title">
                    Create and Sell Your NFTS
                </h3>
            </Col>
                  
                  {
                    STEP__DATA.map((item,index) => <Col lg='3' md='4' sm='6' key={index}>
                    <div className="single__step__item">
                        <span><i class={item.icon}></i></span>
                        <div className="step__item__content">
                            <h5>
                                <Link to='/wallet'>{item.title}</Link>
                            </h5>
                            <p className='mb-0'>{item.desc}</p>
                        </div>
                    </div>
                </Col>)
                  }
                 
        </Row>
    </Container>
  </section>
}

export default StepSection