import React from 'react'
import bgCardFrente from '../assets/bg-card-front.png'

export default function ImagemCardFrente({formularioValorName, formularioValorNumber, formularioValorMounth, formularioValorYear}) {
  return (
    <div className='xl:relative sm:z-10 xl:z-0 xl:top-0'>
      <img src={bgCardFrente} alt="Imagem Card Frente" className='sm:w-4/5  xl:w-auto'/>
      <div className='absolute bg-white xl:w-10 xl:h-10 xl:top-5 xl:left-6 rounded-full sm:w-8 sm:h-8 sm:top-36 sm:left-[4em]'></div>
      <div className='absolute border border-white xl:w-6 xl:h-6 xl:top-8 xl:left-20 rounded-full sm:w-3 sm:h-3 sm:left-28 sm:top-[9.5em]'></div>
      <h1 className='absolute xl:top-32 xl:left-6 text-white tracking-widest sm:top-[11.5em] sm:left-[4em] sm:text-lg	xl:text-3xl'>{formularioValorNumber}</h1>
      <h3 className='absolute xl:top-48 xl:left-6 text-white tracking-widest sm:top-64 sm:text-xs sm:left-[6em] uppercase'>{formularioValorName}</h3>
      <h3 className='absolute xl:top-48 xl:left-[30em] text-white tracking-widest sm:top-64 sm:right-24  sm:text-xs'>{formularioValorMounth} / {formularioValorYear}</h3>
    </div>
  )
}