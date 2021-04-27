import Table from 'react-bootstrap/Table'
import { DragSwitch } from 'react-dragswitch';
import 'react-dragswitch/dist/index.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
function ListEmployees() {
    const { employees } = useContext(GlobalContext);

    const updateStatus = () => {
        console.log("status");
    }
    return (
        <div style={{ marginTop: 10, textAlign: 'center' }}>
            <Link to="/add">
                <button>Add Employee</button>
            </Link>
            <label><h2 >List of Employees</h2></label>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>EmployeeId</th>
                        <th>Name</th>
                        <th>Date Of Birth</th>
                        <th>Gender</th>
                        <th>Salary</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length === 0 ? <tr><td>NO data found</td></tr> : employees.map((employee) => {
                        return (
                            <tr>
                                <td>{employee.empid}</td>
                                <td>{employee.firstName + employee.lastName}</td>
                                <td>{employee.employeeDOB}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.salary}</td>
                                <td><DragSwitch
                                    checked={employee.status}
                                    onChange={updateStatus}
                                /></td>
                                <td> <Link to={`/edit/${employee.empid}`}
                                    title="Edit Employee"><button>Edit</button>
                                </Link>
                                </td>
                            </tr>
                        );
                    })


                    }
                </tbody>
            </Table>
        </div>
    );
}


export default ListEmployees;