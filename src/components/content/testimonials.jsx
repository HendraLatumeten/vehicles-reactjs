import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import './style.css'
export class testimonials extends Component {
  render() {
    return (
      
    <Container >
    <Row>
        <h3 className="contentTest">Testimonials</h3>
        <Col lg={6} sm={2} style={{marginTop:20}}>
        <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>
        <br />
        <br />
            <p>”It was the right decision to rent vehicle  </p>
            <p>  here, I spent less money and enjoy the  </p>
            <p>  trip. It was an amazing experience to  </p>
            <p>   have a ride for wildlife trip!” </p>
            <br />
            <h5> Edward Newgate</h5>
            <p>Founder Circle</p>
        </Col>
        
     
        <Col lg={6} sm={2}>

        <Image src={require('../../assets/testimoni.png')} style={{height:300,align:'center'}}  className="img-fluid rounded shadow-4 justify-content-md-center testiImage" />

        </Col>
    </Row>
    <br></br>
    <hr></hr>
    </Container>
    )
  }
}

export default testimonials