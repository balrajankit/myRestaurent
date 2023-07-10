import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, Pagination, ProgressBar, Row, Stack, Tab, Tabs } from 'react-bootstrap'
import ModalImage from 'react-modal-image'
import img from '@/public/Images/res1.jpg'
import { headers } from '@/next.config'
// import CardHeader from 'react-bootstrap/esm/CardHeader'
import Image from 'next/image'
// import Image from 'next/image'

const Services = ({Images}) => {
  const [progress,SetProgress]=useState(0)
  const [data,setData]=useState([])
  const [active,setActive]=useState(1)
  const [Imagedata,setImageData]=useState(null)
  const [ImageName,setName]=useState('')
  const [DispImage,setDispImage]=useState('')
  const [ImageUrl,setImageUrl]=useState('')
  const [allImages,setAllImages]=useState(null)
  const [uploading,setUpload]=useState(false)

  const list=[1,2,3,4,5,6,7,8,9,10,11,12,]
useEffect(()=>{
const fistfive=list.slice(0,3)
setData(fistfive)
},[])


const ChangeList=(id)=>
{
  const selected= list.slice(3*(id-1),id*3)
  
  setData(selected)
  setActive(id)
  
}
const fileChnage=async(e)=>
{
 await setImageData(e.target.files[0])
  setName(e.target.files[0].name)
  setDispImage(URL.createObjectURL(e.target.files[0]))
}

const submithandeler=async(e)=>
{

  e.preventDefault()
  setImageData('')
  setName('')
  setDispImage('')
  await setUpload(true)
  const data=new FormData()
  data.append('file',Imagedata)
  data.append('upload_preset','ml_default')
  
  try{
    const resp=await fetch('https://api.cloudinary.com/v1_1/dmtlrhl6z/image/upload',{
      method: "POST",
      body: data
    })
      const res1=await resp.json()
      console.log("this is afer"+JSON.stringify(res1))
      await setImageUrl(res1.url)
      
      
      alert("Image save successfully")
      await fetchImages(res1.url)
      
      


  }
  catch(err)
  {
    console.log("err"+err)
  }
}

// fetch all images
const fetchImages=async(url='')=>
{
  
  
 const resp=await fetch('http://localhost:3000/api/Images',{
  method:"POST",
  body: JSON.stringify({ImageName: ImageName, ImageUrl: url}),
  headers:{
    'content-type': 'application/json'
  }
 })
 const result=await resp.json()
 await setImageData('')
 setImageUrl('')
 
 await setAllImages(result)
 
 await setUpload(false)

}


  return (
    <Container style={{minHeight: "400px"}} className='mt-5 mb-5'>

    <Row className='d-flex justify-content-center'>
      <Col sm={12} md={4} >
        <Form onSubmit={(e)=>submithandeler(e)}>
          <FormControl type='file' placeholder='Please select your Image' onChange={fileChnage}/>
          {uploading && <h4 style={{color:'red'}}>uploading...</h4>}
          <FormControl type='submit' className='mt-4'/>
        </Form>
      </Col>
      <Col sm={12} md={4}>
      {Imagedata && <span>
            <img src={DispImage} width={100} height={100}></img>
            
          </span>}
          {ImageUrl}
          {JSON.stringify(Images)}
          <Button onClick={()=>fetchImages()}>Fetch</Button>
      </Col>
      
        
        {allImages!==null && allImages.map(item=>(
          <Col sm={4}>
          <Card>
            <Card.Header>{item.ImageName}</Card.Header>
            <Card.Body>
            <img src={item.ImageUrl} width={100} height={100} />
            </Card.Body>
          </Card>
          </Col>
        ))
        }
      
    </Row>









      {/* this is for for exercise */}
      <Row style={{marginTop: "500px"}}>
        <Col>
        <Stack>
        <ProgressBar now={progress} as={Stack}/>{progress}%
        </Stack>
         
          <Button onClick={()=>SetProgress(progress+10)}>+</Button>
          <Button onClick={()=>SetProgress(progress-10)}>-</Button>
        </Col>
      </Row>

    {/* pagination */}
    <Row className='mt-5'>
      <Col>
        {data.map(item=>{
          return(
            <Stack direction='vertical'>
              <h3 key={item}>{item}</h3>
            </Stack>
          )
        })}
        <Pagination >
          <Pagination.First onClick={()=>ChangeList("1")} />
          <Pagination.Prev onClick={()=>ChangeList(active==1?1:active-1)}></Pagination.Prev>
          <Pagination.Item key={1} active={active==1} onClick={()=>ChangeList("1")} >
            1
          </Pagination.Item>
          <Pagination.Item key={2} active={active==2} onClick={()=>ChangeList("2")}>
            2
          </Pagination.Item>
          <Pagination.Item key={3} active={active==3} onClick={()=>ChangeList("3")}>
            3
          </Pagination.Item>
          <Pagination.Item key={4} active={active==4} onClick={()=>ChangeList("4")}>
            4
          </Pagination.Item>
          <Pagination.Next onClick={()=>ChangeList(active==Math.ceil(list.length/3)? Math.ceil(list.length/3): parseInt(active)+1)}></Pagination.Next>
          <Pagination.Last onClick={()=>ChangeList(Math.ceil(list.length/3))}></Pagination.Last>
        </Pagination>
      </Col>
    </Row>


{/* modal Image */}
<ModalImage
small={'https://res.cloudinary.com/demo/image/upload/c_scale,h_400,w_400/sample.jpg'}
medium={'https://res.cloudinary.com/demo/image/upload/c_scale,h_400,w_720/sample.jpg'}
large={'https://res.cloudinary.com/demo/image/upload/c_scale,h_720,w_720/sample.jpg'}
alt='hell'
style={{width: "400px" ,height:"400px" ,marginBottom: "20px"}}
/>

{/* tab compoent */}
<Tabs className='mt-5' justify>
  <Tab eventKey="home" title="Home">This is Home</Tab>
  <Tab eventKey="about" title="about">This is about</Tab>
  <Tab eventKey="propfile" title="profile">This is profile</Tab>
</Tabs>

    </Container>
  )
}
export default Services

