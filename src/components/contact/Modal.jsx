import axios from 'axios'
import React, { useState } from 'react'

const Modal = ({ id,data, NameEmailPhone, setData }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const handlesubmit = (e) => {
    e.preventDefault()
    const newdata = {
      _id: id,
      data: [...NameEmailPhone, { name, email, phone }]
    }
    axios.post(`/contact/addcontact`, newdata).then(res => {
      alert('Contact Added')
      setName('')
      setEmail('')
      setPhone('')
      setData(newdata)

    }).catch(e => console.log(e))


  }

  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add Contact</h5>
            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handlesubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={name}
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
                  value={email}
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
                  value={phone}
                  onChange={((e) => setPhone(e.target.value))}
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Modal