import React, {useState} from "react";
import {Col, Form, Row } from "react-bootstrap";
import AdminDashboard from "../components/admindashboard/AdminDashboard";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="container card bg-light mt-0 h-100 shadow-lg page-container">
      {isAdmin ? (
        <AdminDashboard />
      ) : (
        <Form>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Ash Ketchum" />
            </Form.Group>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      )}
    </div>
  );
};

export default Admin;
