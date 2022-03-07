import React, { useState } from 'react'
import './FilterRecipe.css'
import Recipe from './Recipe';
import RecipeDetail from './RecipeDetail';

const FilterRecipe = ({ data }) => {
  // const [data, setData]=useState("")
  const [finditem,setitem]=useState(5)
  const schange=(id)=>{
    setitem(id);
  }

if (data.q){  
    return (
      <div className='recipe-page container-fluid d-flex align-items-center my-4'>
        <div className='recipe-list py-3 text-black'>
            {data.hits.map((items,key)=> <Recipe key={key} id={key} item={items.recipe} schange={schange}/>)}
        </div>
        <div className='recipe-review'>
          {<RecipeDetail itemDetail={data.hits[finditem].recipe}/>}
        </div>
      </div>
    )
}
  else
    return (<div className='no-recipe fs-2'> 
        {/* <div className='recipe-review'>
        </div>  */}
    </div>)
}

export default FilterRecipe