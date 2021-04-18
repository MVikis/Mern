import React, { useState } from 'react'
import {AiFillDelete}  from 'react-icons/ai';
import {DeleteBudget} from '../api/posts'

export const DeleteModal = (id) => {

    const [showModal, setShow] = useState(false)

    const ToggleForm = () => {
        setShow(!showModal)
    }

    const CallApi = () => {
        DeleteBudget(id.id)
    }

    return(
        <>
        <div id="delete" className="button" onClick={ToggleForm}><AiFillDelete/></div>
        {showModal&&(
             <div className="modal">
                 <div className="modal-container">
                 <div className="title">Are you sure?</div>
                 <div className="row">
                     <div onClick={CallApi} className="button">Yes</div>
                     <div onClick={ToggleForm} className="button">No</div>
             </div>
                 </div></div>
        )}
       
       </>
    )
}