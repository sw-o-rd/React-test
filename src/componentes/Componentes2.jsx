import React from 'react'

export default function () {
  return (
    <div><p>yo osy el componente uno del componeten 2 y funjo de contenedor</p>
        <Componentes3 />
    </div>
    
  )
}


export  function Componentes3() {
  return (
    <div>
        <table>
            <tbody>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Numero telefonico</th>
            </tbody>
            <tbody>
                <td>Alex</td>
                <td>Gonzalez</td>
                <td>809-xxx-xxx</td>
            </tbody>
            <tbody>
                <td>Fabio JR</td>
                <td>Marte</td>
                <td>829-xxx-xxx</td>
            </tbody>
        </table>
    </div>
  )
}
