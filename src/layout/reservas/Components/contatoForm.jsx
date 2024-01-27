import React from 'react'
import {z} from 'zod'
import { zodResolver} from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'

const contatoForm = () => {

    const contatoSchema=z.object({
        nome:z.string().min(1,'É preciso informar o nome para o contato'),
        telefone:z.string().min(1,'É preciso informar o telefone para o contato'),
        email:z.string().min(1,'É preciso informar o email para o contato').email('Tipo de email inválido').min(1,'É preciso informar o email para o contato')
      })



    const {register,
        handleSubmit,
        formState:{errors}
        }=useForm({
        resolver:zodResolver(contatoSchema)
    })

  return (
    <div className='flex flex-col h-max-content md:w-full  md:mx-32 '>
            <h1 className='md:text-[2em] text-[1em] w-32 md:w-full leading-6 md:leading-9'>Deseja reservar o ambiente <br /> para comemorações privativas?
            </h1>
            <h2 className='mt-4 w-32 md:w-max-content text-[0.8em] md:"text-[1em] leading-4' he>Deixe seus dados e entraremos em <br /> contato assim que possível.</h2>

            <form className='flex flex-col  md:w-3/5 h-full' onSubmit={handleSubmit()}>
              <label className='mt-5 w-32 md:w-full '>Nome
              <input type='text' className='border border-gray-400 rounded-xl px-2 w-full' {...register('nome')} />
              </label>
              {errors.nome && <span className='text-[#F00] text-[0.8em]'>{errors.nome.message}</span>}
              <label className='mt-5 w-32 md:w-full'>Telefone
              <input type='number' className='border border-gray-400 rounded-xl px-2 w-full' {...register('telefone')} />
              </label>
              {errors.telefone && <span className='text-[#F00] text-[0.8em]'>{errors.telefone.message}</span>}
              <label className='mt-5 w-32 md:w-full'>Email
              <input type='text' className='border border-gray-400 rounded-xl px-2 w-full' {...register('email')} />
              </label>
              {errors.email && <span className='text-[#F00] text-[0.8em]'>{errors.email.message}</span>}
              <div className='relative h-32'>
                <button type='submit'
                  className='flex items-center justify-center bg-brownT w-3/5 md:w-2/5 rounded-xl text-white font-thin p-2 right-0 absolute  mt-8 '>
                  Enviar
                </button>
              </div>

            </form>

          </div>
  )
}

export default contatoForm