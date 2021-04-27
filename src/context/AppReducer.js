export default function appReducer(state, action) {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return {
                ...state,
                employees: [...state.employees, action.payload],
            };

        case "EDIT_EMPLOYEE":
            const updatedEmployee = action.payload;

            const updatedEmployees = state.employees.map((employee) => {
                if (employee.empid === updatedEmployee.empid) {
                    return updatedEmployee;
                }
                return employee;
            });

            return {
                ...state,
                employees: updatedEmployees,
            };


        default:
            return state;
    }
};