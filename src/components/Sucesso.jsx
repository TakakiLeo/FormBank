import React from 'react'
import SucessoIcon from '../assets/icon-complete.svg'
import Button from './Button/Button'


export default function Sucesso({retornarPagina}) {
    return (
        <div className='flex flex-col xl:w-[560px] sm:w-full items-center justify-end text-center mr-[6em]'>
            <div className='w-[432px] pt-6'>
                <img src={SucessoIcon} alt="Icon Sucess " className='w-20 pb-10 mx-auto' />
                <h1 className='text-very-dark-violet font-bold text-2xl tracking-widest'>THANK YOU!</h1>
                <p className='text-dark-grayish-violet font-semibold pt-4'>We´ve  added your card details</p>
                <Button  onClick={retornarPagina}>
                    Continue
                </Button>
            </div>
            
        </div>
    )
}
