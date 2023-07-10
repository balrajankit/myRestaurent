import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from '../styles/header.module.css'
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBell,faBurger, faCartShopping, faMessage } from "@fortawesome/free-solid-svg-icons";
import { Badge, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { shopContext } from './UserContext';
import Link from 'next/link';






function Header() {

  // all state here
  const router=useRouter();
const [user,setUser]=useState(null)

// shop cart
const shop=shopContext()


useEffect(()=>{
  const userData=JSON.parse(localStorage.getItem('LoginUser'))
  if(userData)
  {
    setUser(userData.name)
  }
  else
  {
    setUser(null)
  }
  
})

// logout 

const logout=()=>
{
  setUser(null)
  localStorage.removeItem('LoginUser')
  router.push('/Login')

}


  
  return (
    <Navbar  expand="lg" justify variant='pills' style={{background: "#2196f3",borderBottom: "1px solid white"}}>
      <Container fluid className="d-flex justify-content-around" >
      
        <Navbar.Brand href="/" style={{color: "white"}}>
        <FontAwesomeIcon icon={faBurger} style={{marginRight: "5px"}}/>
        <span className={style.branname}>myRestaurent</span>
        
        </Navbar.Brand>
        <Form className="d-flex justify-content-between">
            <Form.Control
              type="search"
              placeholder="Search"
              className={`${style.searchBar} me-auto`}
              aria-label="Search"
              
              
            />
            
          </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-between">
            
            <Link href='/' className={router.pathname=='/'? style.active: style.nonActive}>Home</Link>
            {user && <Link href='/Restaurent' className={router.pathname=='/Restaurent'? style.active: style.nonActive}>Restaurents</Link>}
            {user && <Link href='/Menu' className={router.pathname=='/Menu'? style.active: style.nonActive}>Menu</Link>}
            {user && <Link href='/about' className={router.pathname=='/about'? style.active: style.nonActive}>Posts</Link>}
            {user && <Link href='/contact' className={router.pathname=='/contact'? style.active: style.nonActive}>Users</Link>}
            <Link href='/services' className={router.pathname=='/services'? style.active: style.nonActive}>Services</Link>
            {!user &&<Link href='/Login' className={router.pathname=='/Login'? style.active: style.nonActive}>Login</Link>}
            {user && <Nav.Link onClick={logout} style={{color: "white"}}>Logout</Nav.Link>}
            {!user && <Nav.Link href='/SignUp' className={router.pathname=='/SignUp'? style.active: style.nonActive}>SIgnUp</Nav.Link>}
            
            
            <Link href='/cart' className={style.nonActive}>
              
              <FontAwesomeIcon icon={faCartShopping} style={{color: "white"}}/>
                <span style={{position: "relative",top: "-16px",left: "-0px" ,color: "white",fontWeight: "bold"}}>{shop.favoriteList.length}</span>
              
            </Link>
            {/* <Nav.Link>
              <button style={{border: "none", background: "none"}}>
              <FontAwesomeIcon icon={faMessage} style={{color: "white"}}/>
                <span style={{position: "relative",top: "-16px",left: "-0px" ,color: "white",
                fontWeight: "bold"
              }}>3</span>
              </button>
            </Nav.Link> */}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      

      
    </Navbar>
  );
}

export default Header;