import React, { Component } from 'react'
import Navbars from '../../components/navbar'
import Carousels from '../../components/Carousels'
import Footer from '../../components/footer'
import Popular from '../../components/content/popular.jsx'
import Testimonials from '../../components/content/testimonials'
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
// const dumy = [
// {
// id: "259",
// name: "Raspberry Mineral Water",
// description: "An 8-ounce serving of our refreshing H+ Sport raspberry mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
// image_title: "mineral-water-raspberry_600px",
// image: "https://hplussport.com/wp-content/uploads/2015/12/mineral-water-raspberry_600px.png"
// },
//]

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    fetch('https://hplussport.com/api/products/',{
      mode: 'no-cors',
      method: "GET",
      headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials": true,
"Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS",
"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      }})
    .then(results => results.json())
    .then(info => {
      console.log(info)
      const results = info.data.map(x => {
        return  {
          id: x.id,
          // slug: x.slug,
          // name: x.name,
          // address_1: x.address_1,
          // address_2: x.address_2,
          // city: x.city,
          // state: x.state,
          // postal_code: x.postal_code,
          // country_code: x.country_code,
          // phone_number: x.phone_number,
        }
      })
      this.setState({id: results, lastPage: info.last_page});
    })
    .then(console.log(this.id))
   
   }
  



      render() {
        return (
 
          <>
  <Navbars />
 
  <Carousels />



<Container>
  
  <div className="cardName">
    <Row>
      {/* {
      dumy.map((v,k) =>{
      return <Popular key={k} name={v.name} image={v.image} />
      })
      } */}
      <Popular />
    </Row>
  </div>

  </Container>


  <Testimonials />
  <Footer />
</>
)
}
}

export default index