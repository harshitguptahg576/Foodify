import React from 'react'
import H_Coder from '../../public/Assets/Images/H Logo.png'



const Header = () => {
const Recipe=document.querySelector(".recipe")
const Favorite=document.querySelector(".favorite")

// Recipe.addEventListener('click',()=>console.log("Recipe Added"))
// Favorite.addEventListener('click',()=>console.log("Your Favorites"))
  return (
    <nav className='header'>
      <div className='navbar justify-content-between'>
        <div className='logo d-flex align-items-center'>
          <img src={H_Coder} width={"50"} alt='H-Coder' /> 
          <span className='logo-text text-black px-3 fs-2'>F<span className='fs-5'>🍔🍕</span>dify</span>
        </div>
        <div className='menubar d-flex fs-4 p-2 text-center'>
          <div className='menu p-2 mx-2 recipe'>
            <span className='menu-icon px-2'>➕</span>
            <span className='menu-text px-1'>Add Recipe 📝</span>
          </div>
          <div className='menu p-2 mx-2 favorite'>
            <span className='menu-icon px-2'>🖤</span>
            <span className='menu-text px-1'>Favorites ✨</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

