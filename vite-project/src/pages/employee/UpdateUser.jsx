import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateUser.css';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";




const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();



    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        });
    }

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/employee/${id}`);
                setFormData(response.data);

            }
            catch (error) {
                console.error("error fetching user:", error.message);
            }
        }
        fetchEmployee();

    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`http://localhost:8081/api/employee/${id}`, formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            alert("Employee updated successfully");
            navigate(`/`);
        } catch (error) {
            console.error("Error updating employee data:", error);
        }
    }


    return (
        <div className="centre-form">
            <h1>Edit Employee</h1>
            <Form onSubmit={handleSubmit} >
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleInputChange} />
                </Form.Group>


                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleInputChange} />
                </Form.Group>


                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Enter Number"
                        value={formData.phone}
                        onChange={handleInputChange} />
                </Form.Group>


                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="department"
                        placeholder="Enter department"
                        value={formData.department}
                        onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Edit Employee
                </Button>
            </Form>
        </div>
    )
}

export default UpdateUser