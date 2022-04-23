import React from 'react'
const Card = () => {
  return (
    <>
       <body>
        <div className='contenedorPrincipal'>
            
            <div className="container mt-4">
                <div className="border m-4 postion-relative" height ='600px'>
                    <div className="card  position-absolute top-50 start-50 translate-middle rounded shadow" >
                        <img className="card-img-top img-fluid d-block mx-auto"  src="#" alt="Gif animado"/>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Nombre</h5>
                            <p className="card-text">Anthony Ernesto Lang Piñeiro</p>
                            <h5 className="card-title fw-bold">Edad</h5>
                            <p className="card-text">20 Años</p>
                            <h5 className="card-title fw-bold">Puesto</h5>
                            <p className="card-text">Ingeniero de Software</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </>
  )
}

export default Card
