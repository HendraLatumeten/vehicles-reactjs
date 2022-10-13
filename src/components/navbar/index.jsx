import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'
import  './style.css' 




function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="white" className='navbar'>
      <Container>
        <Navbar.Brand href="#home">
        <Image src={require('../../assets/logo1.png')} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="justify-content-end flex-grow-1 pe-3">
          
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/vehicle">Vehicle Type</Link></Nav.Link>
          <Nav.Link><Link to="#">History</Link></Nav.Link>
          <Nav.Link><Link to="#">About</Link></Nav.Link>
          {/* <Link to="/vehicle">Vehicle Type</Link>
          <Link to="#">History</Link>
          <Link to="#">About</Link> */}
        
{/*         
          <Nav.Link href="/about" style={{paddingRight:50}}>About</Nav.Link> */}

          {/* no login */}
          <Nav.Item style={{paddingRight:10}}>
            <Link to="/login">
                  <Button  w="100px" variant="outline-warning">Login</Button>{' '}
            </Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="/register">
          <Button variant="warning">Register</Button>{' '}
          </Link>
          </Nav.Item>
          </Nav>
          
          {/* login */}
          {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg> */}
         
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
    
    
  );
}

export default CollapsibleExample;