import React, { Component } from 'react'
import Navbars from '../../components/navbar'
import Carousels from '../../components/Carousels'
import Footer from '../../components/footer'
import Content from '../../components/content'
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';



export class index extends Component {
  render() {
    return (
        <><Navbars />
        <Carousels />
        <Content />
        <Footer />
        </>
    )
  }
}

export default index
