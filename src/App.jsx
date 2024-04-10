import React, { useState } from 'react'
import Formulario from "./components/Formulario/Formulario"
import ImagemCardCosta from "./components/ImagemCardCosta"
import ImagemCardFrente from "./components/ImagemCardFrente"
import ImagemFundo from './components/ImagemFundo';
import Sucesso from './components/Sucesso';





export default function App() {

  const [formularioValorName, setFormularioValorName] = useState('Name Submane');
  const [formularioValorNumber, setFormularioValorNumber] = useState('0000 0000 0000 0000');
  const [formularioValorMounth, setFormularioValorMounth] = useState('00');
  const [formularioValorYear, setFormularioValorYear] = useState('00');
  const [formularioValorCVC, setFormularioValorCVC] = useState('000');

  const [mostrarSucesso, setMostrarSucesso] = useState(false);
  
  const subscribeSucesso = e => {
    setMostrarSucesso(!mostrarSucesso);
  };

  const retornarPagina = e => {
    setMostrarSucesso(!mostrarSucesso);
    setFormularioValorName('Name Submane')
    setFormularioValorNumber('0000 0000 0000 0000')
    setFormularioValorMounth('00')
    setFormularioValorYear('00')
    setFormularioValorCVC('000')
  };

  return (
    <div className="bg-white w-screen xl:h-screen flex items-center justify-center">
      <ImagemFundo/>
      <div className="flex justify-end items-center xl:ml-[12%] sm:flex-col xl:flex-row">
        <div className="z-10 basis-1/2 sm:pl-[12%] sm:mt-32 xl:mt-0 xl:pl-0">
          
          <ImagemCardFrente 
            formularioValorName={formularioValorName} 
            formularioValorNumber={formularioValorNumber} 
            formularioValorMounth={formularioValorMounth} 
            formularioValorYear={formularioValorYear}
          />

          <ImagemCardCosta 
            formularioValorCVC={formularioValorCVC}
          />
        </div>
        <div className="sm:basis-auto xl:basis-1/2 sm:mx-14 sm:mt-12">
          {!mostrarSucesso &&(
            <Formulario 
            formularioDadosName={setFormularioValorName} 
            formularioDadosNumber={setFormularioValorNumber} 
            formularioDadosMounth={setFormularioValorMounth} 
            formularioDadosYear={setFormularioValorYear}
            formularioDadosCVC={setFormularioValorCVC}
            subscribeSucesso={subscribeSucesso}
            
            />
          )}
          {mostrarSucesso && <Sucesso retornarPagina={retornarPagina}/>}
          
        </div>
      </div>
    </div>
  )
}

