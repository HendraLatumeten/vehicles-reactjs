import React, { useState, useEffect } from 'react'
import { Image, Button, Row, Col, Container } from 'react-bootstrap'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



function Detail() {
const [result, setResult] = useState([])
const { id } = useParams()

// console.log(id);


const getDetail = async () => {
const { data } = await axios.get(process.env.REACT_APP_URL+`/getBy/${id}`);
setResult(data.data[0]);
// console.log(data.data[0].name)
};



useEffect(() => {
getDetail();
})

return (
<>
    <Navbar />
    <Container>
        <Row>
            <Col md={12}>
            <Button variant="white">
                <Link to={`/vehicle/`}> <p class="bi bi-chevron-compact-left " style={{marginTop:50}}>Detail</p>
                </Link>
            </Button>
            </Col>
        </Row>
    </Container>

    <Row>
        <Col md={2}>
        </Col>
        <Col md={4} sm={12}>
        <Container>
            <Image src={result.image} className="image rounded-lg" />
        </Container>
        </Col>


        <Col md={4} sm={12}>
        <h1 style={{fontFamily: 'Playfair Display' ,color:'black'}}>{result.name}</h1>
        <p>{result.city}</p>
        <p style={{color:'red'}}>
            Available <br />
            No prepayment
        </p>
        <p style={{fontSize:15}}>
            Capacity : {result.capacity} person <br />
            Type : {result.type_vehicles} <br />
            Reservation before 2 PM
        </p>
        <p>
            <h3>Price: <i>300K</i></h3>
        </p>
        </Col>
        <Col md={2}>
        </Col>
    </Row>
    <Row>
        <Col md={2}>
        </Col>
        <Col md={4}>
        <div className="slide-container center">
            <Slide>
                <div className="each-slide">
                    <Image src={result.image} style={{borderRadius:10}} />
                </div>
            </Slide>
        </div>

        </Col>
        <Col md={4}>
        <div className="btn-group" role="group">
            <button className="btn btn1" style={{backgroundColor:"#FFCD61"}}>
                +
            </button>
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;</h4>
            <button className="btn btn2" style={{backgroundColor:"#CBCBD4"}}>
                -
            </button>
        </div>
        </Col>
        <Col md={2}>
        </Col>
    </Row>
    <Row>
        <Col md={2}>
        </Col>
        <Col md={8}>
        <button className='btn btn3' style={{backgroundColor:"#393939",color:'#FFCD61'}}>
            Chat Admin
        </button>
        <button className='btn btn3' style={{backgroundColor:"#FFCD61",color:'black'}}>
            Reservation
        </button>
        <button className='btn btn4' style={{backgroundColor:"#393939",color:'yellow'}}>
        <i class="bi bi-heart-fill" style={{color:'#FFCD61'}}></i>Like 
        </button>
        </Col>
        <Col md={2}>

        </Col>
    </Row>
    <Footer />
</>
)
}
export default Detail