import React, { useContext } from 'react'
import { assets, plans } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

function BuyCredit() {

  const { user } = useContext(AppContext)

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='px-10 py-2 mb-6 border border-gray-400 rounded-full'>Our Plans</button>
      <h1 className='mb-6 text-3xl font-medium text-center sm:mb-10'>Choose the plan</h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item,index) => (
          <div key={index} className='px-8 py-12 text-gray-600 transition-all duration-500 bg-white border rounded-lg hover:scale-105 drop-shadow-sm'>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'><span className='text-3xl font-medium'>₹{item.price}</span> / {item.credits} credits</p>
            <button className='w-full py-2.5 min-w-52 mt-8 text-sm text-white bg-gray-800 rounded-md'>{user ? "Purchase" : "Get Started"}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit