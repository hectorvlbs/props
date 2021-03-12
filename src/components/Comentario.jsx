import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Comentario = (props) => {
    return (
        <div className="media">
            <img className="mr-2" src={props.img} alt=""/>
                <div className="media-body">
                    <h5 className="mt-0">{props.person}</h5>
                     {props.text}
        </div>
</div>
    )
}

export default Comentario
