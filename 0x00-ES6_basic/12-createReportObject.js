export default function createReportObject(employeesList) {
	return {
		allEmployees: {
			...emplyeesList,
		},
		getNumberOfDepartments(){
			return Object.keys(employeesList).length;
		},
	};
}
