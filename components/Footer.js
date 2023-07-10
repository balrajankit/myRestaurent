import { faEnvelopeCircleCheck, faHouseUser, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row, Stack } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid className='bg-dark p-4' style={{color: "white"}}>
        <Row>
            <Col>
            <Stack gap={3}>
                <h1>Our company</h1>
                <p>Contrary to popular belief, Lorem Ipsum is no
                    t simply random text. It has roots in a piece of
                     classical Latin literature from 45 BC, making it over 2000 years old. 
                     Richard McClintock, a Latin professor at Hampden-Sydney
                     College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
            </Stack>
            </Col>
            <Col>
            <Stack gap={3}>
                <h1>Usefull Link</h1>
                <span><Link href='/' style={{color: 'white',textDecoration: "none"}}>Home</Link></span>
                <span><Link href='/about' />about</span>
                <span><Link href='/contact' />Contact</span>
                <span><Link href='/services' />Services</span>
            </Stack>
            </Col>
            <Col>
            <Stack gap={3}>
                <h1>Product</h1>
                <span>Angular</span>
                <span>React</span>
                <span>Node</span>
                <span>Node</span>
                <span>Node</span>
            </Stack>
            </Col>
            <Col>
            <Stack gap={3}>
                <h1>Contact</h1>
                <span><FontAwesomeIcon icon={faPhone}/>  +913283488888</span>
                <span><FontAwesomeIcon icon={faEnvelopeCircleCheck}/>  ram@gmail.com</span>
                <span><FontAwesomeIcon icon={faHouseUser}/> 1,sec A Delhi</span>
            </Stack>
            </Col>
        </Row>
        <Row >
            <Col className='d-flex justify-content-center mt-4 mb-3'><h4>All rights reserved at &copy; &clubs; Capgemini</h4></Col>
        </Row>
        

    </Container>
  )
}

export default Footer