import Image from 'next/image'
import React, { useState } from 'react'
import loginImg from '@/public/Images/Login.jpg'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row, Stack } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'





const SignUp = () => {
const [name,setName]=useState('')
const [email,SetEmail]=useState('')
const [password,setPassword]=useState('')
const router=useRouter()



const submitHandler=(e)=>
{
e.preventDefault();
    if(email===""|| name==='' || password==='')
    {
        alert("Please fill all field")
    }
else if(!email.includes('@'))
{
    alert("@ is not present in Email")
}
else if(password.length<5)
{
    alert("password length is less than 5")
}

else
{
    const checkUser=JSON.parse(localStorage.getItem('user'))
    if(checkUser.email==email)
    {
        alert("user Already present")
        router.push('/Login')
    }
    else
    {
    const data={name: name,email: email,password:password}
    localStorage.setItem('user',JSON.stringify(data))
    alert("Rigistration Successfull")
    router.push('/Login')
    }
}
}

  return (
    <Container  style={{height: "500px", width: "100%",marginTop: "50px",marginBottom: "50px", borderRadius: "10px", border: "1px solid black" }} className='d-flex align-items-center  justify-content-center'>
        <Row  >
            <Col><Image src={loginImg.src} width='300' height={400}  alt='this '/> </Col>
            <Col style={{width: "400px", borderRadius: "10px", border: "1px solid black",padding: "10px"}} >
                <Stack gap={3} className='d-flex justify-content-center'>
                      <h3 className='d-flex justify-content-center'>SignUp</h3>
                      <Form onSubmit={submitHandler}>
                          <FormGroup as={Row} className='mt-3 mb-3'>
                              <FormLabel column sm="3">Name</FormLabel>
                              <Col sm="9">
                                  <FormControl type="text" placeholder='enter your name' onChange={(e)=>setName(e.target.value)}></FormControl>

                              </Col>
                          </FormGroup>
                          <FormGroup as={Row} className='mt-3 mb-3'>
                              <FormLabel column sm="3">Email</FormLabel>
                              <Col sm="9">
                                  <FormControl type="text" placeholder='enter your Email' onChange={(e)=>SetEmail(e.target.value)}></FormControl>

                              </Col>
                          </FormGroup>
                          <FormGroup as={Row} className='mt-3 mb-3'>
                              <FormLabel column sm="3">Password</FormLabel>
                              <Col sm="9">
                                  <FormControl type="text" placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}></FormControl>

                              </Col>
                          </FormGroup>
                          <span className='d-flex justify-content-center mt-5'><input type='submit' /></span>
                          
                      </Form>
                      <span className='d-flex justify-content-center'>Have an account? <Link href='/Login'>Login</Link></span>
                </Stack>
            </Col>
        </Row>
    </Container>
  )
}

export default SignUp


SignUp.getLayout=function PageLayout(page)
{
return(
    <>
    {page}
    <Footer/>
    </>
)
}