// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://8080-cebaceedeefccbeafecbaaebebfbfebbccaabdeb.premiumproject.examly.io/api/employees';
// Get all employees
export async function getEmployees() {
    try {
    const res = await axios.get(BASE_URL);
    return res.data;
    } catch (error) {
        console.error("Error fetching employees:", error);
        return [];
    }
}
// Create new employee
export async function createEmployee(employee) {
    try {
        const res = await axios.post(BASE_URL, employee, {
            headers: { 'Content-Type': 'application/json' }
        });
        return res.data;
    } catch (error) {
        console.error("Error creating employee:", error);
        throw error;
        }
    }
   // Update existing employee
            export async function updateEmployee(id, employee) {
                try {
                    const res = await axios.put(`${BASE_URL}/${id}`, employee, {
                        headers: { 'Content-Type': 'application/json' }
                        });
                        return res.data;
                    } catch (error) {
                        console.error(`Error updating employee with id ${id}:`, error);
                        throw error;
                    }
                }
                // Delete employee
                export async function deleteEmployee(id) {
                    try {
                        await axios.delete(`${BASE_URL}/${id}`);
                    } catch (error) {
                        console.error(`Error deleting employee with id ${id}:`, error);
                        throw error;
                    }
                    }