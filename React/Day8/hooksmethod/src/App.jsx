import { useState } from "react"

const App = () => {

  const [data,setData] = useState(0)

  const increment = ()=> {

    setData(data+1)
  }

  const decrement = ()=> {

    setData(data-1)
  }

  const reset = ()=> {

    setData(0)
  }

  const [text,setText] = useState("Hello React")

  const changeText = ()=> {

    setText("Welcome to React")
  }

  const [showData,setShowData] = useState(true)

  const changeData = ()=> {

    setShowData(!showData)
  }

  return (
  <>
  
  <div className="ml-20">
    <h1 className="mt-10 font-bold">Task 1 :</h1>
    <h1 className="bg-amber-400 text-black font-bold p-3 mt-10 w-100">Counter :</h1>
    <div className="bg-blue-700 w-50 mt-10 h-30 p-5 rounded-md">
      <p className="bg-amber-50 w-20 rounded-2xl text-center">{data}</p>
      <button className="bg-gray-100 rounded-2xl font-medium p-1 mt-5 mr-2" onClick={increment}>ADD</button>
      <button className="bg-gray-100 rounded-2xl font-medium p-1 mt-5 mr-2" onClick={decrement}>SUB</button>
      <button className="bg-gray-100 rounded-2xl font-medium p-1 mt-5 mr-2" onClick={reset}>RESET</button>
    </div>
  </div>

  <div className="ml-20">
    <h1 className="mt-10 font-bold">Task 2 : </h1>
    <h2 className="bg-amber-400 text-black font-bold p-3 mt-10 w-100">Text Change : </h2>
    <div className="bg-red-400 font-bold w-50 mt-10 h-30 p-5 rounded-md">
      <h4>{text}</h4>
      <button className="bg-black text-amber-50 rounded-2xl font-medium p-1 mt-5 mr-2" onClick={changeText}>Change txt</button>
    </div>
  </div>

  <div className="ml-20">
    <h1  className="mt-10 font-bold">Task 3 : </h1>
    <h2 className="bg-amber-400 text-black font-bold p-3 mt-10 w-100">Hide and Show : </h2>
    <div className="bg-emerald-300 font-bold w-50 mt-10 h-30 p-5 rounded-md">
      <p>{showData && "This is React"}</p>
      <button className="bg-black text-amber-50 rounded-2xl font-medium w-20 p-1 mt-5 mr-2"  onClick={changeData}>{showData?"Hide":"Show"}</button>
    </div>
  </div>

  </>
  )
}

export default App