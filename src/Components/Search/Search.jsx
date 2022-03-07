import React , {useEffect, useState} from 'react'
import './Search.css'
import FilterRecipe from '../Filter Recipe/FilterRecipe'
import axios from 'axios';

// Api: Edamam Data
const app_id="ab7bdc20"
const app_key="b2948ec2b37144beec43cc17412db974"
let url=`https://api.edamam.com/search?q=pizza&app_id=${app_id}&app_key=${app_key}`
// let url=`http://localhost:3001/Data`

function Search(){

    const [searchValue,setsearchValue]=useState("")
    const [searchmargin,setmargin]=useState("30vh auto")
    const [data, setData]=useState({"q":''})
    useEffect(()=>{
      console.log("rec",searchValue);
// Data: Fetching from local server
        // axios.get(url).then(res => setData(res.data))
        // console.log(data);

// Data: Fetching from API
        url=`https://api.edamam.com/search?q=${searchValue}&app_id=${app_id}&app_key=${app_key}`
        axios.get(url).then(res => setData(res.data))
        console.log(data);
        
        searchValue ? (setmargin("auto") , document.querySelector(".footer").style.position="unset") : (setmargin("30vh auto"), document.querySelector(".footer").style.position="fixed");
      },[searchValue])
    
    return (
      <div className='main'>
        <div className='container mt-4'>
          <div className='search text-center' style={{margin:searchmargin}}>
            <input type={"text"} id={"search-inp"} autoComplete={"off"} name={"q"}
              placeholder={"Search Your Recipe..."} onKeyPress={(event)=>event.key==="Enter" && setsearchValue(event.target.value)} />
            <button id={"search-btn"} onClick={(e)=> setsearchValue(e.target.parentElement.children[0].value)}> Search</button>
          </div>
        </div>
        {/* Calling: FilterRecipe Component */}
        <FilterRecipe data={data}/>
        </div>
    )
  
}


export default Search