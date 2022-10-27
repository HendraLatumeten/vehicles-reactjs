import React, { useState, useEffect } from 'react'
import Footer from '../../components/footer'
import bgLogin from '../../assets/bglogin.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Img from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
//import Form from 'react-bootstrap/Form';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom'
import useApi from '../../helpers/useApi'

import {login} from '../../store/reducer/users'
import {useDispatch, useSelector} from 'react-redux'

 function Login() {
    const [Users, setUsers] = useState({ username: 'username',password: 'password' })

     const api = useApi()
     const navigate = useNavigate()
     const dispatch = useDispatch()
    const {isAuth}= useSelector((state) =>state.users)

    useEffect(() =>{
        if (isAuth) {
            navigate('/')
        }
    })

    const onChangeInput = (event) => {
        event.preventDefault()

        const data = { ...Users }
        data[event.target.name] = event.target.value
        setUsers(data)
    }


    const Login = () => {
        api.requests({
            method: 'POST',
            url: 'auth',
            data: Users
        })
            .then((res) => {
                const {token } = res.data.data
                dispatch(login(token))
            })
            .catch((err) => console.log(err))
    }


  return (
    <>
    <Img className='bglogin' src={ bgLogin } alt="" />
    <Container>
        <div className='formLogin '>
            <Row>
                <Col md={ 5 } sm={ 12 }>
                <div className='d-none d-sm-block titleName'>
                    <p>Le’ts Explore The World</p>
                    <div className="animate-[wiggle_1s_ease-in-out_infinite]">
                        <p className='text1'>Don’t have account?</p>
                    </div> 
                    <Link to="/register">
                    <Button className='button1'><b>Sign Up</b></Button>
                    </Link>
                </div>
                </Col>
                <Col md={ 2 } sm={ 12 }>
                <div className='d-none d-sm-block vl'></div>
                </Col>
            
            <Col md={ 5 } sm={ 12 }>
              <div className='formrgist rounded-lg'>
                     <div className="mb-3 formGrup" >
                        <input type="text" name="username" placeholder="Username" onChange={onChangeInput} />
                    </div>
                    <div className="mb-3 formGrup" >
                        <input type="password"  name="password" placeholder="Password"  onChange={onChangeInput} />
                    </div> 
                    <Button className='button2' type="submit" onClick={Login}> <b> Login</b> </Button>
                    <div className="d-lg-none d-md-block"> <svg className="animate-bounce w-6 h-6 ..."> </svg>
                        <p className='text1' style={ { color:'white', marginTop:40 } }>Don’t have account?</p>
                        <Link to="/register">
                        <Button
                            className="button1 animate-bounce" style={ { marginTop:50 } }type="submit"> <b>Sign Up</b> 
                            </Button>
                       </Link>
                    </div>
                    </div>
                </Col>
                </Row>
        </div>
        
    </Container>
    <Footer />
    </>
  )
}
export default Login
