
const App = () => {

  const lang = ["java","python","javascript","c++","c#"]
  const city = ["chennai","Mumbai","Delhi","Thoothukudi","Madurai"]
  const course = ["Full Stack","Mern Stack","java","python","CCNA"]


  const student = {name: "jana",age:21,course:"full Stack",city:"chennai"}
  const employee = {name:"jana",role:"developer",salary:25000,location:"chennai"}
  const product = {name:"mobile",price:100000,category:"Electronics",brand:"iPhone"}


  const studentarr = [
    {
      id:1,
      name:"jana",
      age:21,
      course:"full Stack"
    },
    {
      id:2,
      name:"Hari",
      age:22,
      course:"full Stack"
    },
    {
      id:3,
      name:"Abhi",
      age:24,
      course:"CCNA"
    },
    {
      id:4,
      name:"Manoj",
      age:21,
      course:"Python"
    }
  ]

  const productarr = [
    {
      id:1,
      name:"mobile",
      price:100000,
      category:"Electronics"
    },
    {
      id:2,
      name:"Laptop",
      price:100000,
      category:"Electronics"
    },
    {
      id:3,
      name:"Keyboard",
      price:1000,
      category:"Electronics"
    },
    {
      id:4,
      name:"Mouse",
      price:540,
      category:"Electronics"
    },
    {
      id:5,
      name:"Monitor",
      price:50000,
      category:"Electronics"
    }
  ]

  const employeearr = [
    {
      id:1,
      name:"jana",
      department:"IT",
      salary:25000,
    },
    {
      id:2,
      name:"Manoj",
      department: "Business Development",
      salary:20000
    },
    {
      id:3,
      name:"Hari",
      department:"Networking",
      salary:30000
    },
    {
      id:4,
      name:"Barath",
      department:"IT",
      salary:35000
    },
  ]

  return (
    <>
    
    <div className="mx-52 my-20">
      <div>
        <h1 className="bg-amber-600 text-black font-bold p-3 ">ARRAY RENDERING</h1>
        <h2 className="font-bold">Task 1</h2>
        <h3 className="font-bold">Programming language : </h3>
        {lang.map((i)=>(
          <ul className="list-disc mx-10">
            <li key={i+1}>{i}</li>
          </ul>
        ))}
      </div>

      <div>
        <h1 className="font-bold">Task 2</h1>
        <h2 className="font-bold">Cities : </h2>
        {city.map((i)=>(
          <ol className="list-disc mx-10">
            <li key={i+1}>{i}</li>
          </ol>
        ))}
      </div>

      <div>
        <h1 className="font-bold">Task 3</h1>
        <h2 className="font-bold">Available Courses : </h2>
        {course.map((i)=>(
          <div>
            <p className="flex justify-center items-center bg-blue-600 p-3 my-10 text-amber-50 font-bold w-50 h-50 rounded-md">{i}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mx-52 my-20">
      <div>
        <h1 className="bg-amber-600 text-black font-bold p-3 ">OBJECT RENDERING</h1>
        <h2 className="font-bold">Task 1</h2>
        <h3 className="font-bold">Student Details : </h3>
        <div className="bg-cyan-500 font-bold w-50 p-4 rounded-md">
          <p>Name : {student.name}</p>
          <p>Course : {student.course}</p>
          <p>Age : {student.age}</p>
          <p>City : {student.city}</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold">Task 2</h1>
        <h2 className="font-bold">Employee Deatails : </h2>
        <div className="bg-amber-400 font-bold w-50 p-4 rounded-md">
          <p>Name : {employee.name}</p>
          <p>Age : {employee.age}</p>
          <p>Role : {employee.role}</p>
          <p>Salary : {employee.salary}</p>
          <p>Location : {employee.location}</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold">Task 3</h1>
        <h1 className="font-bold">Product Details : </h1>
        <div className="bg-green-500 font-bold w-50 p-4 rounded-md">
          <p>Product Name : {product.name}</p>
          <p>Price : {product.price}</p>
          <p>Category : {product.category}</p>
          <p>Brand : {product.brand}</p>
        </div>
      </div>
    </div>

    <div className="mx-52 my-20">
      <div >
        <h1 className="bg-amber-600 text-black font-bold p-3 ">ARRAY OF OBJECTS RENDERING</h1>
        <h1 className="font-bold">Task 1</h1>
        <h2 className="font-bold">Student Details : </h2>
        {studentarr.map((e)=>(
          <div key={e.id} className="bg-indigo-700 text-amber-50 font-bold w-100 mx-10 p-4 ">
            <h3>Student {e.id}</h3>
            <p>Name : {e.name}</p>
            <p>Age : {e.age}</p>
            <p>Course : {e.course}</p>
          </div>
        ))}
      </div>

      <div>
        <h1 className="font-bold">Task 2</h1>
        <h2 className="font-bold">Product Details : </h2>
        {productarr.map((e)=>(
          <div key={e.id} className="bg-amber-400 text-blsck font-bold w-100 mx-10 p-4 ">
            <h3>Product id : {e.id}</h3>
            <p>Name : {e.name}</p>
            <p>Price : {e.price}</p>
            <p>Category : {e.category}</p>
          </div>
        ))}
      </div>

      <div>
        <h1 className="font-bold">Task 3</h1>
        <h2 className="font-bold">Employee Details : </h2>
        {employeearr.map((e,i)=>(
          <div key={e.id} className="bg-green-500 text-blsck font-bold w-100 mx-10 p-4 ">
            <p>Employee Id : {e.id}</p>
            <p>Name : {e.name}</p>
            <p>Department : {e.department}</p>
            <p>Salary : {e.salary}</p>
          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default App