import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import './App.css';

import EmployeeList from './components/EmployeeList';

import Footer from './components/Footer';



function App() {

const [selected, setSelected] = useState(null);



return (

<Router>

<header>

<h1>Employee Manager</h1>

<nav>

<Link to="/">Home</Link>

<Link to="/employees">Employees</Link>

</nav>

</header>


<main>

<Routes>

<Route path="/" element={<Home />} />

<Route

path="/employees"

element={

<EmployeeList
selected={selected}

setSelected={setSelected}

        />

}

/>

</Routes>

</main>
<Footer />
</Router>
);

}
export default App;