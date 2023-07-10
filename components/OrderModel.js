import React, { forwardRef, useState } from 'react'
import { useImperativeHandle } from 'react'
import { Button, Form, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Stack } from 'react-bootstrap'
import { shopContext } from './UserContext'
import { faL } from '@fortawesome/free-solid-svg-icons'

const OrderModel = forwardRef((props,ref)=>{
    const [show, setShow]=useState(false)
    // const [favoriteList,setfavoriteList]=useState([])
    const [quantity,setQuantity]=useState(0)
    const [itemName,setitemName]=useState('')

const shop=shopContext()


const closedModal=()=>
{
setShow(false)
}

useImperativeHandle(ref, () => ({
    setModalShow(item) {
        
        setitemName(item)
        
      setShow(true);

    }
  }));


//   add favorite list
    const addFavorite = () => {
        // check present or not
        // alert("add in "+itemName)
        const find = shop.favoriteList.findIndex(item => item.name ===itemName)
        // alert("item? :"+find)
        if (parseInt(find)>=0) {
            // alert("find"+find)
            shop.favoriteList[find].quantity = quantity
            setShow(false)
        }
        else {
            // alert("no present"+find)
            // alert("No prest Name"+itemName)
            shop.setfavoriteList([...shop.favoriteList, { name: itemName, quantity: quantity }])
            setShow(false)
        }
        
    }


  return (
    <>
    {props.children}
    <Modal show={show} onHide={closedModal}>
        <ModalHeader closeButton>
            <ModalTitle>Add product quantity</ModalTitle>
        </ModalHeader>
        <ModalBody>
            <Form>
                <FormControl type='number' placeholder='Enter number of quantity' onChange={(e)=>setQuantity(e.target.value)}></FormControl>
                <Button className='mt-3 mb-3' onClick={addFavorite}>add</Button>
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button onClick={closedModal}>CLose</Button>
        </ModalFooter>
    </Modal>
    </>
  )
}) 

export default OrderModel