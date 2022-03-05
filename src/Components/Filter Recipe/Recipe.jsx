import React from 'react'

const recipe = ({item,id,schange}) => {
    return (
        <div onClick={()=>schange(id)} className='recipe-item d-flex justify-content-between align-items-center text-center py-4 px-3'>
            <img src={item.image} alt='recipe-img' className='recipe-img'></img>
            <div className='recipe-name'>
                <p className="name m-0">{item.label}</p>
                <p className="type m-0">{item.source}</p>
            </div>
        </div>
    )
}

export default recipe