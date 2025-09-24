import React,{useState} from 'react'
import icons from "./symbols/iconos";

export default function Datos () {
const [puntuacion,SetPuntuacion] = useState(76);
const [frase, setFrase] = useState(`Great`);
const [comentarios, SetComentarios] = useState(`conozco 30 personas duras y tu no eres ninguna de ellas, de hecho, eso es hasta sorprendente.`);

  return (
    <div className='contenedor'>
        <div className='resultados'>
          <h1 className='resultado'>Your result</h1>
          <div className='puntuacion'>
          <h2 className='puntuacion-h1'>{puntuacion}</h2>
          <p className="puntuacion-p">of 100</p>
          </div>
          <h2 className='frase'>{frase}</h2>
          <p className='comentarios'>{comentarios}</p>
        </div>

        <div className='resumen'>
        <h2 className='summary'>Summary</h2>
        <div className='stats-container'>
        <Stats nombre={`Reaction`} value={`93`} color={`red`} icono={icons.light} />
        <Stats nombre={`Memory`} value={`75`} color={`yellow`} icono={icons.brain} />
        <Stats nombre={`Verbal`} value={`100`} color={`green`} icono={icons.verbal}/>
        <Stats nombre={`Visual`} value={`35`} color={`blue`} icono={icons.view}/>
        </div>
        <Boton texto={`Continue`} />
        </div>
    </div>
  )
}



export function Stats({nombre,value,color, icono}) {
  const [Nombre,setNombre] = useState(nombre);
  const [Value,setValue] = useState(value);
  const [Color,setColor] = useState(color);


  return (
      <div className={`${color} stats-p`}>
        <p className='stats-nombre'><img className='iconos' src={icono}></img>{nombre}</p>
        <p className='stats-value'>{value}<p className='stats-value2'>/100</p></p>
    </div>
  )
}

function Boton ({texto}) {

  return(
    <>
    <button className='btn'>{texto}</button>
    </>
  )
}