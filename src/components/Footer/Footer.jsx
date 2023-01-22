import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

const MY__ACCOUNT =[
  {
   display: 'Author Profile',
   url: '/seller-profile'
  },
  {
    display: 'Create Item',
    url: '/create'
  },
  {
    display: 'Collection',
    url: '/market'
  },
  {
    display: 'Edit Profile',
    url: '/edit-profile'
  },
]
const RESOURCES =[
  {
   display: 'Help Center',
   url: '#'
  },
  {
    display: 'Partner',
    url: '#'
  },
  {
    display: 'Community',
    url: '#'
  },
  {
    display: 'Activity',
    url: '#'
  },
]
const COMPANY =[
  {
   display: 'About',
   url: '#'
  },
  {
    display: 'Career',
    url: '#'
  },
  {
    display: 'Ranking',
    url: '#'
  },
  {
    display: 'Contact Us',
    url: '/contact'
  },
]
const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
      <Col lg='3' md='6' sm='6'>
        <div className="logo">
              <h2 className=" d-flex gap-2 align-items-center">
                <span >
                    <i class="ri-fire-fill"></i>
                </span>
                GrumpyNFTs
              </h2>
              <p className='p-foot'>Thanks for visiting this website and for watching my work 
                I am just an Frontend Developer who is intrested in creating 
                beautiful and functional websites , to know more about me 
                here is my details.
                 </p>
            </div>
        </Col>
        <Col lg='2' md='3' sm='6' className='mb-4'>
          <h5>My Account</h5>
          <ListGroup className='list__group'>
            {
              MY__ACCOUNT.map((item,index)=>(
                <ListGroupItem key={index} className='list__item'>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
          </Col>
          <Col lg='2' md='3' sm='6' className='mb-4'>
          <h5>Resources</h5>
          <ListGroup className='list__group'>
            {
              RESOURCES.map((item,index)=>(
                <ListGroupItem key={index} className='list__item'>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
          </Col>
          <Col lg='2' md='3' sm='6' className='mb-4'>
          <h5>Company</h5>
          <ListGroup className='list__group'>
            {
              COMPANY.map((item,index)=>(
                <ListGroupItem key={index} className='list__item'>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
          </Col>
          <Col lg='3' md='6' sm='6' className='mb-4'>
          <h5>NewsLetter</h5>
          <input type="text" className='newsletter' placeholder='Email'/>
          <div className="social__links d-flex gap-3 align-items-center " >
            <span><Link to="#"><i class="ri-facebook-circle-fill"></i></Link></span>
            <span><Link to="#"><i class="ri-github-fill"></i></Link></span>
            <span><Link to="#"><i class="ri-linkedin-box-fill"></i></Link></span>
            <span><Link to="#"><i class="ri-discord-fill"></i></Link></span>
            <span><Link to="#"><i class="ri-instagram-fill"></i></Link></span>

          </div>
          <div className="copyright"><p>Copyright 2023, Developed by Abhishek Singh Chauhan.All Right Reserved</p></div>
          </Col>
      </Row>
    </Container>

  </footer>
    
}

export default Footer;