import React from 'react'
import { useForm} from "react-hook-form"


import Button from '../Button/Button'
import FormularioData from './FormularioSecurity/FormularioData'
import FormularioCVC from './FormularioSecurity/FormularioCVC'
import FormularioName from './FormularioItem/FormularioName'
import FormularioNumber from './FormularioItem/FormularioNumber'


export default function Formulario({ formularioDadosName, formularioDadosNumber, formularioDadosMounth, formularioDadosYear, formularioDadosCVC, subscribeSucesso, retornarPagina}) {
  
  const { 
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  return (
    <form className='flex flex-col xl:w-2/3 sm:w-full' onSubmit={handleSubmit(subscribeSucesso)}>

      <ul className='grid gap-y-6'>
        <FormularioName formularioDadosName={formularioDadosName} label="CARDHOLDER NAME" register={register} required errors={errors}/>
        <FormularioNumber formularioDadosNumber={formularioDadosNumber} label="CARD NUMBER" register={register} required  errors={errors}/>
      </ul>

      <div className='grid grid-cols-6 gap-4 pt-6'>
        <div className='col-span-3'>
          <FormularioData formularioDadosMounth={formularioDadosMounth} formularioDadosYear={formularioDadosYear} label="EXP. DATE (MM/YY)" register={register} required  errors={errors} />
        </div>
        <div className='col-span-3'>
          <FormularioCVC formularioDadosCVC={formularioDadosCVC} label="CVC" register={register} required  errors={errors}/>
        </div>
      </div>
      <Button>
        Confirm
      </Button>
    </form>
  )
}
