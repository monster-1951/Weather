import React, { useEffect } from 'react'
import { useState } from 'react'
// import Search from './Search';
import { FaSearch } from "react-icons/fa";
const Card = ({WeatherInfo}) => {
    const [Data, setData] = useState(""); 
    
    useEffect(() => {
    //  console.log(WeatherInfo);
    setData(WeatherInfo)
     console.log(Data)
    })
    
    
  return (
    <center>
        <div className='bg-[url("../images/5.png")] bg-cover bg-center h-80 rounded-xl text-white flex p-5'>
            <div className='w-1/2'> 
              <h1 className='text-7xl w-96 text-black'>{Data? ((Data.main.temp-273.15).toPrecision(4)):0}&deg;C</h1> <br />
              <p className='text-3xl text-black'>{Data && Data.weather.description}</p>
              <div className='flex justify-between text-gray-950 h-32 p-5 w-96 font-semibold text-2xl'>
                <div className='border-r-2 w-1/2 flex flex-col align-middle border-black '>
                  <p>Humidity </p>
                  <br />
                  <p>{Data ? Data.main.humidity : 0}</p>
                </div>
                <div className='w-1/2 flex flex-col align-middle'>
                  <p>Wind</p>
                  <br />
                  <p>{Data ? Data.wind.speed:0} km/hr</p>
                </div>
              </div>
            </div>
            <div className='w-1/2'><center className='border-b-4 mx-0 text-3xl font-bold'>{Data ? Data.name:"Location"}</center></div>
        </div>
    </center>
  )
}

export default Card
