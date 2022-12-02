import { useState } from "react";
import Header from "./components/Header";


function App() {

  const [cantidad, setCantidad] = useState(10000);

  function handleChange(e) {
    setCantidad(cantidad + Number(e.target.value))
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      
      <Header />

      <input
        type="range"
        name=""
        id=""
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min="0"
        max="2000"
        step="500"
        />

    <p className="text-center my-10 text-5xl font-extrabold text-indigo-500">{cantidad}</p>

    </div>
  )
}

export default App
