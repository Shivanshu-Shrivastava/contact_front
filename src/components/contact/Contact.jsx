import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import Table from './Table';
import Modal from './Modal';
const Contact = () => {
    const [data, setData] = useState([])
    const location = useLocation();

    useEffect(() => {
        axios.get(`/contact/${location.state._id}`).then(res => setData(res.data)).catch(e => console.log(e))
    }, [])

    useEffect(() => {
        axios.get(`/contact/${location.state._id}`).then(res => setData(res.data)).catch(e => console.log(e))
    }, [data])
    return (
        <div className='container card mt-5'>
            <div className='card-body'>
                <button type="button" className="btn btn-primary d-block ml-auto" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                    Add Contact
                </button>
                <Modal id={location.state._id} setData={setData} data={data} NameEmailPhone={data?data.data:[]}/>
                <div className='card-header'><h1>Contacts</h1></div>

                <Table setData={setData} data={data} />

            </div>
        </div>
    )
}

export default Contact