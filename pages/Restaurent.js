import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Stack, } from 'react-bootstrap'
// import CardHeader from 'react-bootstrap/esm/CardHeader'
import img from '../public/Images/2.jpg'



const Restaurent = ({restaurents}) => {
    const [user,setUser]=useState(null)
    const router=useRouter()
    const [rest,setRest]=useState(restaurents)
    useEffect(()=>{
        const userData=JSON.parse(localStorage.getItem('LoginUser'))
        if(userData)
        {
          setUser(userData.name)
        }
        else
        {
          setUser(null)
          router.push('/Login')

        }
        
      })

const Vegeterian=async(type)=>{
    var restaurent=''
    if(type)
    {
        const response=await fetch(`http://localhost:4000/restaurents/?type=${type}`)
         restaurent=await response.json()
    }
    else{
        const response=await fetch(`http://localhost:4000/restaurents`)
    restaurent=await response.json()
    }
    
    setRest(restaurent)
    router.push(`/Restaurent?type=${type}`,undefined,{shallow: true})
}






  return (
    <Container className='mt-2 mb-5' >
        <Row>
            <Col>
            <Stack direction='horizontal' gap={3} className='d-flex mx-auto justify-content-end'>
                <Button onClick={()=>Vegeterian('')}>All</Button>
                <Button onClick={()=>Vegeterian('vegeterian')}>Vegeterian</Button>
                <Button  onClick={()=>Vegeterian('Non vegeterian')}>Non Vegeterian</Button>
            </Stack>
            </Col>
        </Row>
        <Row>
            
            {rest.map((item,index)=>{
                return(
                    <Col sm={12} md={4} className='mt-4'>
                    <Card key={index}>
                    {/* <CardHeader>{item.name}</CardHeader> */}
                        <Card.Img variant='top' src={item.Image} width={200} height={200}/>
                        
                        <Card.Body>
                            <Card.Title>{item.type}</Card.Title>
                            <Card.Text>Our restaurent try to filll customer aspect</Card.Text>
                            <Stack direction='horizontal' gap={3} className='d-flex justify-content-around'>
                                <span>Rating ****</span>
                                <Button variant='primary' href={`/Restaurent/${item.id}`}>Know More</Button>
                            </Stack>
                        </Card.Body>
                    </Card>
                    </Col>
                )
            })}
            
        </Row>
    </Container>
    
  )
}

export default Restaurent


export const getServerSideProps=async(context)=>
{
    const {query}=context
    const {type}=query
   console.log(context.query)
    const queryString= type? `type=${type}`: ''
 
    const response=await fetch(`http://localhost:4000/restaurents?${queryString}`)
    const restaurents=await response.json()
    return{
        props:{restaurents: restaurents}
        
    }

}

