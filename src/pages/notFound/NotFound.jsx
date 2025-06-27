import React from 'react'

const NotFound = () => {
  return (
    <div className='text-center px-3'>
        <h1 className='text-[50px] font-semibold'>Not Found</h1>
        <p className='text-[36px] font-medium'>404</p>
    </div>
  )
}

export default React.memo(NotFound)
