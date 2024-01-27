import React from 'react'

const notFound = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-8 my-4'>
      <h1 className='md:text-[3em] text-[2em] text-black text-center font-bold'>Ops,parece que a página que voce está tentando acessar não existe.</h1>
      <img src='/MangaiPage/bgImgs/NotFound.svg' alt='Imagem de página não encontrada' className='w-64 md:w-1/2 h-auto'/>
    </div>
  )
}

export default notFound