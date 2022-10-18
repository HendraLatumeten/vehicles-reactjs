import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Popular() {
 const [popular, setPopular] = useState([])

const getPopular = async () => {
const { data } = await axios.get(process.env.REACT_APP_URL+`vehicles/popular`)
setPopular(data.data);
};


useEffect(() => {
    getPopular();

},[])
    return (
      
    
    <Container >
  <h3 className="contentName">Popular In Town</h3>

            <div class="content">
            <Row>
                    {popular.map((v, k) => {
                    return v.type_vehicles === "cars" ? (
                    <Col key={k} lg={3} sm={12}>
                    <Card className="text-center cardName shadow">
                        <Image src={v.image} className="img" />
                        <Button variant="light">
                            <Link to={`/detail_vehicle/${v.vehicles_id}`}> <p style={{color:'black'}}>{v.name} -{v.city}
                            </p>
                            </Link>
                        </Button>
                    </Card>
                    </Col>
                    )
                    :
                    null
                    }
                    )
                    }

        </Row>
            </div>
    </Container>

    )
  }


export default Popular