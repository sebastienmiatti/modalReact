import React from 'react'
import './Modal.css'

export default function Modal(props) {
    return (
        <div className='Modal'
        style={{
            transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: props.visible ? '1' : '0'
            }}
        >
            <button onClick={props.cache}>X</button>
            <p>
                Lorem ipsum dolor chocoloatine mon pote tu connais ou pas c'est du lorem de béton aahahah qu'est-ce que tu crois ?
                Lorem ipsum dolor chocoloatine mon pote tu connais ou pas c'est du lorem de béton aahahah qu'est-ce que tu crois ?
            </p>
        </div>
    )
}
