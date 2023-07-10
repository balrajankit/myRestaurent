import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import CardSection from '@/components/CardSection'
import style from '@/styles/header.module.css'
import { Audio, Circles } from 'react-loader-spinner'


const RestaurentDetail = ({restaurent}) => {
    const router=useRouter()
    const [user,setUser]=useState(null)

    if(router.isFallback)
    {
        return <h1><Circles
        height = "80"
        width = "80"
        radius = "9"
        color = 'green'
        ariaLabel = 'three-dots-loading'     
        wrapperStyle
        wrapperClass
      /></h1>
    }
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







  return (
    <Container className='mt-5 mb-5'>
        <Row>
            <Col><Image  src={restaurent.Image} width={500} height={200} style={{boxShadow: "2px 2px 10px black"}}/></Col>
            <Col>
            <Stack gap={4}>
                <h1 className={style.myHeading}>{restaurent.name}</h1>
                <span style={{color: 'green', fontWeight: "bold"}}>{restaurent.type}</span>
                <p className={style.myTitle}>This is oure restuarent and we are her to help iur team to find ourt 
                    oiut respinse they are alse hekp me 
                    fix the issue
                </p>
            </Stack>
            </Col>
        </Row>
        <Row >
        <Col sx={12} className={`d-flex justify-content-center mt-5 mb-3 `}><h1 className={style.myHeading}>Our Restaurent</h1></Col>
        </Row>
        <CardSection></CardSection>

    </Container>
  )
}

export default RestaurentDetail


export const getStaticPaths=async()=>
{
    return{
        paths:[
            {params:{restId: '1'}},
            {params:{restId: '2'}},
            {params:{restId: '3'}},
            {params:{restId: '4'}},
            {params:{restId: '5'}},
            {params:{restId: '6'}},
            
        
        ],
        fallback: true,
    }
}


export const getStaticProps=async(context)=>
{
    const {params}=context
    const {restId}=params
    console.log("ifd "+restId)
    const response=await fetch(`http://localhost:4000/restaurents/${restId}`)
    const data=await response.json()
    console.log("data"+JSON.stringify(data))
    if(!data.name)
    {
       return {notFound: true}
    }
    return{
        props:{
            restaurent: data
        },
       

    }

}