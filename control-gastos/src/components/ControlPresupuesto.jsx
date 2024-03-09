import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
    const cantidad = (cantidadP) => {
       return cantidadP.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        });
    }
    
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div><p>Grafica aquik</p></div>

        <div className='contenido-presupuesto'>
            <p><span>Presupuesto:</span>  C{cantidad(presupuesto)} </p>
            <p><span>Disponible:</span>  C{cantidad(0)} </p>
            <p><span>Gastado:</span>  C{cantidad(0)} </p>
        </div>
        
    </div>
  )
}

export default ControlPresupuesto