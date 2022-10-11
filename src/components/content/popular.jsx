import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function popular() {
    return (
      
    
    <Container >
  <h3 className="contentName">Popular In Town</h3>
     <Row>
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
        <Col lg="3" sm="12">
                <Card className="text-center cardName shadow">
            
            <Image src={require('../../assets/popular4.png')} className="img" />
                <Button variant="light">Malioboro Yogyakarta</Button>
          

            </Card>
        </Col> 
        </Row>
    </Container>

    )
  }


export default popular