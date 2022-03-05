import React from 'react'
import { StrictMode } from 'react/cjs/react.production.min'

const RecipeDetail = ({itemDetail}) => {
    const imgStyle={background:`url(${itemDetail.image}) no-repeat center center / cover`}
  return (
    <StrictMode>
        <div className='detail-hero d-flex justify-content-center align-items-center' style={imgStyle}>
            <img className='detail-img' src={itemDetail.image} alt='detail img' />
            <h3 className='detail-name'><span style={{ border: "1px solid black", borderRadius: "15px", padding: "10px" }}>{itemDetail.label}</span></h3>
          </div>
          <div className='detail-serving d-flex justify-content-center'>
            <div className='detail-time'>
              🕓 {itemDetail.totalTime} Minutes
            </div>
            <div className='detail-people'>
              👥 1 Serving
            </div>
            <div className='change-people'>
              <span className='add-people'>➕</span>
              <span className='sub-people'>➖ </span>
            </div>
            <br/>
            
          </div>
          <div className='detail-cal text-center p-2 text-white'>
              ♨️ {parseFloat(itemDetail.calories).toFixed(3)} Calories
            </div>
          <div className='detail-ingre d-flex align-items-center py-3'>
          <div className="w-100">
            <div className='ingre-title py-2'>Ingredients</div>
            <div className='ingredients'>
                {itemDetail.ingredients.map((ingre,key)=><div key={key} className='ingredient'>🏷️ {ingre.quantity!=0 ? `${parseFloat(ingre.quantity).toFixed(1)} ${ingre.measure} ${ingre.food}` : ingre.food}</div>)}
            </div>
          </div>
          </div> 
          <div className='detail-view text-center'>
          <button id={"view-btn"}> 
          <a href={itemDetail.url} target={"_blank"}>View Now</a>
          </button>
          
          </div> 
    </StrictMode>
  )
}

export default RecipeDetail