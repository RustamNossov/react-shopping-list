import React from "react";

import './Modal.css'

function Modal (props) {

    const {closeModal, modalText, onDeleteSelectedItems} = props;

    
    return (
        <div className="modal" onClick={(e)=>closeModal(e)}>
            <div className="modal__container">
                <h3>{modalText}</h3>
                <div className="modal__buttons" style={modalText === 'An item with this name already exist' ? {"justifyContent": "center"} : null}>
                    {modalText === 'An item with this name already exist' ? null : <button className="modal__ok button" onClick={()=>onDeleteSelectedItems()}>Ok</button>}
                    <button className="modal__cancel button" >Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;