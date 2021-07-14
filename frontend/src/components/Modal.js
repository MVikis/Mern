import React, {useState, useEffect, Children} from "react"
import { IoIosAdd } from 'react-icons/io';
import {BiSortAZ} from 'react-icons/bi'

export const Modal = ({type, children}) => {

    const [showModal, setShow] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    const breakpoint = 600;
    useEffect(() =>{
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    },[])

    const ToggleForm = () => {
        setShow(!showModal)
    }
    const childrenContainer = React.Children.map(children, child => {
        return React.cloneElement(child, {
          toggle: ToggleForm
          
    })})

    const Button = () => {
        if(type === 'add'){
            return(
                <div className="mobile-form-button button" onClick={ToggleForm}>
                <IoIosAdd className="add"/>
                    </div>
            )
        } 
        if(type === 'sort'){
            return(
                <div className="mobile-form-button button" onClick={ToggleForm}>
                <BiSortAZ className="add"/>
                    </div>
            )
        }
    }

    const Mobile = () => {
        return(
            <>
            <Button/>
            
                <div style={showModal?{display:'flex'}:{display:'none'}} className="modal">
                <div className="modal-container">
                {childrenContainer}
                </div>
                </div>
                )
                </>
                )}
               

    const Web = () => {
        return childrenContainer
    }

    
    return(
     breakpoint<width? <Web /> :<Mobile />
    )
}