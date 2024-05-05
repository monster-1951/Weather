import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './COMPONENTS/Card'
import Input from './COMPONENTS/Input'

function App() {
 
  const [data,setData] = useState("");

  const handleSentData = (dataFromInput) => {
    setData(dataFromInput)
    // console.log(data);
  }
  
  

  return (
    <>
    <Input onSendData = {handleSentData}></Input>
    <Card WeatherInfo={data}></Card>
    </>
  )
}

export default App
