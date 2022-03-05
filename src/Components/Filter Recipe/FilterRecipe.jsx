import React, { useState ,useEffect } from 'react'
import './FilterRecipe.css'
import Recipe from './Recipe';
import RecipeDetail from './RecipeDetail';
import axios from 'axios';

const FilterRecipe = ({ searchFor }) => {
  const [data, setData]=useState("")
  const [finditem,setitem]=useState(5)
  useEffect(() => {
    axios.get("http://localhost:3001/Data").then(res => setData(res.data))
    console.log(data);
  }, [searchFor])

  const schange=(id)=>{
    setitem(id);
  }

  // Api: Edamam Data
  // const app_id="ab7bdc20"
  // const app_key="b2948ec2b37144beec43cc17412db974"
  // let url=`https://api.edamam.com/search?q=${props.searchFor}&app_id=${app_id}&app_key=${app_key}`

  //   console.log(props);
  //   let daa=""
  //   if (props.searchFor)
  //       daa=`You Searched For ${props.searchFor}`

if (searchFor){  
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
    return (<div className='no-recipe'></div>)
}

export default FilterRecipe