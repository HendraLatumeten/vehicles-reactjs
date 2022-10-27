import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {users} from '../../store/reducer/users'
import Navbars from '../../components/navbar'
import Carousels from '../../components/Carousels'
import Footer from '../../components/footer'
import Popular from '../../components/content/popular.jsx'
import Testimonials from '../../components/content/testimonials'
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import useApi from '../../helpers/useApi'

function Home() {
  // const [usersData, setUsers] = useState([])
  const api = useApi()
  const dispacth =useDispatch()

  const getDataUser =  async ()=>{
    try {
      const {data} =await api.requests('users')
      dispacth(users(data.data))
      console.log(data.data)
    } catch (error) {

      console.log(error)
    }
  }


  useEffect(() =>{
    getDataUser()
  })
  return (
    <>
  <Navbars />
  <Carousels />
  <Popular />
  <Testimonials />
  <Footer />
</>
  )
}

export default Home