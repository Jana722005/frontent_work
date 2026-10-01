
const Student = () => {

    const studentName = "Arun"
    const Age = 22
    const course = "React JS"
    const IsActive = true
    const fees = 15000
  return (
    <>
     <h1 className="font-bold ml-140 mt-50 mb-10">Student Details:</h1>

    <div className="bg-blue-600 w-80 h-80 mx-140  flex justify-center items-center">
        <div className="bg-amber-50 flex flex-col w-50  justify-center p-4 rounded-2xl font-bold">
            <h1>Name : {studentName}</h1>
            <h1>Age : {Age}</h1>
            <h1>Course : {course}</h1>
            <h1>Status : {String(IsActive? "Active" : "")}</h1>
            <h1>Fees : {fees}</h1>
        </div>
    </div>
    </>
  )
}

export default Student