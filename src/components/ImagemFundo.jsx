import React from 'react'
import imagemFundo from '../assets/bg-main-desktop.png'
import imagemFundoMobile from '../assets/bg-main-mobile.png'

export default function ImagemFundo() {
  return (
    <>
      <div className="xl:block sm:hidden">
        <img src={imagemFundo} alt="Imagem Fundo" className='absolute h-screen top-0 left-0 w-1/3' />
      </div>
      <div className="xl:hidden sm:block">
        <img src={imagemFundoMobile} alt="Imagem Fundo mobile" className='absolute top-0 left-0 w-full' />
      </div>
    </>
    
  )
}
