import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

export class content extends Component {
  render() {
    return (
      
    <Container >
    <Row>
        <div class="content">
        <Row>
        <h3 className="contentName">Popular In Town</h3>
        <Col lg="3" sm="12">
                <Card className="text-center cardName shadow">      
            <Image src={require('../../assets/popular1.png')} className="img" />
                <Button variant="light" className="transition">Merapi 
                Yogyakarta
                </Button>
            </Card>
        </Col>
     
        <Col lg="3" sm="12">
                <Card className="text-center cardName shadow">
            
           
            <Image src={require('../../assets/popular2.png')} className="img" />
                <Button variant="light">Teluk Bogam</Button>
          

            </Card>
        </Col>
       
        <Col lg="3" sm="12">
                <Card className="text-center cardName shadow">
            
            
            <Image src={require('../../assets/popular3.png')} className="img" />
                <Button variant="light">Bromo Malang</Button>
          

            </Card>
        </Col>
        <Col lg="3" sm="12">
                <Card className="text-center cardName shadow">
            
            <Image src={require('../../assets/popular4.png')} className="img" />
                <Button variant="light">Malioboro Yogyakarta</Button>
          

            </Card>
        </Col>
        </Row>
    </div>
    </Row>
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

        <Image src={require('../../assets/testimoni.png')} style={{height:300,marginLeft:50}}  className="img-fluid rounded shadow-4 justify-content-md-center" />

        </Col>
    </Row>
    <br></br>
    <hr></hr>
    </Container>
    )
  }
}

export default content