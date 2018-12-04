import React from 'react'
import logic from '../../logic'
import './Saved.css'

function Saved(props) {
    return <div className="saved-container">
        <div className="saved-name">{props.name} </div>
        <div className="saved-date">{logic.getDate(props.date)}</div>
        <div className="saved-delete-icon">
            <a onClick={() => props.deleteSaved(props.id)}><i className="fas fa-times"></i></a>
        </div>
    </div>
}

export default Saved