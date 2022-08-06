import React, {useState} from "react";
import {Col, Form } from "react-bootstrap";
import AdminDashboard from "../components/adminDashboard/AdminDashboard";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminSubmit = (e) => {
    e.preventDefault()
    const passphraseInput = document.getElementById("admin-phrase-input").value
    if (passphraseInput === process.env.REACT_APP_ADMIN) {
      setIsAdmin(true)
    } else {
      alert("Invalid credentials, please try agin")
    }
  }
  
  console.log(process.env.REACT_APP_ADMIN)

  return (
    <div className="container">
      <h2>Welcome Back, Brad</h2>
      {isAdmin ? (
        <AdminDashboard />
      ) : (
        <div>
          <Form onSubmit={handleAdminSubmit}>
              <Form.Group as={Col} controlId="formGrid">
                <Form.Label>Enter you admin phrase here:</Form.Label>
                <Form.Control type="text" id="admin-phrase-input"/>
              </Form.Group>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Admin;
