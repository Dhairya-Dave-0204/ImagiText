import React from 'react'
import { assets, stepsData } from '../../assets/assets'

function Steps() {
  return (
    <div className='flex flex-col items-center justify-center my-32'>
        <h1 className='mb-2 text-3xl font-semibold sm:text-4xl'>How it works</h1>
        <p className='mb-8 text-lg text-gray-600'>Transform words into stunning images</p>

        <div className='w-full max-w-3xl space-y-4 text-sm'>
            {stepsData.map((item,index) => (
                <div key={index} className='flex items-center gap-4 p-5 px-8 border shadow-md cursor-pointer rounded-lg bg-white/20 hover:scale-[1.02] transition-all duration-300'>
                    <img src={item.icon} alt="" width={40}/>
                    <div>
                        <h2 className='text-xl font-medium'>{item.title}</h2>
                        <p className='text-gray-500'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Steps