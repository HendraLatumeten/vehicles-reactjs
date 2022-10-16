import React, { useState } from 'react'
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
import useApi from '../../helpers/useApi'

 function SingUp() {
    //const [PlaceHolder, setPlaceHolder] = useState({ Username: 'Username', Password: 'Password' })
    const [Users, setUsers] = useState({ username: 'username',email: 'email', password: 'password' })

    // const refLogin = useRef(null)
    // const refWarUser = useRef(null)
    // const refWarPass = useRef(null)

    // const navigate = useNavigate()
    const api = useApi()

    const onChangeInput = (event) => {
        event.preventDefault()

        const data = { ...Users }
        data[event.target.name] = event.target.value
        setUsers(data)
    }

    // const inputOnFocus = (event) => {
    //     const newHolder = { ...PlaceHolder }
    //     if (event.target.name === 'username') {
    //         newHolder['Username'] = 'Username'
    //         setPlaceHolder(newHolder)
    //         refWarUser.current.classList.remove(style.err)
    //     } else {
    //         newHolder['Password'] = 'Password'
    //         setPlaceHolder(newHolder)
    //         refWarPass.current.classList.remove(style.err)
    //     }
    //     event.target.classList.add(style.focus)
    // }

    // const inputOnBlur = (event) => {
    //     if (event.target.value === '') {
    //         event.target.classList.remove(style.focus)
    //     }
    // }

    const daftar = () => {
        api.requests({
            method: 'POST',
            url: '/users',
            data: Users
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }


  return (
    <>
    <Img className='bglogin' src={ bgLogin } alt="" />
    <Container>
        <div className='formLogin'>
            <Row>
                <Col md={ 5 } sm={ 12 }>
                <div className='d-none d-sm-block titleName'>
                    <p>Le’ts Explore The World</p>
                    <div className="animate-[wiggle_1s_ease-in-out_infinite]">
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
                     <Form.Group className="mb-3 formGrup" controlId="formBasicUsername">
                        <Form.Control type="text" name="username" placeholder="Username" onChange={onChangeInput} />
                    </Form.Group>
                    <Form.Group className="mb-3 formGrup" controlId="formBasicEmail">
                        <Form.Control type="email"  name="email" placeholder="Email"  onChange={onChangeInput} />
                    </Form.Group>
                    <Form.Group className="mb-3 formGrup" controlId="formBasicPassword">
                        <Form.Control type="password"  name="password" placeholder="Password"  onChange={onChangeInput} />
                    </Form.Group> 
                    <Button className='button2' type="submit" onClick={daftar}> <b> Sign Up</b> </Button>
                    <div className="d-lg-none d-md-block"> <svg className="animate-bounce w-6 h-6 ..."> </svg>
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
    </>
  )
}
export default SingUp
