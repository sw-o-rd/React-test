import React, {useState} from 'react'

export default function Componente() {
  const [text,setText] = useState();
  const [update,setUpdate] = useState();

const textOnChange = (event) => {
  setText(event.target.value)
};

const butonOnclick= (event) => {
  setUpdate(text)
 };




  return (
    <div>
      <input type='text' value={text} onChange={textOnChange}></input>
      <button onClick={butonOnclick}>actualizar</button>
      <p>texto input: {text}</p>
      <p>texto actualizado:{update}</p>
      <p>{butonOnclick.name}</p>
    </div>
  )
}
