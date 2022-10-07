import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style.css'

function Carousels() {
   
  return (
    <Carousel>
      <Carousel.Item  >
       
          <Image className="d-block w-100" src={require('../../assets/slide1.png')} alt="First slide" />
           
        <Carousel.Caption  style={{justifyItems:'left'}}>
        <Form>
        <Row>
        <Col md-8 sm-2>
             <p className='caroselName'>Explore and Travel</p>
        </Col>
      </Row>
    </Form>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item  >
       
       <Image className="d-block w-100" src={require('../../assets/slide2.png')} alt="First slide" />
        
     <Carousel.Caption  style={{justifyItems:'left'}}>
     <Form>
     <Row>
     <Col md-8 sm-2>
          <p className='caroselName'>Explore and Travel</p>
     </Col>
   </Row>
 </Form>
     </Carousel.Caption>
   </Carousel.Item>

   <Carousel.Item >
       
       <Image className="d-block w-100" src={require('../../assets/slide3.png')} alt="First slide" />
        
     <Carousel.Caption  style={{justifyItems:'left'}}>
     <Form>
     <Row>
     <Col md-8 sm-2>
          <p className='caroselName'>Explore and Travel</p>
     </Col>
   </Row>
 </Form>
     </Carousel.Caption>
   </Carousel.Item>

      
    </Carousel>









  );
}

export default Carousels;