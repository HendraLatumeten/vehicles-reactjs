import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="white">
      <Container>
        <Navbar.Brand href="#home">
        <Image src={require('../../assets/logo1.png')} />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/vehicle">Vehicle Type</Nav.Link>
          <Nav.Link href="/history">History</Nav.Link>
          <Nav.Link href="/about" style={{paddingRight:50}}>About</Nav.Link>
          <Nav.Item style={{paddingRight:10}}>
                  <Button  w="100px" variant="outline-warning">Login</Button>{' '}
          </Nav.Item>
          <Nav.Item>
          <Button variant="outline-warning">Register</Button>{' '}
          </Nav.Item>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;