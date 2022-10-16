import React from 'react'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'
function footer() {
return (

<footer className="text-center text-lg-start text-muted"style={{backgroundColor:'#F9F9FB'}}>
    <section className="">
        <div className="container text-center text-md-start mt-5">

            <div className="row mt-3" >

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                    <h6 className="text-uppercase fw-bold mb-4" style={{marginTop:30}}>
                        <Link to="/">
                        <Image src={require('../../assets/logo1.png')} />
                        </Link>
                    </h6>
                    <p>
                        Plan and book your perfect trip with
                        expert advice, travel tips for vehicle
                        information from us
                    </p>


                    <p>©2022 Vehicle Rental Center. All rights reserved</p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 className="text fw-bold mb-4" style={{marginTop:30}}>
                        Destinations
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Bali</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Yogyakarta</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Jakarta</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Kalimantan</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Malang</a>
                    </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 className="text fw-bold mb-4" style={{marginTop:30}}>
                        Vehicles
                    </h6>
                    <p>
                        <a href="#!" className="text-secondary">Bike</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Cars</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Motorbike</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Return Times</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">FAQs</a>
                    </p>
                </div>

                <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">

                    <h6 className="text fw-bold mb-4" style={{marginTop:30}}>
                        Interest
                    </h6>
                    <p>
                        <a href="#!" className="text-secondary">Adventure Travel</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Art and Culture</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">WildLIfe And Nature</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Family Holidays</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Culinary Trip</a>
                    </p>
                </div>
    <hr />
            </div>

        </div>
    </section>
    <div className="text-center p-4">
        © 2022 Copyright:

    </div>

</footer>

)
}

export default footer