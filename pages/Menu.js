import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, Row, Stack, } from 'react-bootstrap'
// import CardHeader from 'react-bootstrap/esm/CardHeader'
import img from '../public/Images/2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import OrderModel from '@/components/OrderModel'
const foodCategory=["Burger","Chicken","Egg","snack","Panner","mutton",'chhole',"dosa","Pizza","Kabab"]


const Menu = ({restaurents}) => {
    const [user,setUser]=useState(null)
    const router=useRouter()
    const [rest,setRest]=useState(restaurents)
    const [food, setFood]=useState()
    const [suggest,setSuggest]=useState([])
    const modalref=useRef(null)



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
        const response=await fetch(`http://localhost:4000/foods/?type=${type}`)
         restaurent=await response.json()
    }
    else{
        const response=await fetch(`http://localhost:4000/foods`)
    restaurent=await response.json()
    }
    
    setRest(restaurent)
    router.push(`/Menu?type=${type}`,undefined,{shallow: true})
}

const findSearchedItem=async()=>
{
   if(food)
   {
    const response=await fetch(`http://localhost:4000/foods/?name=${food}`)
    const data=await response.json()
    setRest(data)
   } 
   router.push(`/Menu?name=${food}`,undefined,{shallow: true})
}




// item selext
const itemSelect=(food)=>
{
    
    setFood(food)
    setSuggest([])
}

// searcnh hand;er
const searchHandler=(e)=>
{

setFood(e.target.value)
const findSearch=serachedFun(food)
setSuggest(findSearch)
}

const serachedFun=(food)=>
{
 const findData=foodCategory.filter((item)=>item.toLowerCase().includes(food))
 return findData;
}

  return (
    <Container className='mt-5 mb-5' >
        <Row className=''> 
            <Col sm={12} md={4} className='mb-3'>
                    <Stack direction='horizontal' gap={3}>
                    <FormControl type='text' onChange={searchHandler} value={food} placeholder='Search your food' style={{border: "1px solid red",boxShadow: "1px 2px 2px red"}}>
                    
                    </FormControl><Button ><FontAwesomeIcon icon={faSearch} style={{color: "white"}} onClick={findSearchedItem}/></Button>
                    </Stack>
                  <div>
                    <ul style={{position: "absolute",zIndex: "1" ,background:"white"}}>
                        {suggest.map((item,index)=><h6 key={index} onClick={()=>itemSelect(item)}>{item}</h6>)}
                        
                    </ul>
                  </div>
                    
                </Col>
            <Col sm={12} md={8} className='mb-3'>
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
                            <Card.Title>
                                <Stack direction='horizontal' className='d-flex justify-content-between align-items-center'>
                                    <span>{item.name}</span>
                                    <span style={{color: item.type=='vegeterian'? "green": "red"}}><span style={{fontSize: "20px"}}><FontAwesomeIcon icon={faCircle} /></span></span>
                                </Stack>
                            </Card.Title>
                            <Card.Text>Delesious food from Our restaurent try to filll customer aspect</Card.Text>
                            <Stack direction='horizontal' gap={1} className='d-flex justify-content-between'>
                                <h6>Price: {item.price}</h6>
                                <OrderModel  ref={modalref}>
                                    <Button  onClick={()=>modalref.current.setModalShow(item.name)}>order</Button>
                                </OrderModel>
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

export default Menu


export const getServerSideProps=async(context)=>
{
    const {query}=context
    const {type}=query
   
    const queryString= type? `type=${type}`: ''
 
    const response=await fetch(`http://localhost:4000/foods?${queryString}`)
    const restaurents=await response.json()
    return{
        props:{restaurents: restaurents}
        
    }

}

