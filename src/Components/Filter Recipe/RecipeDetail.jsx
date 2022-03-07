import React, { StrictMode, useState } from 'react'

const RecipeDetail = ({itemDetail}) => {
    const imgStyle={background:`url(${itemDetail.image}) no-repeat center center / cover`}
    const [people,setPeople] = useState(1)
  return (
    <StrictMode>
        <div className='detail-hero d-flex justify-content-center align-items-center' style={imgStyle}>
            <div className="fav-icon" onClick={e=>e.target.className.includes("favorite") ? e.target.classList.remove("favorite") : e.target.classList.add("favorite")}>🖤</div>
            <img className='detail-img' src={itemDetail.image} alt='detail img' />
            <h3 className='detail-name'><span style={{ border: "1px solid black", borderRadius: "15px", padding: "10px" }}>{itemDetail.label}</span></h3>
          </div>
          <div className='detail-serving d-flex justify-content-center'>
            <div className='detail-time'>
              <p>🕓 {itemDetail.totalTime ? itemDetail.totalTime : 10} Minutes</p>
            </div>
            <div className='detail-people'>
            <p>👥 {people} Serving</p>
            </div>
            <div className='change-people'>
              <span className='add-people' onClick={()=>people<10 && setPeople(p=>p+1)}>➕</span>
              <span className='sub-people' onClick={()=>people>1 && setPeople(p=>p-1)}>➖ </span>
            </div>
            <br/>
            
          </div>
          <div className='detail-cal text-center p-2 text-white'>
          <p>♨️ {parseFloat(itemDetail.calories*people).toFixed(3)} Calories</p>
            </div>
          <div className='detail-ingre d-flex py-3'>
          <div className="w-100">
            <div className='ingre-title py-2'><p>Ingredients</p></div>
            <div className='ingredients'>
                {itemDetail.ingredients.map((ingre,key)=><div key={key} className='ingredient'><p>🏷️ {ingre.quantity!==0 ? `${parseFloat(ingre.quantity*people).toFixed(1)} ${ingre.measure} ${ingre.food}` : ingre.food}</p></div>)}
            </div>
          </div>
          </div> 
          <div className='detail-view text-center'>
          <a href={itemDetail.url} target={"_blank"}>
          <button id={"view-btn"}> View Now </button>
          </a>
          </div> 
    </StrictMode>
  )
}

export default RecipeDetail