import Employee from "./pages/Employee"
const App = () => {
  
  const arr = ["Full stack","Data Analyst","Gen AI","Cybersecurity","Business Dev"]

  const obj = {
    name : "jana",
    age : 21,
    course : "full stack",
    city : "chennai"
  }

  const arrofobj = [
    {
      id : 10,
      name : "laptop",
      price : 40000,
      category : "gadgets"
    },
    {
      id : 20,
      name : "mobile",
      price : 25000,
      category : "gadgets"
    },
    {
      id : 30,
      name : "mouse",
      price : 400,
      category : "gadgets"
    },
    {
      id : 40,
      name : "keyboard",
      price : 4000,
      category : "gadgets"
    }
  ]

  const employee = {
    name : "jana",
    role : "Developer",
    salary : 25000,
    city : "chennai"
  }

  return (
    <>
    <div>
      <h1>Task 1</h1>
      <h1>Courses :</h1>
      {arr.map((i)=>(
        <div key={i+1}>
          <p>{i}</p>
        </div>
      ))} 
    </div>

    <div>
      <h1>Task 2</h1>
      <h2>Student Details : </h2>
      <p>Name : {obj.name}</p>
      <p>Age : {obj.age}</p>
      <p>Course : {obj.course}</p>
      <p>City : {obj.city}</p>
    </div>

    <div>
      <h1>Task 3</h1>
      <h1>Product details</h1>
      {arrofobj.map((e,i)=>(
        <div className="p" key={e.id}>
          <p>Product : {e.name}</p>
          <p> Price : {e.price}</p>
          <p> Category : {e.category}</p>
        </div>
      ))}
    </div>

    <div>
      <h1>Task 4</h1>
      <h1>Employee Details</h1>
      <Employee datasent = {employee} />
    </div>
    </>
  )
}

export default App