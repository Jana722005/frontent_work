
const Employee = (props) => {

    console.log(props)

  return (
    <>
    
    <div className="employee">
        <p>Name : {props.datasent.name}</p>
        <p>Role : {props.datasent.role}</p>
        <p>Salary : {props.datasent.salary}</p>
        <p>City : {props.datasent.city}</p>
    </div>

    </>
  )
}

export default Employee