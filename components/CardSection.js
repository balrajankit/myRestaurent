import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import img from '@/public/Images/p3.jpeg'
import img1 from '@/public/Images/p2.jpg'
import img2 from '@/public/Images/p1.jpg'
import styled from '@/styles/header.module.css'
const CardDetail = () => {
    
  return (
    <Container  className='mt-5 mb-5' >
        <Row className='d-flex justify-content-center mb-5'>
            <Col className='d-flex justify-content-center'>
                <Card style={{width: "300px"}}>
                    <Card.Img src={img.src} width={200} height={200}/>
                    <Card.Body>
                        <Card.Title>Tittle</Card.Title>
                        <Card.Text>The is a long established fact that 
                            a reader will be distracted by the readable cont
                            ent of a page when looking at its layout.</Card.Text>
                        <Button variant='primary' href='/about'>Know more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='d-flex justify-content-center align-items-center'>
                <div >
                    <h1 className={`${styled.myHeading} mb-5 d-flex justify-content-center`}>My responses</h1>
                    <p className={styled.myTitle}>The is a long established fact that 
                            a reader will be distracted by the readable cont
                            ent of a page when looking at its layout
                            The is a long established fact that 
                            a reader will be distracted by the readable cont
                            ent of a page when looking at its layout</p>
                </div>
            </Col>
            
            
        </Row>
        <Row className='d-flex justify-content-center mb-2 p-5' >
        <Col className='d-flex  align-items-center'>
                <div >
                    <h1 className={`${styled.myHeading} mb-5 d-flex justify-content-center`}>Ours tasking</h1>
                    <p className={styled.myTitle}>The is a long established fact that 
                            a reader will be distracted by the readable cont
                            ent of a page when looking at its layout
                            The is a long established fact that 
                            a reader will be distracted by the readable cont
                            ent of a page when looking at its layout</p>
                </div>
            </Col>
            <Col className='d-flex justify-content-center'>
                <Card style={{width: "300px"}}>
                    <Card.Img src={img1.src} width={200} height={200}/>
                    <Card.Body>
                        <Card.Title>Tittle</Card.Title>
                        <Card.Text>The is a long established fact that 
                            a reader will be distracted by the readable cont
                            ent of a page when looking at its layout.</Card.Text>
                        <Button variant='primary' href='/about'>Know more</Button>
                    </Card.Body>
                </Card>
            </Col>
            
            
            
        </Row>
        <Row className='d-flex justify-content-center mb-5'>
            <Col className='d-flex justify-content-center'>
                <Card style={{width: "300px"}}>
                    <Card.Img src={img2.src} width={200} height={200}/>
                    <Card.Body>
                        <Card.Title>Tittle</Card.Title>
                        <Card.Text>The is a long established fact that 
                            a reader will be distracted by the readable cont
                            ent of a page when looking at its layout.</Card.Text>
                        <Button variant='primary' href='/about'>Know more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='d-flex justify-content-center align-items-center'>
                <div >
                    <h1 className={`${styled.myHeading} mb-5 d-flex justify-content-center`}>Lorem Ipsum</h1>
                    <p className={styled.myTitle}>The is a long established fact that 
                            a reader will be distracted by the readable cont
                            ent of a page when looking at its layout
                            The is a long established fact that 
                            a reader will be distracted by the readable cont
                            ent of a page when looking at its layout</p>
                </div>
            </Col>
            
            
        </Row>
    </Container>
  )
}

export default CardDetail




