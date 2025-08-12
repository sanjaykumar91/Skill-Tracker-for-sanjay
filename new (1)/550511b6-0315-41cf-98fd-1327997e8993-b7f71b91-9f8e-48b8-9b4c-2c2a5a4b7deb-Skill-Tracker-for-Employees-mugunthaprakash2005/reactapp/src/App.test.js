  import { render, screen } from '@testing-library/react';
  import "@testing-library/jest-dom"
  import App from './App';
  import Home from './components/Home';
  import Footer from './components/Footer';
  import EmployeeList from './components/EmployeeList';
  import EmployeeForm from './components/EmployeeForm';



  test('rendersHomeComponent', () => {
    render(<Home />);
    const heading = screen.getByText(/Welcome to the Employee Management System/i);
    expect(heading).toBeInTheDocument();
  });

  test('rendersFooterContent', () => {
    render(<Footer />);
    const footerText = screen.getByText(/Employee Manager/i);
    expect(footerText).toBeInTheDocument();
  });

  test('rendersEmployeeFormInputs', () => {
    render(<EmployeeForm onSuccess={() => {}} selected={null} clearSelected={() => {}} />);
    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Department/i)).toBeInTheDocument();
  });

  test('formSubmitButtonLabelAdd', () => {
    render(<EmployeeForm onSuccess={() => {}} selected={null} clearSelected={() => {}} />);
    expect(screen.getByText(/Add Employee/i)).toBeInTheDocument();
  });



  test('rendersFormWithEmptyFieldsInitially', () => {
    render(<EmployeeForm onSuccess={() => {}} selected={null} clearSelected={() => {}} />);
    expect(screen.getByPlaceholderText(/Name/i).value).toBe('');
  });

  test('rendersEmployeeListTitle', () => {
    render(<EmployeeList />);
    const heading = screen.getByText(/Employee List/i);
    expect(heading).toBeInTheDocument();
  });

  test('rendersEmployeeFormComponent', () => {
    render(<EmployeeList />);
    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
  });

  test('rendersAddButtonInitially', () => {
    render(<EmployeeForm onSuccess={() => {}} selected={null} clearSelected={() => {}} />);
    const addButton = screen.getByText(/Add Employee/i);
    expect(addButton).toBeInTheDocument();
  });

  test('rendersAppComponentWithoutCrashing', () => {
    render(<App />);
  });

  test('rendersHomeComponentWithoutCrash', () => {
    render(<Home />);
  });

  test('rendersFooterWithoutCrash', () => {
    render(<Footer />);
  });

  test('rendersFormUpdateButtonIfSelected', () => {
    const selected = { id: 1, name: 'John', email: 'john@example.com', department: 'HR' };
    render(<EmployeeForm onSuccess={() => {}} selected={selected} clearSelected={() => {}} />);
    const updateButton = screen.getByText(/Update Employee/i);
    expect(updateButton).toBeInTheDocument();
  });

  test('rendersAppNavLinks', () => {
    render(<App />);
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Employees')).toBeTruthy();
  });
