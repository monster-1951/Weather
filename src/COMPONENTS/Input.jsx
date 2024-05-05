import React, { useEffect ,useRef} from 'react'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const Input = ({onSendData}) => {
    const [place, setplace] = useState("")
    const [info, setinfo] = useState("")
    const inpt = useRef()

    const getInfo = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place?place:`Hyderabad`}&appid=af79581f1e21215e6cd97abd6eddb8e6`)
      .then(response => response.json())
      .then(data => {
        setinfo(data);
      })
      .catch(error => {
        setinfo(error)
      })
    }
    
    const handleClick = () => {
      getInfo()
      onSendData(info);
      // console.log(info)
    }

    const keyDownHandler = (e) => {
      console.log(e.key);
      if (e.key === 'Enter') {
        handleClick();
      }
    }
     
    useEffect(() => {
      getInfo()
      inpt.current.addEventListener('keydown',keyDownHandler)
    },[handleClick])
    


    
    





  return (
    <div className="input-group input-group-sm mb-3 flex justify-center space-x-2">
    <input
      type="text"
      className="form-control rounded-lg p-2 px-3 w-2/3"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-sm"
      onChange={(e) => {
        setplace(e.target.value)
      }}
      value={place}
      ref={inpt}
    />
    <button onClick={handleClick} className='p-2 border-2 rounded-xl  bg-white h-12 w-12'><center><FaSearch/></center></button>
  </div>
  )
}

export default Input
