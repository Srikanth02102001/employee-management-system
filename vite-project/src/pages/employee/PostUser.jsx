import { useState } from "react";
import "./PostUser.css";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8081/api/employee", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            setFormData({
                name: "",
                email: "",
                phone: "",
                department: ""
            })
            alert("Employee added successfully");
            navigate("/")
        } catch (error) {
            console.error("Error posting employee data:", error);
        }

    }
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        });
    }

    return (
        <>
            <div className="centre-form">
                <h1>Post New Employee</h1>
                <Form onSubmit={handleSubmit}>
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
                        post Employee
                    </Button>
                </Form>
            </div>
        </>
    )

}
export default PostUser