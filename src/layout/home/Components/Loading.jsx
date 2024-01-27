import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => {
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <ReactLoading type={'spin'} color={'black'} height={50} width={50} className='w-auto h-auto' />
        </div>
    )
}

export default Loading