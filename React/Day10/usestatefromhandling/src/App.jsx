import { useState } from "react"

export const App = () => {

  const [data,setData] = useState({
    name:"",
    email:"",
    age:"",
    course:"",
    city:""
  })

  const update = (e)=> {
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const showdata = (e)=> {
    e.preventDefault()
    console.log(data);
  }


    // Store all form fields in one object
  const [employee, setEmployee] = useState({
    name: "",
    employeeId: "",
    department: "",
    role: "",
    salary: ""
  });

  const [submittedEmployee, setSubmittedEmployee] = useState(null);

  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setSubmittedEmployee(employee);

    setEmployee({
      name: "",
      employeeId: "",
      department: "",
      role: "",
      salary: ""
    });
  };
  return (
    <>
     <div>
      <div>
        <h1>Task 1</h1>
      </div>
      <form action="" onSubmit={showdata}>
        <label htmlFor="">Name : </label>
        <input type="text" name="name" value={data.name} onChange={update}/><br /><br />
        <label htmlFor="">Email : </label>
        <input type="email" name="email" value={data.email} onChange={update}/><br /><br />
        <label htmlFor="">Age : </label>
        <input type="number" name="age" value={data.age} onChange={update}/><br /><br />
        <label htmlFor="">Course : </label>
        <input type="text" name="course" value={data.course} onChange={update}/><br /><br />
        <label htmlFor="">City : </label>
        <input type="text" name="city" value={data.city} onChange={update}/><br /><br />
        <button type="submit">Submit</button>
      </form>
     </div>

     <div>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.age}</p>
      <p>{data.course}</p>
      <p>{data.city}</p>
     </div>

     <div>
      <h1>Task 2</h1>

      <form onSubmit={handleSubmit}>

        <label>Employee Name: </label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
        />

        <br /><br />

        <label>Employee ID: </label>
        <input
          type="text"
          name="employeeId"
          value={employee.employeeId}
          onChange={handleChange}
        />

        <br /><br />

        <label>Department: </label>
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
        />

        <br /><br />

        <label>Role: </label>
        <input
          type="text"
          name="role"
          value={employee.role}
          onChange={handleChange}
        />

        <br /><br />

        <label>Salary: </label>
        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>

      {submittedEmployee && (
        <div>

          <h2>Employee Details</h2>

          <p>Name: {submittedEmployee.name}</p>

          <p>Employee ID: {submittedEmployee.employeeId}</p>

          <p>Department: {submittedEmployee.department}</p>

          <p>Role: {submittedEmployee.role}</p>

          <p>Salary: {submittedEmployee.salary}</p>

        </div>
      )}
     </div>
    </>
  )
}

export default App
