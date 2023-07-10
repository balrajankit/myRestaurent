import React from 'react'
import img from '../public/Images/res1.jpg'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
const Banner = () => {
    
  return (
    <Container fluid style={{padding: "0px"}}>
        <Row>
              <Col className='d-flex justify-content-center align-items-center'>
                  <div style={{
                      backgroundImage: `url(${img.src})`, width: '100%', height: '500px',
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      
                  }}
                  className='d-flex  align-items-center'
                  >
                    <div gap={3} className='' style={{marginLeft: "40px", fontFamily: "kablammo",}}>
                    <h1 style={{color: "white",font: "30px"}}>India's no 1</h1>
                      <Button variant='primary' style={{fontFamily: "roboto"}} href='/Menu'>Order Now</Button>
                    </div>
                      

                  </div>
              </Col>
        </Row>
    
    </Container>
  )
}

export default Banner