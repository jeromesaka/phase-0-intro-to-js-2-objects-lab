// Write your solution in this file!

let employee = { name: "Sam", streetAddress: "1234 address" };

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
	return { ...employee, [key]: value };
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
	employee[key] = value;
	return employee;
};

const deleteFromEmployeeByKey = (employee, key) => {
	let newObj = { ...employee };
	delete newObj[key];
	return newObj;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
	delete employee[key];
	return employee;
};
