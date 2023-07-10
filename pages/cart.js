import { shopContext } from '@/components/UserContext'
import { faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Col, Container, ListGroup, ListGroupItem, Row, Stack } from 'react-bootstrap'



const cart = () => {
// shop include here

const shop=shopContext()

const[data,setData]=useState([])
const [totalPrice,setPrice]=useState(0)





useEffect(()=>{
    const findAllFav = async () => {
        var temp=[]
        var a=0
        if (shop.favoriteList.length>0) {

            const response = await fetch('http://localhost:4000/foods/')
            const allFav = await response.json()
            
          
          
            for(var i=0; i<allFav.length;i++)
          {
            for(var j=0;j<shop.favoriteList.length;j++)
            {
                if(allFav[i].name===shop.favoriteList[j].name)
                {
                    allFav[i].quantity=shop.favoriteList[j].quantity
                    a=a+allFav[i].price*shop.favoriteList[j].quantity
                    temp=[...temp,allFav[i]]
                    // alert(JSON.stringify(temp))
                }
            }
          }
        }
       setPrice(a)
        setData([...temp])
    }

findAllFav();

},[])

const removefromCart=(item)=>
{
    alert("Are you want delete?")
    const newFav1=shop.favoriteList.filter(a=>a.name!==item)
    const hereData=data.filter(b=>b.name!==item)
    const find=data.findIndex(pro=>pro.name===item)
    const deduct=data[find].price*data[find].quantity
    setPrice(totalPrice-deduct)
    setData([...hereData])
    shop.setfavoriteList([...newFav1])
    
}






  return (
    <Container className='mt-5 mb-5 ' style={{width: "100%",height: "500px"}}>
        <Row className='mt-5 mb-5'>
              
        <Col sx={10}>
            {shop.favoriteList.length==0 && <h1>Cart is Empaty!....... </h1>}
            {shop.favoriteList.length!==0 && (
                <ListGroup as="ol"
                className="d-flex justify-content-center align-items-center">
                   
                  {data.map((item,index)=>{
                      return (

                          <ListGroupItem as="li" style={{ width: "100%" }} key={index}>
                          <Stack direction='horizontal' className='d-flex justify-content-between'>
                              <div className="ms-2 me-2" >
                                  <div className="fw-bold">{item.name}</div>

                              </div>
                              <span><Image src={`${item.Image}`} width={50} height={50} alt='Imge'/></span>
                              
                              <Badge bg="primary" pill >
                                  Price :$ {item.price}
                              </Badge>
                              <Badge bg="primary" pill >
                                  Quantity: {item.quantity}
                              </Badge>
                              <Button onClick={()=>removefromCart(item.name)}><FontAwesomeIcon icon={faTrash} /></Button>
                          </Stack>


                      </ListGroupItem>

                      )
                  })}



            </ListGroup>
            )}
                  
              </Col>

        
        </Row>
        {!shop.favoriteList.length==0 && (
        <Row className='d-flex justify-content-center'>
            <Col sx={12} lg={6} as={Stack} gap={3}>
                  <Card>
                    <Card.Body>
                        <Card.Title>${totalPrice}</Card.Title>
                        <Card.Subtitle>Order Deliver Data</Card.Subtitle>
                        <Card.Text>10% Extra discount on SBI</Card.Text>
                    </Card.Body>
                  </Card>
                  <Button>Order now</Button>
            </Col>
        </Row>
        )}
    </Container>
  )
}

export default cart