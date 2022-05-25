import React from 'react';
import { useState } from 'react';
import './App.css';
import  Image  from './image/weather-icon.png';
const api ={
  key :"8637a68a72e0461a7615ac82c89bfdc8",
  base:"http://api.openweathermap.org/data/2.5/"
}

function App() {
const[query,setQuery]=useState("")
const[wether,setWether]=useState({})

const search =see=>{
if(see.key=="Enter"){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(res=>res.json())
  .then(result=>{ setWether(result)
  setQuery(" ");
  console.log(result)
  });
}
}





const dateBuilder =(d)=>{
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 let day=days[d.getDay()]
 let data=d.getDate()
 let month=months[d.getMonth()]
 let year=d.getFullYear()
 return `${day} , ${data}  ${month}  ${year}`
}

  return (
    <div className={(typeof wether.main != "undefined")?((wether.main.temp>16)?"App warm":"App"):"App"}>
      <main>
        <div className='header' >
        <img src={Image} width="150" /> 
        <h1>Welcome to weather App </h1>
        <h2>please write city name and press Enter</h2>
        </div>
<div className='search-box'>
  <input onChange={e=>setQuery(e.target.value)}
  value={query}
  onKeyPress={search}

   type="text" 
  className='search-bar'
  placeholder='....Search'></input>
</div>
{ (typeof wether.main != "undefined")?(
<div>

<div className='location-box' >
  <div className='location' > {wether.name} ,{wether.sys.country} </div>
  <div className='date' > {dateBuilder(new Date())}</div>
</div>
<div className='weather-box'>
<div className='temp'>{Math.round(wether.main.temp)}°C </div>
<div className='weather'> {wether.weather[0].main}</div>

</div>
</div>
):("")}
      </main>
        
    </div>
  );
}

export default App;