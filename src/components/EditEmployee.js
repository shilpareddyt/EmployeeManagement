import { useState } from 'react';
import { DragSwitch } from 'react-dragswitch';
import 'react-dragswitch/dist/index.css';
import { Link, useParams, useHistory } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState';
import { useContext, useEffect } from 'react';
function EditEmployee(route) {

  const { employees, editEmployee } = useContext(GlobalContext);
  const history = useHistory();

  const [selectedEmp, setSelectedEmp] = useState();
  let parameters = useParams();
  const currentEmpId = parameters.id;

  useEffect(() => {
    const employeeId = currentEmpId;
    const selectedEmployee = employees.find(
      (employee) => employee.empid === employeeId
    );
    setSelectedEmp(selectedEmployee);
  }, [currentEmpId, employees]);

  const onSubmit = (e) => {
    e.preventDefault();
    editEmployee(selectedEmp);
    history.push("/list");
  };

  const handleOnChange = (userKey, newValue) =>
    setSelectedEmp({ ...selectedEmp, [userKey]: newValue });

  if (!selectedEmp || !selectedEmp.empid) {
    return <div>Invalid Employee ID.</div>;
  }

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Update Employee</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Employee Firstname:</label>
          <input type="text"
            className="form-control"
            value={selectedEmp.firstName}
            onChange={(e) => handleOnChange("firstName", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Employee Lastname:</label>
          <input type="text"
            className="form-control"
            value={selectedEmp.lastName}
            onChange={(e) => handleOnChange("lastName", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Employee DOB:</label>
          <input type="date"
            className="form-control"
            value={selectedEmp.employeeDOB}
            onChange={(e) => handleOnChange("employeeDOB", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <label>
            <input
              type="radio"
              value="Male"
              checked={selectedEmp.gender === "Male"}
              onChange={(e) => handleOnChange("gender", e.target.value)}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              value="Female"
              checked={selectedEmp.gender === "Female"}
              onChange={(e) => handleOnChange("gender", e.target.value)}
            />
            Female
          </label>
        </div>

        <div className="form-group">
          <label>Salary:</label>
          <input type="text"
            className="form-control"
            value={selectedEmp.salary}
            maxLength={9}
            pattern="[+-]?\d+(?:[.,]\d+)?"
            onChange={(e) => handleOnChange("salary", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>createdDate :</label>
          <input type="date"
            className="form-control"
            value={selectedEmp.createdDate}
            onChange={(e) => handleOnChange("createdDate", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Employee Status:</label>
          <DragSwitch
            checked={selectedEmp.status}
            onChange={(e) => handleOnChange("status", selectedEmp.status ? 'false' : 'true')}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="EditEmployee" className="btn btn-primary" />
        </div>
        <div className="text-center mt-4 text-gray-500">
          <Link to="/list"><button>Cancel</button></Link>
        </div>
      </form>

    </div>
  );
}

export default EditEmployee;
