import axios from 'axios'
import React, { useState } from 'react'

const EditModal = ({id,data,alldata,setData}) => {
    const [name, setName] = useState(data.name)
    const [email, setEmail] = useState(data.email)
    const [phone, setPhone] = useState(data.phone)
    const onEdit  = (e)=>{
        e.preventDefault()
        const indexOfmatchingObject = alldata.data.findIndex(ele => {
            return ele._id == id
        })
        alldata.data[indexOfmatchingObject] = {
            name,email,phone
        }

        axios.post(`/contact/addcontact`, alldata).then(res => {
            alert('Contact Edited')
            setData(alldata)

        }).catch(e => console.log(e))

    }
    return (
        <div className="modal fade" id={"exampleModal"+id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Contact</h5>
                        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={onEdit}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    defaultValue={data.name}
                                    onChange={((e) => setName(e.target.value))}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    defaultValue={data.email}
                                    onChange={((e) => setEmail(e.target.value))}

                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Phone"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    minLength={10}
                                    defaultValue={data.phone}
                                    onChange={((e) => setPhone(e.target.value))}
                                />
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EditModal