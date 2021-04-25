import React, { useState, useEffect } from 'react'
import { IoIosAdd } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';
import {postBudget} from '../api/posts'

export const AddBudget = ({setBudgets}) => {

   
    const [width, setWidth] = useState(window.innerWidth)
    const [showForm, setShowForm] = useState(false)

    const breakpoint = 600;
    useEffect(() =>{
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    },[])
  

   const ToggleForm = () => {
       setShowForm(!showForm)
   }

    const WebContainer = () => {
        return(
            <div className="sidebar">
            <div>
            <h3 className="title">Add Budget</h3>
            <Form setBudgets={setBudgets}/>
        </div>
        </div>
        )
    } 

    const MobileContainer = () => {
        return(
            <div>
                {!showForm&&(
                 <div className="mobile-form-button button" onClick={ToggleForm}>
                 <IoIosAdd className="add"/>
                     </div>
                )}
       
            {showForm&&(
                <div className="mobile-form" >
                    <div className="times button" onClick={ToggleForm}>
                    <FaTimes />
                    </div>
                 
                 <h3 className="title">Add Budget</h3>
                 <Form setBudgets={setBudgets}/>
                 </div>
            )}
           
            </div>
           
        )
    }
    return(
     breakpoint<width? <WebContainer /> :<MobileContainer />
    )
}

const Form = ({setBudgets}) => {

    const [budget, setBudget] = useState({username:'',income:0,expenses:0, percentage: 0})
    const handleSumbit = async(e) => {
        e.preventDefault()
       const status = await postBudget(budget)
        if(status === 200){
            setBudget({...budget, percentage: (budget.expenses - budget.income) * 100 })
            console.log(budget)
            setBudgets(budgets => [...budgets,budget])
        }

    } 
    const onChangeUser = (event) => {
        setBudget({...budget,[event.target.name]: event.target.value})
    }

    const onChange = (event) => {
        setBudget({...budget,[event.target.name]: Number(event.target.value)})
    }
    return(
<form onSubmit={handleSumbit}>
                <div className="column flex-start">
                <label>Username</label>
                <input autoComplete="off" onChange={onChangeUser} name="username" required type="text" />
                </div>
                <div className="column flex-start">
                <label>Income</label>
                <input autoComplete="off" name="income" onChange={onChange} required />
                </div>
                <div className="column flex-start">
                <label>Expenses</label>
                <input autoComplete="off" name="expenses" onChange={onChange} required />
                </div>
                <button type="submit" className="button">
                   <IoIosAdd className="add"/>

                  
                </button>
            </form>
    )
}