import React from 'react'

const Saludo = (props) => {

    //console.log(props)

    return (
        <div >
            <h2>Saludos {props.person}.</h2>
        </div>
    )
}

export default Saludo
