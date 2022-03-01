import React from 'react'
import H_Coder from '../../public/Assets/Images/H-Coder.png'

const Footer = () => {
  return (
      <footer>
          <div className='footer text-black text-center fs-4 p-2'>
           &copy; Copyright 2022 &nbsp;&nbsp;|&nbsp;&nbsp; <img src={H_Coder} width={"200"} alt='H-Coder' />
          </div>
      </footer>
  )
}

export default Footer
