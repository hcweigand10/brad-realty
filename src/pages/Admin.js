import React from "react";
import {Col, Form } from "react-bootstrap";
import AdminDashboard from "../components/adminDashboard/AdminDashboard";

const Admin = ({loginInfo, handleInputChange, logMeIn, loggedIn}) => {
  

  return (
    <div className="container mt-5">
      <h2>Welcome back, Brad</h2>
      {loggedIn ? (
        <AdminDashboard />
      ) : (
        <div>
          <Form onSubmit={logMeIn}>
              <Form.Group as={Col} controlId="formGrid">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" controlid="admin-email-input" value={loginInfo.email} onChange={handleInputChange} name="email"/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" controlid="admin-password-input" value={loginInfo.password} onChange={handleInputChange} name="password"/>
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
