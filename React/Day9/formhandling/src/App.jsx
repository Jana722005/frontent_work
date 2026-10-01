import { useState } from "react"

const App = () => {

  const [data,setData] = useState("")

  const showData = (e)=> {
  
    setData(e.target.value)
    console.log(data)
  }


  const [mail,setMail] = useState("")
  const [disData,setDisData] = useState("")



  const displayData = (e)=> {

    e.preventDefault()

    setDisData(mail)
    console.log(mail)
  }



  const [age,setAge] = useState("")
  const [showAge,setShowAge] = useState("")


  const displayAge = (e)=> {
    e.preventDefault()
    
    if(age === ""){
      setShowAge("Age is Required !")
    }
    else {
      setShowAge(age)
      setAge("")
    }
  }


  const [searchData,setSearchData] = useState("")

  console.log(searchData);
  
  return (
    <>
    <div>
      <h1>Task 1</h1>
      <h2>Name Input : </h2>
      <div>
        <div>
      <label htmlFor="">Name : </label>
      <input type="text" value={data} onChange={showData}/>
      <br />
      <br />
      <button onClick={showData}>Submit</button>
    </div>
    <div>
      <p>Name Submitted : {data}</p>
    </div>
      </div>
    </div>


    <div>
      <h1>Task 2</h1>
      <h2>Email Submit : </h2>
      <div>
        <form action="" onSubmit={displayData}>
          <label htmlFor="">Email : </label>
          <input type="text" value={mail} onChange={(e)=> setMail(e.target.value)}/><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>

      <p>Email Submitted : {disData}</p>
    </div>


    <div>
      <h1>Task 3</h1>
      <h2> Age Validation : </h2>
      <div>
        <form action=""  onSubmit={displayAge}>
          <label htmlFor="">Age : </label>
          <input type="number" value={age} onChange={(e)=> setAge(e.target.value)}/> <br /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      <p>Entered Age : {showAge}</p>
    </div>


    <div>
    <h1>Task 4</h1>
    <h2> Search Input : </h2>
      <div>
        <label htmlFor="">Search : </label>
        <input type="text" value={searchData} onChange={(e)=> setSearchData(e.target.value)}/>
      </div>
      <p>You are searching for: {searchData}</p>
    </div>
    </>
  )
}

export default App