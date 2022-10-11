import React from 'react'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'
function footer() {
return (

<footer class="text-center text-lg-start bg-white text-muted">
    <section class="">
        <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">

                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                    <h6 class="text-uppercase fw-bold mb-4">
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

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 class="text fw-bold mb-4">
                        Destinations
                    </h6>
                    <p>
                        <a href="#!" class="text-reset">Bali</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Yogyakarta</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Jakarta</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Kalimantan</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Malang</a>
                    </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 class="text fw-bold mb-4">
                        Vehicles
                    </h6>
                    <p>
                        <a href="#!" class="text-secondary">Bike</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Cars</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Motorbike</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Return Times</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">FAQs</a>
                    </p>
                </div>

                <div class="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">

                    <h6 class="text fw-bold mb-4">
                        Interest
                    </h6>
                    <p>
                        <a href="#!" class="text-secondary">Adventure Travel</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Art and Culture</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">WildLIfe And Nature</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Family Holidays</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Culinary Trip</a>
                    </p>
                </div>
            </div>

        </div>
    </section>

    <div class="text-center p-4" style={{backgroundColor:'#F9F9FB'}}>
        © 2022 Copyright:

    </div>

</footer>

)
}

export default footer