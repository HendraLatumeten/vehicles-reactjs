import React, { useState, useEffect } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Popular from '../../components/content/popular.jsx';
import Navbars from '../../components/navbar'
import Footer from '../../components/footer'
import axios from 'axios';
import {Link} from 'react-router-dom'
// import { useParams } from 'react-router-dom/cjs/react-router-dom';


function Vehicle_type() {
const [result, setResult] = useState([])
const [searchTerm, setSearchTerm] = useState("");

const getData = async () => {
const { data } = await axios.get(process.env.REACT_APP_URL)
setResult(data.data);

};
let listToDisplay = result;

const handleChange = (e) => {
setSearchTerm(e.target.value);
};



if (searchTerm !== "") {
listToDisplay = result.filter((result) => {
return result.name.toLowerCase().includes(searchTerm)


});
}

useEffect(() => {
getData();

})


return (
<>
    <Navbars />
    {/* search */}
    <Container>
        <Row>

            <div class="relative w-full">
                <input type="search" id="search" value={searchTerm} onChange={handleChange}
                    class="block p-2.5 rounded z-20 text-sm text-gray-900 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:placeholder-gray-400 dark:text-white dark:blue-500"
                    placeholder="Search vehicle (ex, cars , carsname)" />
                <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium">
                    <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </Row>
    </Container>

    <Popular />

    <Container>
        <h3 className="contentName">Cars</h3>
        <Row>
            <div class="content">
                <Row>
                    {listToDisplay.map((v, k) => {
                    return v.type_vehicles === "cars" ? (
                    <Col key={k} lg={3} sm={12}>
                    <Card className="text-center cardName shadow">
                        <Image src={v.image} className="img" />
                        <Button variant="light">
                            <Link to={`/detail_vehicle/${v.vehicles_id}`}> <p style={{color:'black'}}>{v.name} -{v.city}
                            </p>
                            </Link>
                        </Button>
                    </Card>
                    </Col>
                    )
                    :
                    null
                    }
                    )
                    }
                </Row>
            </div>
        </Row>


        <h3 className="contentName">MotorBike</h3>
        <Row>
            <div class="content">
                <Row>
                    {listToDisplay.map((v, k) => {
                    return v.type_vehicles === "motor bike" ? (
                    <Col key={k} lg={3} sm={12}>
                    <Card className="text-center cardName shadow">
                        <Image src={v.image} className="img" />
                        <Button variant="light">
                            <Link to={`/detail_vehicle/${v.vehicles_id}`}> <p style={{color:'black'}}>{v.name} -{v.city}
                            </p>
                            </Link>
                        </Button>
                    </Card>
                    </Col>
                    )
                    :
                    null
                    }
                    )
                    }

                </Row>
            </div>
        </Row>

        <h3 className="contentName">Bike</h3>
        <Row>
            <div class="content">
                <Row>
                    {listToDisplay.map((v, k) => {
                    return v.type_vehicles === "bike" ? (
                    <Col key={k} lg={3} sm={12}>
                    <Card className="text-center cardName shadow">
                        <Image src={v.image} className="img" />
                        <Button variant="light">
                            <Link to={`/detail_vehicle/${v.vehicles_id}`}> <p style={{color:'black'}}>{v.name} -{v.city}
                            </p>
                            </Link>
                        </Button>
                    </Card>
                    </Col>
                    )
                    :
                    null
                    }
                    )
                    }

                </Row>
            </div>
        </Row>

        <br></br>
    </Container>
    <Footer />
</>
)
}

export default Vehicle_type