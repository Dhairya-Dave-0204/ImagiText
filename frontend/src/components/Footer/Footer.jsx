import React from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets.logo} alt="" width={150}/>

        <p className='pl-4 text-sm text-gray-500 felx-1 max-sm:hidden'>All rights reserved. @ImagiText - 2024</p>

        <div className='flex gap-2.5'>
            <Link to="https://www.facebook.com/"><img  src={assets.facebook_icon} alt="" width={35}/> </Link>
            <Link to="https://x.com/home?lang=en"><img src={assets.twitter_icon} alt="" width={35}/> </Link>
            <Link to="https://www.instagram.com/"><img src={assets.instagram_icon} alt="" width={35}/> </Link>
        </div>
    </div>
  )
}

export default Footer