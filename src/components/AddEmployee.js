import { useState } from 'react';
import { DragSwitch } from 'react-dragswitch';
import 'react-dragswitch/dist/index.css';
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

function AddEmployee() {
    let history = useHistory();

    const { addEmployee, employees } = useContext(GlobalContext);
    const [empid, setEmpID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeDOB, setEmployeeDOB] = useState('');
    const [gender, setGender] = useState('male');
    const [salary, setSalary] = useState('');
    const [createdDate, setCreatedDate] = useState('');
    const [status, setStatus] = useState(false);

    const onChangeEmpID = (e) => { setEmpID(e.target.value) };
    const onChangeFirstName = (e) => { setFirstName(e.target.value) };
    const onChangeLastName = (e) => { setLastName(e.target.value) };
    const onChangeEmployeeDOB = (e) => { setEmployeeDOB(e.target.value) };
    const handleGender = (e) => { setGender(e.target.value) };
    const onChangeSalary = (e) => { setSalary(e.target.value) };
    const onChangeCreatedDate = (e) => { setCreatedDate(e.target.value) };
    const onChangeStatus = (e) => { setStatus(status ? 'false' : 'true') };


    function onAddEmployee(e) {
        e.preventDefault();
        if (empid === '' || firstName === '' || lastName === '' || employeeDOB === '' || gender === '' || salary === '' || createdDate === '') {
            console.log("please enter all the fields");
        }
        else {
            const newEmployee = {
                empid,
                firstName,
                lastName,
                employeeDOB,
                gender,
                salary,
                createdDate,
                status
            };
            addEmployee(newEmployee);
            history.push("/list");
        }
    }


    return (
        <div style={{ marginTop: 10, textAlign: 'center' }}>
            <h3>Add new Employees</h3>
            <form onSubmit={onAddEmployee}>
                <div className="form-group">
                    <label>Employee Id:</label>
                    <input type="text"
                        className="form-control"
                        value={empid}
                        onChange={onChangeEmpID}
                    />
                </div>
                <div className="form-group">
                    <label>Employee Firstname:</label>
                    <input type="text"
                        className="form-control"
                        value={firstName}
                        onChange={onChangeFirstName}
                    />
                </div>
                <div className="form-group">
                    <label>Employee Lastname:</label>
                    <input type="text"
                        className="form-control"
                        value={lastName}
                        onChange={onChangeLastName}
                    />
                </div>
                <div className="form-group">
                    <label>Employee DOB:</label>
                    <input type="date"
                        className="form-control"
                        value={employeeDOB}
                        onChange={onChangeEmployeeDOB}
                    />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <label>
                        <input
                            type="radio"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={handleGender}
                        />
            Male
          </label>

                    <label>
                        <input
                            type="radio"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={handleGender}
                        />
            Female
          </label>
                </div>

                <div className="form-group">
                    <label>Salary:</label>
                    <input type="text"
                        className="form-control"
                        value={salary}
                        onChange={onChangeSalary}
                    />
                </div>
                <div className="form-group">
                    <label>createdDate :</label>
                    <input type="date"
                        className="form-control"
                        value={createdDate}
                        onChange={onChangeCreatedDate}
                    />
                </div>
                <div className="form-group">
                    <label>Employee Status:</label>
                    <DragSwitch
                        checked={status}
                        onChange={onChangeStatus}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="AddEmployee" className="btn btn-primary" />
                </div>
                <div className="text-center mt-4 text-gray-500">
                    <Link to="/"><button>Cancel</button></Link>
                </div>
            </form>

        </div>
    );
}

export default AddEmployee;
