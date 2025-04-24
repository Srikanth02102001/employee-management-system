import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Table from 'react-bootstrap/esm/Table';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const [employee, setEmployee] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get("http://localhost:8081/api/employees");
                setEmployee(response.data);
            } catch (error) {
                console.error("Error fetching employee data:", error);

            }
        }
        fetchEmployees();
    }, []);

    const handleDelete = async (employeeId) => {
        try {
            const response = await axios.delete(`http://localhost:8081/api/employee/${employeeId}`, {
                method: "DELETE",
            });
            console.log("Employee deleted successfully:", response.data);

            if(response.status === 200) {
                setEmployee((prevEmployees) => prevEmployees.filter(emp => emp.id !== employeeId));

        } 
     } catch (error) {
            console.error("Error deleting employee:", error);
        }
    }

    const handleUpdate = (employeeId) => {
        navigate(`/employee/${employeeId}`);
    }

    return (
        <>
           <Container className="mt-5">
  <Row>
    <Col>
      <h1 className="text-center">Employees List</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            {/* Add header for update/delete buttons */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.department}</td>
              <td>
                <button className="btn btn-secondary me-2" onClick={() => handleUpdate(emp.id)}>Update</button>
                <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  </Row>
</Container>

        </>
    )
}
export default Dashboard;