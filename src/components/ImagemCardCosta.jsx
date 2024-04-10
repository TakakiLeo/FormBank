import React from 'react'
import bgCardCosta from '../assets/bg-card-back.png'

export default function ImagemCardCosta({formularioValorCVC}) {
  return (
    <div className='sm:absolute sm:top-0 xl:relative sm:flex  sm:justify-center'>
      <img src={bgCardCosta} alt="Imagem Card Costa" className='sm:z-[-1] sm:w-4/5 sm:mt-8 xl:mt-10 xl:ml-36 xl:w-auto'/>
      <h3 className='absolute sm:right-[5.5em] sm:bottom-[5.2em] sm:text-sm xl:text-xl xl:bottom-[5.5em] xl:right-[4em] text-white tracking-widest '>{formularioValorCVC}</h3>
    </div>
  )
}
