import React from 'react'
import {z} from 'zod'
import { zodResolver} from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { Restaurantes } from '../../../data/restaurantes'

const reservaForm = () => {
    const reservaSchema=z.object({
        unidade:z.string().min(1,'É preciso informar a unidade para a reserva').refine(val=>val!=='...','É preciso informar a unidade para a reserva.'),
        pessoas:z.string().min(1,'É preciso informar a quantidade de pessoas para a reserva.').refine(val=>val!=='...','É preciso informar a unidade para a reserva.'),
        data:z.string().min(1,'É preciso informar a data desejada para a reserva.'),
        horario:z.string().min(1,'É preciso informar o horario para reserva.').refine(val=>val!=='...','É preciso informar a unidade para a reserva.')
      })
      const {register,
        handleSubmit,
        formState:{errors}
        }=useForm({
        resolver:zodResolver(reservaSchema),
        
      })
    
      const pessoas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  return (
    <form className='w-1/2 flex flex-col px-1 md:px-32' onSubmit={handleSubmit()}>
            <label htmlFor='unidade'   className='mt-10' >Unidade:</label>
            <select className='md:w-max-content w-[80%] border border-gray-400 rounded-xl px-2' id='unidade '{...register('unidade')} >
              <option disabled selected>...</option>
              {Restaurantes.map((item, index) => (
                <option key={index}>{item.nome}</option>
              ))}
            </select>
            {errors.unidade && <span className='text-[#F00] text-[0.8em]'>{errors.unidade.message}</span>}
            <label htmlFor='pessoas' className='mt-10'>Quantidade de pessoas</label>
            <select className='md:w-max-content w-[80%] border border-gray-400 rounded-xl px-2' id='pessoas' {...register('pessoas')}>
              <option disabled selected>...</option>
              {pessoas.map((item, index) => (
                <option key={index}>
                  {item}{item === 1 ? ' pessoa' : ' pessoas'}
                </option>
              ))}
            </select>
            {errors.pessoas && <span className='text-[#F00] text-[0.8em]'>{errors.pessoas.message}</span>}
            <label htmlFor='data' className='mt-10'>Data da reserva</label>
            <input type='date' className='md:w-max-content w-[80%]  border border-gray-400 rounded-xl px-2' id='data'{...register('data')}/>
            {errors.data && <span className='text-[#F00] text-[0.8em]'>{errors.data.message}</span>}
            <label htmlFor='horario' className='mt-10'>Horário da reserva</label>
            <select className='md:w-max-content w-[80%]  border border-gray-400 rounded-xl px-2 text-xl' id='horario' {...register('horario')}>
              <option disabled selected>...</option>
              <option>18:00h</option>
              <option>19:00h</option>
              <option>20:00h</option>
              <option>21:00h</option>
              <option>22:00h</option>
            </select>
            {errors.horario && <span className='text-[#F00] text-[0.8em]'>{errors.horario.message}</span>}
            <button type='submit'
              className='flex items-center justify-center bg-brownT w-max-content rounded-xl text-white font-thin p-2 m-auto mt-8'>
              Confirmar reserva
            </button>
          </form>
  )
}

export default reservaForm