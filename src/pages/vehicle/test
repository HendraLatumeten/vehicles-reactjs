import React,{Component} from 'react'
import Footer from '../../components/footer'
import bgLogin from '../../assets/bglogin.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Img from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


export class login extends Component {
render() {
return (<> <Img className='bglogin' src={ bgLogin } alt="" />
    <Container>
        <div className='formLogin'>
            <Row>
                <Col md={ 5 } sm={ 12 }>
                <div className='d-none d-sm-block titleName'>
                    <p>Le’ts Explore The World</p>
                    <div class="animate-[wiggle_1s_ease-in-out_infinite]">
                        <p className='text1'>Don’t have account?</p>
                    </div> 
                    <Link to="/login">
                    <Button className='button1'><b>Login</b></Button>
                    </Link>
                </div>
                </Col>
                <Col md={ 2 } sm={ 12 }>
                <div className='d-none d-sm-block vl'></div>
                </Col>
                <Col md={ 5 } sm={ 12 }>
                <Form>
                     <Form.Group className="mb-3 formGrup" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 formGrup" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3 formGrup" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group> 
                    <Button className='button2' type="submit"> <b> Sign Up</b> </Button>
                    <div className="d-lg-none d-md-block"> <svg class="animate-bounce w-6 h-6 ..."> </svg>
                        <p className='text1' style={ { color:'white', marginTop:40 } }>Don’t have account?</p>
                        <Link to="/login">
                        <Button
                            className="button1 animate-bounce" style={ { marginTop:50 } } type="submit"> <b> Login</b>
                        </Button>
                        </Link> 
                    </div>
                </Form>
                </Col>
            </Row>
        </div>
    </Container>
    <Footer />
</>)
}
}

export default login