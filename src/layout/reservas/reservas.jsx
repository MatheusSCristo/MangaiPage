import React from 'react'
import { Restaurantes } from '../../data/restaurantes'

const reservas = () => {
  const pessoas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-[6em]'>Reservas</h1>
      <div className='bg-transparent border border-brownT w-full mb-32 text-2xl  py-8  rounded-3xl  '>
        <div className='flex justify-between'>
          <form className='w-1/2 flex flex-col px-32'>
            <span className='mt-10'>Unidade:</span>
            <select className='w-max-content border border-gray-400 rounded-xl px-2' >
              <option disabled selected>...</option>
              {Restaurantes.map((item, index) => (
                <option key={index}>{item.nome}</option>
              ))}
            </select>
            <span className='mt-10'>Quantidade de pessoas</span>
            <select className='w-max-content border border-gray-400 rounded-xl px-2' >
              <option disabled selected>...</option>
              {pessoas.map((item, index) => (
                <option key={index}>
                  {item}{item === 1 ? ' pessoa' : ' pessoas'}
                </option>
              ))}
            </select>
            <span className='mt-10'>Data da reserva</span>
            <input type='date' className='w-max-content border border-gray-400 rounded-xl px-2' />
            <span className='mt-10'>Horário da reserva</span>
            <select type='date' className='w-max-content border border-gray-400 rounded-xl px-2'>
              <option disabled selected>...</option>
              <option>18:00h</option>
              <option>19:00h</option>
              <option>20:00h</option>
              <option>21:00h</option>
              <option>22:00h</option>
            </select>
            <button type='submit'
              className='flex items-center justify-center bg-brownT w-1/2 rounded-xl text-white font-thin p-2 m-auto mt-8'>
              Confirmar reserva
            </button>
          </form>
          <div className='flex flex-col h-full w-max-content px-16'>
            <h1 className='text-[2em]'>Deseja reservar o ambiente <br /> para comemorações privativas?
            </h1>
            <h2>Deixe seus dados e entraremos em <br /> contato assim que possível.</h2>

            <form className='flex flex-col w-1/2 '>
              <span className='mt-5'>Nome</span>
              <input type='text' className='border border-gray-400 rounded-xl px-2' />
              <span className='mt-5'>Telefone</span>
              <input type='text' className='border border-gray-400 rounded-xl px-2' />
              <span className='mt-5'>Email</span>
              <input type='text' className='border border-gray-400 rounded-xl px-2' />
              <div className='relative'>
                <button type='submit'
                  className='flex items-center justify-center bg-brownT w-2/5 rounded-xl text-white font-thin p-2 right-0 absolute  mt-8 '>
                  Enviar
                </button>
              </div>

            </form>

          </div>
        </div>



      </div>


    </div>
  )
}

export default reservas