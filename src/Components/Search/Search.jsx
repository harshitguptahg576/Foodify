import React , {useState} from 'react'
import './Search.css'
import FilterRecipe from '../Filter Recipe/FilterRecipe'

const Search = () => {
    
    const [recipe,setRecipe]= useState("")
    const searchRecipe= ()=>{
        const searchValue=document.getElementById("search-inp");
        if (searchValue.value){
            searchValue.parentNode.style.margin="auto"
            setRecipe(searchValue.value)
            searchValue.value=""
        }   
    }
    console.log(recipe)
  return (
    <div className='container mt-5'>
        <div className='search text-center'>
        <input type={"text"} id={"search-inp"} autoComplete={"off"} name={"q"}
     placeholder={"Search Your Recipe..."}/>
    <button id={"search-btn"} onClick={()=>searchRecipe()}>🔍 Search</button>
        </div>
        <FilterRecipe searchFor={recipe}/>
    </div>
  )
}

export default Search