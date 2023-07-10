import { headers } from 'next/dist/client/components/headers'
import React, { useEffect, useState } from 'react'
import { Accordion, Alert, Button, Col, Container, Form, FormControl, Modal, Row, Stack } from 'react-bootstrap'


import { Audio } from 'react-loader-spinner'
const About = ({ posts }) => {
const [show,setShow]=useState(false)
const [value,setValue]=useState('')
const [item,setItem]=useState(0)
const [Posts,setPosts]=useState(posts)

// useEffect(()=>{
//   setPosts([posts])
// },[])


const closeModal=()=>
{
  setShow(false)
}
const updatePostItem=(item)=>
{
  setItem(item)
    setShow(true)
  }

  const onsubmitPost = async () => {
    
    const option = {
      method: 'POST',
      body: JSON.stringify({ value: value, id: item }),
      headers: {
        'content-type': 'application/json'
      }
    }

    const response = await fetch('http://localhost:3000/api/posts/1', option)
    const data = await response.json()

    setPosts(data)
    setValue('')
    setShow(false)
  }

// delete post
const deletePost=async(item)=>
{
  alert('Are you want to delete?')
  const options={
    method: "DELETE",
    
  }
  const response=await fetch(`http://localhost:3000/api/posts/${item}`,options)
  const deletedPost=await response.json()
  setPosts(deletedPost)

}


  return (
    <>
      <Container fluid className='mt-5 '>
        
        
            <Row ><h3 className='d-flex justify-content-center mb-4'>Users Posts</h3></Row>
            <Row  className='d-flex justify-content-center'>
              <Col sm={6}>
                <Accordion>
                  {Posts.map((item,index)=>{
                    return (
                    <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header className='d-flex justify-content-end'>
                      <Stack direction='horizontal' gap={3}>
                      <span>{item.id}.</span> 
                      <span>{item.name}</span> 
                      <Button onClick={()=>updatePostItem(item.id)}  style={{float: "right"}}>update</Button>
                      <Button onClick={()=>deletePost(item.id)}  style={{alignItems: "flex-end"}}>delete</Button>
                      </Stack>
                      
                    </Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                    )
                  })}
                  
                </Accordion>
              </Col>
            </Row>
          
       

        
      </Container>
            

                  <Modal show={show}>
                    <Modal.Header>
                      <Modal.Title>Change post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <FormControl placeholder='Update post...' onChange={(e)=>setValue(e.target.value)} value={value}></FormControl>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={onsubmitPost}>Submit</Button>
                      <Button onClick={closeModal}>close</Button>
                    </Modal.Footer>

                  </Modal>

      <h1><Audio
        height="80"
        width="80"
        radius="9"
        color='green'
        ariaLabel='three-dots-loading'
        wrapperStyle
        wrapperClass
      /></h1>
    </>
  )
}

export default About


export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/posts/1')
  const posts = await response.json()
  return {
    props: {
      posts: posts
    }
  }
}