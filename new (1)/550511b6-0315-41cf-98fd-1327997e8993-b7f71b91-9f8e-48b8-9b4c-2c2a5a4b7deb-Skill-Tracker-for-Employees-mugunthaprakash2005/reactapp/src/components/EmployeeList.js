import React, { useEffect, useState } from 'react';

import { getEmployees, deleteEmployee } from '../services/api';

import EmployeeForm from './EmployeeForm';



function EmployeeList({ selected = null, setSelected = () => {} }) {

const [employees, setEmployees] = useState([]);



const loadEmployees = async () => {

try {

const data = await getEmployees();

setEmployees(data || []);

} catch {

setEmployees([]); // Prevent crash if backend is off

}

};



useEffect(() => {

loadEmployees();

}, []);



const handleDelete = async (id) => {

await deleteEmployee(id);

loadEmployees();

};



return (

<div className="employee-list-container">

<h2>Employee List</h2>



<EmployeeForm
onSuccess={loadEmployees}

selected={selected}

clearSelected={() => setSelected(null)}

/>



<ul className="employee-list">

{employees.map((emp) => (

<li key={emp.id} className="employee-item">

<div className="employee-info">

<span>{emp.name}</span> - <span>{emp.email}</span> - <span>{emp.department}</span>

</div>



<div className="employee-actions">

<button

className="edit-btn"

onClick={() => setSelected(emp)}

>

Edit

</button>
<button

className="delete-btn"

onClick={() => handleDelete(emp.id)}

>

Delete

</button>

</div>

</li>

))}

</ul>

</div>

);

}



export default EmployeeList;