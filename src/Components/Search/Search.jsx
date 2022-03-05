import React , {useEffect, useState} from 'react'
import './Search.css'
import FilterRecipe from '../Filter Recipe/FilterRecipe'

function Search(){

    const [searchValue,setsearchValue]=useState("")
    const [searchmargin,setmargin]=useState("30vh auto")
    useEffect(()=>{
      console.log("rec",searchValue);
      searchValue ? (setmargin("auto"), document.querySelector(".footer").style.position="unset") : (setmargin("30vh auto"), document.querySelector(".footer").style.position="fixed");
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
        <FilterRecipe searchFor={searchValue}/>
        </div>
    )
  
}


export default Search