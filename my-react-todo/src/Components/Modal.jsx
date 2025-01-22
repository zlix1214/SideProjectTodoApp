import React,{useState} from "react";

function Modal(props){
    return(
        <div className="modal-overlay">
            <div className="modal">
                <p>{props.message}</p>
                <button onClick={props.onClose}>確認</button>
            </div>
        </div>
    );
};

export default Modal;