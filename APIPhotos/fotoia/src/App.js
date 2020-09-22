// cSpell:Ignore obtem
import React, { useState, useEffect } from 'react'
import './App.css'
import {ReactComponent as Robot} from  '../src/images/robot.svg'
import Carregando from '../src/images/carregando.gif'

function App(){
  
  const [carregando , setCarregando] = useState(false)
  const [pessoas, setPessoas] = useState([])

  useEffect(() => {
    document.title = 'Foto por IA'
  },[])

  async function obtemFoto(){
    setCarregando(true)
    let url = `https://api.generated.photos/api/v1/faces?api_key=${process.env.REACT_APP_API_KEY}&order_by=random`
    await fetch(url)
    .then(response => response.json())
    .then(data => {

      const uri = data.faces
      uri &&  setPessoas(data.faces)
    })
    .catch(function (error) {
      console.error(error.message)
    })
    setCarregando(false)
  }
  return(


    <div className="div1">
      <h1>Gerador de fotos com IA</h1>
      {pessoas.length > 0
      ? <p>Tem imagens para exibir!</p>
      :<Robot />
      }

      { carregando &&
      <img src={Carregando} title="Aguarde" alt="Aguarde os dados" />
      }
      <button type="button" onClick={obtemFoto}>
        Obter Imagens
      </button>
    </div>
  )

}
export default App