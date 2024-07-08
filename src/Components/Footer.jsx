import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
      <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-secondary p-1  m-1'
            href='/'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-secondary p-1  m-1'
            href='/'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-secondary p-1  m-1'
            href='/'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-secondary  p-1  m-1'
            href='/'
            role='button'
          >
            <MDBIcon fab className='fa-instagram fw-bolder' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size=""
            className='text-secondary p-1 m-1'
            href='/'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin fw-bolder' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-secondary p-1 m-1'
            href='/'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark bg-primary p-3' >
        © 2024 Copyright:
        <a className='text' style={{color:'white',textDecoration:'none'}} href='/'>
          MusicApp.com
        </a>
      </div>
    </MDBFooter>  
    </>
  )
}

export default Footer