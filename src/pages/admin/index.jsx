import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import Navbar from '../../components/navbar'
import Cointainer from 'react-bootstrap/Container'
import axios from 'axios'
import withAuth from '../../helpers/withAuth'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";




function Admin() {
const [result, setResult] = useState([])
const { params } = useState(null)
const { token } = useSelector((state) => state.users);
const [dataSave, setData] = useState({ name: 'name', type_vehicles: 'type_vehicles', city: 'city', capacity: 'capacity', price:'price', image:'image' })


//modals
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


// table
const getData = async () => {
const { data } = await axios.get(process.env.REACT_APP_URL+`/vehicles/`);
setResult(data.data);
};

const columns = [
{
name: 'Name',
selector: row => row.name,
},
{
name: 'Type',
selector: row => row.type_vehicles,
},
{
name: 'City',
selector: row => row.city,
},
{
name: 'Action',
cell:(row)=>
<>
    <Button style={{margin:5}} w="100px" variant="outline-warning" id={row.vehicles_id}>Delete</Button>
    <Button w="100px" variant="warning" id={row.vehicles_id}>Update</Button>
</>


},
];

const data = result



const onChangeInput = (event) => {
    event.preventDefault()
    
    const tmpdata = { ...dataSave }
    tmpdata[event.target.name] = event.target.value
    setData(tmpdata)
    }
    
    const onChangeFile = (event) => {
        event.preventDefault()

        const file = event.target.files[0]
        if (file) {
            const tmpdata = { ...dataSave }
            tmpdata['image'] = file
            setData(tmpdata)
        }
    }


const postData = () => {
    const formData = new FormData()
  
    for (const key in dataSave) {
        
        formData.append(`${key}`, dataSave[key])
    }

    axios({
        method: 'POST',
        url: process.env.REACT_APP_URL+`vehicles/save`,
        headers: {     
             Authorization: `Bearer ${token}`,
             "Content-Type": "multipart/form-data",
             "Access-Control-Allow-Origin" : "http://localhost:3006" ,
            },
        data: formData
    })
    
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

useEffect(() => {
getData();
},[params])

return (
<>
    <Navbar />
    <Cointainer>
        <div style={{margin:20}}>

            <Button w="100px" variant="warning" onClick={handleShow}>Add Data</Button>
            <DataTable columns={columns} data={data} />
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="mb-3">
                            <input type="text" onChange={onChangeInput} name="name" autoComplete="off"  />
               
                        </div>
                        <div  className="mb-3">
                            <input type="text" onChange={onChangeInput} name="type_vehicles" autoComplete="off"  />

                        </div>
                        <div  className="mb-3">
                            <input type="text" onChange={onChangeInput} name="city" autoComplete="off"  />

                        </div>
                        <div  className="mb-3">
                            <input type="text" onChange={onChangeInput} name="capacity" autoComplete="off"  />

                        </div>
                        <div  className="mb-3">
                            <input type="text" onChange={onChangeInput} name="price" autoComplete="off"  />

                        </div>
                        <div  className="mb-3">
                            <input type="file" onChange={onChangeFile} name="image" autoComplete="off"  />
                        </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary"  onClick={postData}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

    </Cointainer>
</>
)
}




export default withAuth(Admin)