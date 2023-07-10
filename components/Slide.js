import React from 'react'
import { Card, Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap'
import slide1 from '../public/Images/res1.jpg'
import slide2 from '@/public/Images/res2.jpg'
import slide3 from '@/public/Images/res3.jpg'
import slide4 from '@/public/Images/res4.jpg'
import style from '@/styles/header.module.css'



const Slide = () => {
  return (

    <Container className='mt-5 mb-5'>
        <Row>
            <Col sm={12} className='d-flex justify-content-center'><h1 className={`${style.myHeading} mb-5`}>Our restuarent</h1></Col>
              <Col>
                  <Carousel as={Card} interval={1000} fade >
                      <CarouselItem >
                          <img src='Images/res5.jpg' alt="slide 1" className='d-block w-100' style={{ height: "400px" }} />
                          <Carousel.Caption>
                              <h1>Capgemini point</h1>
                              <p>this is second food for your services</p>
                          </Carousel.Caption>
                      </CarouselItem>
                      <CarouselItem>
                          <img src={slide1.src} alt="slide 1" className='d-block w-100' style={{ height: "400px" }} />
                          <Carousel.Caption>
                              <h1>Punjabi Dhaba</h1>
                              <p>this is second food for your services</p>
                          </Carousel.Caption>
                      </CarouselItem>
                      <CarouselItem>
                          <img src={slide2.src} alt="slide 1" className='d-block w-100' style={{ height: "400px" }} />
                          <Carousel.Caption>
                              <h1>Taskeran</h1>
                              <p>this is second </p>
                          </Carousel.Caption>
                      </CarouselItem>
                      <CarouselItem>
                          <img src={slide3.src} alt="slide 1" className='d-block w-100' style={{ height: "400px" }} />
                          <Carousel.Caption>
                              <h1>Hamamana</h1>
                              <p>this is second </p>
                          </Carousel.Caption>
                      </CarouselItem>
                  </Carousel>
              </Col>
        </Row>
    </Container>
  )
}

export default Slide