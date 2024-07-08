import React from 'react'
import logoOne from '../Images/logo1.gif'
import CardOne from '../Images/card1.gif'
import CardTwo from '../Images/card2.gif'
import CardThree from '../Images/card3.gif'
import {Row , Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'

function LandingPage() {
  const navigateURL=useNavigate()
  return (
    <>
        <Row className='w-100'>
            
            <Col  lg={6}  className='d-flex justify-content-between align-items-center p-4'>
                <img style={{mixBlendMode:'color-dodge'}} src={logoOne} className='w-100 p-5' alt="" />
            </Col>
            <Col lg={6} style={{fontSize:'22px'}} className='justify-content-between align-items-center p-5'>
                <p>
                    Experience seamless music playback with our intuitive music player app. Browse through your entire music library effortlessly, create personalized playlists, and enjoy high-quality audio streaming. With sleek design and customizable features, immerse yourself in your favorite tunes anytime, anywhere. Discover new tracks with curated recommendations and make your listening experience truly exceptional.  
                </p>
                <div onClick={()=>navigateURL('/home')} class="btn rounded-pill btn-secondary mt-5 px-4">Get Started</div>          
                

            
            </Col>
        </Row>
    <div className="h2 fw-bolder text-center text-secondary">OUR FEATURES</div>
        <Row className='w-100'>
    <Col lg={4} className='p-5 d-flex justify-content-center align-items-center h-100'>
    <Card className='border-light ' style={{ width: '18rem' }}>
      <Card.Img  style={{mixBlendMode:'color-dodge'}} variant="top" src={CardOne} />
      <Card.Body>
        <Card.Title className='text-center'>Add Music</Card.Title>
        <Card.Text  className='text-center'>
        Immerse yourself in the world of sound with our intuitive music player app. Seamlessly organize your favorite tracks, create custom playlists, and discover new tunes effortlessly. With sleek design and powerful features, enjoy your music journey like never before.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4} className='p-5 d-flex justify-content-center align-items-center h-100'>
    <Card className='border-light ' style={{ width: '18rem' }}>
      <Card.Img  style={{mixBlendMode:'color-dodge'}} variant="top" src={CardTwo} />
      <Card.Body>
      <Card.Title className='text-center'>Listen Music</Card.Title>
        <Card.Text  className='text-center'>
        Immerse yourself in the world of music with our intuitive music player app. Enjoy seamless playback of your favorite tunes, curated playlists, and personalized recommendations.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4} className='p-5 d-flex justify-content-center align-items-center h-100'>
    <Card className='border-light ' style={{ width: '18rem' }}>
      <Card.Img  style={{mixBlendMode:'color-dodge'}} variant="top" src={CardThree} />
      <Card.Body>
      <Card.Title className='text-center'>Categorize Music</Card.Title>
        <Card.Text className='text-center'>
        Discover, organize, and enjoy your favorite tunes effortlessly. Seamlessly categorize your music library based on genres, moods, or custom playlists, ensuring the perfect soundtrack for every moment.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

        </Row>
        
    </>
  )
}

export default LandingPage