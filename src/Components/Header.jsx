import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import navIcon from '../Images/imgNav.jpg'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
         <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand  href="" >
           
            <Link to='/' className='text-secondary' style={{textDecoration:'none',fontWeight:'900'}}> <img className='me-5' style={{borderRadius:"50%"}} src={navIcon} height={'50px'}  width={'50px'} alt="" />
            Music App</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header