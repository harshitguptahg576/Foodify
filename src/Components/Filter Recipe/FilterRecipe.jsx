import React from 'react'
import './FilterRecipe.css'
import axios from 'axios';

const FilterRecipe = ({ searchFor }) => {

  // Api: Edamam Data
  // const app_id="ab7bdc20"
  // const app_key="b2948ec2b37144beec43cc17412db974"
  // let url=`https://api.edamam.com/search?q=${props.searchFor}&app_id=${app_id}&app_key=${app_key}`

  //   console.log(props);
  //   let daa=""
  //   if (props.searchFor)
  //       daa=`You Searched For ${props.searchFor}`

  axios.get("http://localhost:3001/Data").then(res => {
    console.log(res.data)
    const recipeList = document.querySelector('.recipe-list')
    if (recipeList)
      for (let recipes of res.data.hits) {
        recipeList.innerHTML += `<div class='recipe-item d-flex justify-content-between align-items-center text-center py-4 px-3'>
      <img src="${recipes.recipe.image}" alt='recipe-img' class='recipe-img'></img>
      <div class='recipe-name'>
        <p class="name m-0">${recipes.recipe.label}</p>
        <p class="type m-0">${recipes.recipe.source}</p>
      </div>
    </div>`
      }
  })
  if (true)
    return (
      // <div className='bg-black text-center text-white m-5 fs-2'>{daa}
      // <a href={url}>Visit Api</a>
      // </div>
      <div className='recipe-page container-fluid d-flex align-items-center my-4'>
        <div className='recipe-list py-3 text-black'>

        </div>
        <div className='recipe-review'>
          <div className='detail-hero'>
            <img className='detail-img' src="https://www.edamam.com/web-img/94a/94aeb549b29ac92dced2ac55765f38f9" alt='detail img' />
            <h3 className='detail-name'><span style={{ border: "1px solid black", borderRadius: "15px", padding: "10px" }}>Pizza Frizza recipes</span></h3>
          </div>
          <div className='detail-serving d-flex justify-content-center'>
            <div className='detail-time py-3 px-4'>
              🕓 45 Minutes
            </div>
            <div className='detail-people py-3 px-4'>
              👥 1 Serving

            </div>
            <div className='change-people py-3 px-1'>
              <span className='add-people'>➕</span>
              <span className='sub-people'>➖ </span>
            </div>
          </div>
          <div className='detail-ingre d-flex align-items-center py-3'>
          <div className="w-100">
            <div className='ingre-title py-2'>Ingredients</div>
            <div className='ingredients'>
              <div className='ingredient'>🏷️dfsdf</div>
              <div className='ingredient'>🏷️afdsaf</div>
              <div className='ingredient'>🏷️asds</div>
              <div className='ingredient'>🏷️yjhj</div>
              <div className='ingredient'>🏷️yjhj</div>
              <div className='ingredient'>🏷️yjhj</div>
            </div>
          </div>
          </div> 
          <div className='detail-view text-center p-4'>
          <button id={"view-btn"}> 
          <a href="#">View Now</a>
          </button>
          
          </div>
        </div>
      </div>
    )
  else
    return (<div className='no-recipe'></div>)
}

export default FilterRecipe