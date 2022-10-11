import React, { Component } from 'react'
import Navbars from '../../components/navbar'
import Carousels from '../../components/Carousels'
import Footer from '../../components/footer'
import Popular from '../../components/content/popular.jsx'
import Testimonials from '../../components/content/testimonials'
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export class index extends Component {


render() {
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
}

export default index