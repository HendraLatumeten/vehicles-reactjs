import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import {Link, useLocation} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../../store/reducer/users'
import  './style.css' 




function Navbars() {
  const dispacth = useDispatch()
  const {isAuth}= useSelector((state) =>state.users)
  const {pathname} = useLocation()
   
  return (
    <Navbar collapseOnSelect expand="lg" variant="white" className='navbar'>
      <Container>
        <Navbar.Brand>
          <Link to = "/">
        <Image src={require('../../assets/logo1.png')} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="justify-content-end flex-grow-1 pe-3">
          
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/vehicle">Vehicle Type</Link></Nav.Link>
          <Nav.Link><Link to="#">History</Link></Nav.Link>
          <Nav.Link><Link to="#">About</Link></Nav.Link>
 
        {/* conditional rendering */}
          {!isAuth && pathname === '/' ? (
                    <>
           <Nav.Item style={{paddingRight:10}}>
           <Link to="/login">
                 <Button  w="100px" variant="outline-warning">Login</Button>
           </Link>
         </Nav.Item>
         <Nav.Item>
         <Link to="/register">
         <Button variant="warning">Register</Button>
         </Link>
         </Nav.Item> 
         </>
         ) :isAuth && pathname === '/' ?(
          <Nav.Item style={{paddingRight:10}}>
    <Link to="/login">
                <Button  w="100px" variant="warning" onClick={() => dispacth(logout())}>Logout</Button>
                </Link>
        </Nav.Item>
         ): null }       
          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
    
    
  );
}

export default Navbars;