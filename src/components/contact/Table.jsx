import axios from 'axios'
import React from 'react'
import EditModal from './EditModal'
const Table = ({ data, setData }) => {

  

    const handleDelete = (id) => {
        const newdledata = data.data.filter(ele => {
            return ele._id != id
        })
        console.log(newdledata, 'deleeee')
        const newdata = {
            _id: data._id,
            data: newdledata
        }

        axios.post(`/contact/addcontact`, newdata).then(res => {
            alert('Contact Deleted')
            setData(newdata)

        }).catch(e => console.log(e))


    }

    return (

        <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data && data.length != 0 && data.data ? data.data.map(ele => {

                    return <tr>
                        <td>
                            <p className="fw-normal mb-1">{ele.name}</p>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{ele.email}</p>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{ele.phone}</p>
                        </td>

                        <td>
                            <button type="button" className="btn p-0 mr-4 btn-link btn-sm btn-rounded" data-mdb-toggle="modal" data-mdb-target={"#exampleModal"+ele._id} >Edit</button> | 
                            <button type="button" onClick={() => handleDelete(ele._id)} className="btn p-0  btn-link text-red btn-sm btn-rounded">
                                Delete
                            </button>
                            <EditModal id={ele._id} data={ele} alldata={data} setData={setData}/>
                        </td>
                    </tr>


                }) :

                    <p className='text-center fw-bold'>No Contacts</p>
                }


            </tbody>
        </table>

    )
}

export default Table