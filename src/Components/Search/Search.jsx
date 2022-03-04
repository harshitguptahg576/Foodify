import React , {useEffect, useState} from 'react'
import './Search.css'
import FilterRecipe from '../Filter Recipe/FilterRecipe'

function Search(){

    const [searchValue,setsearchValue]=useState("")
    useEffect(()=>{
      console.log("rec",searchValue);
    },[searchValue])
    const changeMargin=(search)=>{
      search.style.margin="auto"
      return true
    }
    return (
      <div className='main'>
        <div className='container mt-4'>
          <div className='search text-center'>
            <input type={"text"} id={"search-inp"} autoComplete={"off"} name={"q"}
              placeholder={"Search Your Recipe..."} onKeyPress={(event)=>event.key==="Enter" && event.target.value &&changeMargin(event.target.parentElement) && setsearchValue(event.target.value)} />
            <button id={"search-btn"} onClick={(e)=>e.target.parentElement.children[0].value && changeMargin(e.target.parentElement) && setsearchValue(e.target.parentElement.children[0].value)}> Search</button>
          </div>
        </div>
        {/* Calling: FilterRecipe Component */}
        <FilterRecipe searchFor={searchValue}/>
        </div>
    )
  
}


export default Search