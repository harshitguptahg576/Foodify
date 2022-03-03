import React from 'react'

const FilterRecipe = (props) => {
    const app_id="ab7bdc20"
    const app_key="b2948ec2b37144beec43cc17412db974"
    let url=`https://api.edamam.com/search?q=${props.searchFor}&app_id=${app_id}&app_key=${app_key}`
    
    console.log(props);
    let daa=""
    if (props.searchFor)
        daa=`You Searched For ${props.searchFor}`
        

  return (
    <div className='bg-black text-center text-white m-5 fs-2'>{daa}
    <a href={url}>Visit Api</a>
    </div>
  )
}

export default FilterRecipe