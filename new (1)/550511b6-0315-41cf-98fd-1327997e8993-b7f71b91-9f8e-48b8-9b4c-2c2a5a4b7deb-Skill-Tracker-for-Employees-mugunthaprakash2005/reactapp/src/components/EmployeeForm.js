import React, { useState, useEffect } from 'react';

import { createEmployee, updateEmployee } from '../services/api';



function EmployeeForm({ onSuccess, selected, clearSelected }) {

const [name, setName] = useState('');

const [email, setEmail] = useState('');

const [department, setDepartment] = useState('');



useEffect(() => {

if (selected) {

setName(selected.name);

setEmail(selected.email);

setDepartment(selected.department);

} else {

setName('');

setEmail('');

setDepartment('');

}

}, [selected]);



const handleSubmit = async (e) => {

e.preventDefault();

const employeeData = { name, email, department };



if (selected && selected.id) {

await updateEmployee(selected.id, employeeData);

} else {

await createEmployee(employeeData);

}



onSuccess();

clearSelected();

};



return (

<form onSubmit={handleSubmit} className="app-form">

<div>

<label htmlFor="name-input">Name</label>

<input

id="name-input"

data-testid="name-input"

type="text"

className="input-field"

placeholder="Enter full name"

value={name}

onChange={(e) => setName(e.target.value)}

required

/>

</div>



<div>

<label htmlFor="email-input">Email</label>

<input

id="email-input"

data-testid="email-input"

type="email"

className="input-field"

placeholder="Enter email address"

value={email}

onChange={(e) => setEmail(e.target.value)}

required

/>

</div>



<div>

<label htmlFor="department-input">Department</label>

<input

id="department-input"

data-testid="department-input"

type="text"

className="input-field"

placeholder="Enter department"

value={department}

onChange={(e) => setDepartment(e.target.value)}

required

/>

</div>



<div className="form-buttons">

<button type="submit" data-testid="submit-button" className="submit-btn">

{selected ? 'Update Employee' : 'Add Employee'}

</button>


{selected && (

<button

type="button"

data-testid="cancel-button"

className="cancel-btn"

onClick={clearSelected}

        >

                        Cancel

                                    </button>

)}

</div>

</form>

);

}



export default EmployeeForm;



