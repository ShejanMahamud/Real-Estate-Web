import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
        <img src="404.gif" alt="404.gif" className='w-96'/>
        <span className='text-3xl font-bold'>Sorry! Unable to load data...</span>
    </div>
  )
}

export default NotFound