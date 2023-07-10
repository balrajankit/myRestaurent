import { faL } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Button, Col, Container, Form, FormControl, Modal, Row, Stack, Table } from 'react-bootstrap'

const Contact = ({userData}) => {
  const[users,setUsers]=useState(userData)
  const[show,setShow]=useState(false)
  const[showUpdate,setshowUpdate]=useState(false)
  const[userName,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[id,setId]=useState()
  
// DELETE USERS
const deleteUser=async(id)=>
{
  var confirmed=confirm("Are you want to delete?")
  if(confirmed)
  {
    const option={
      method:"DELETE",
    }
    const response=await fetch(`http://localhost:3000/api/${id}`,option)
    const data=await response.json()
    
    setUsers(data.allUser)
  }
  
  

}

const CreateUser=async()=>
{
  setShow(false)
  const option={
    method:"POST",
    body: JSON.stringify({"userName": `${userName}`,"email":`${email}`,"password":`${password}`}),
    headers: {
      'content-type': 'application/json'
    }
  }
  
  const response=await fetch(`http://localhost:3000/api/sql}`,option)
  const data=await response.json()
  
  setUsers(data.allUsers)
}


const modalHandler=()=>
{
  setShow(false)
}
const updateUser=(item)=>{
  
setId(item._id)
setName(item.userName)
setEmail(item.email)
setPassword(item.password)
setshowUpdate(true)
}

// update form
const updateUserForm=async()=>
{
  const option={
    method: "PUT",
    body: JSON.stringify({id:id,userName: userName,email:email,password:password}),
    headers:{
      'content-type': "application/json"
    }
  }

  const response=await fetch('http://localhost:3000/api/sql}',option)
  const data=await response.json()
  
  setUsers(data.allUsers)
  setshowUpdate(false)
  
}




  return (
    <Container className='mt-5 mb-5' style={{minHeight: "400px"}}>
      <Row>
        <Col>
        <Button onClick={()=>setShow(true)}>create</Button>
          <Table striped bordered hover>
            <thead >
              <tr>
                <th>user name</th>
                <th>user email</th>
                <th>user password</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              
                {users.length>0 && users.map((item,index)=>{
                  return(
                    <tr>

                    <td>{item.userName}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td onClick={()=>deleteUser(item._id)}><Button>delete</Button></td>
                    <td onClick={()=>updateUser(item)}><Button>update</Button></td>
                    
                    </tr>
                  )
                })}
                
           
            </tbody>
          </Table>
          
        </Col>
      </Row>
        <Modal show={show} onHide={()=>setShow(false)}>
          <Modal.Header>Add user</Modal.Header>
          <Modal.Body>
            <Form as={Stack} gap={3}>
              <FormControl type='text' placeholder='Enter name' onChange={(e)=>setName(e.target.value)}></FormControl>
              <FormControl type='text' placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}></FormControl>
              <FormControl type='text' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}></FormControl>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={CreateUser}>Submit</Button>
            <Button onClick={()=>setShow(false)}>close</Button>
          </Modal.Footer>
        </Modal>
        
        <Modal show={showUpdate} onHide={()=>setshowUpdate(false)}>
          <Modal.Header>update user</Modal.Header>
          <Modal.Body>
            <Form as={Stack} gap={3}>
              <FormControl type='text' placeholder='Enter name' onChange={(e)=>setName(e.target.value)} value={userName}></FormControl>
              <FormControl type='text' placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} value={email}></FormControl>
              <FormControl type='text' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} value={password}></FormControl>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>updateUserForm(id)}>Submit</Button>
            <Button onClick={()=>setshowUpdate(false)}>close</Button>
          </Modal.Footer>
        </Modal>
    </Container>
  )
}

export default Contact


export const getServerSideProps=async()=>{

  const response=await fetch('http://localhost:3000/api/sql')
  const allUsers=await response.json()
  console.log(allUsers+"allusers")
  const data=allUsers.allUsers
  return{
    props:{userData:data}
  }
}