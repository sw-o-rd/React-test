import React,{useState} from 'react'

export default function RegistroNombre() {
    const [nombre,setNombre] = useState(``);

    const nombreOnChange = (e) =>{
            setNombre(e.target.value)
        };

    function recibir(nombre) {
        if (nombre.length > 5) {
            let aprobado = `su nombre es valido`;
            return aprobado;
        }
        else{
            let noAprobado = `su nombre es invalido`;
            return noAprobado;
        }
    }   
  return (
    <div>
        <input type='text' value={nombre} onChange={nombreOnChange}></input>
        <div>{recibir(nombre)}</div>
    </div>
  )
}
