import React, { useState, useEffect } from 'react'
import { IoIosAdd } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';
import {postBudget} from '../api/posts'

export const AddBudget = ({setBudgets, toggle}) => {

   
   
    const [showForm, setShowForm] = useState(false)

    

   

    return(
        <div>
            <h3 className="title">Add Budget</h3>
            <Form toggle={toggle} setBudgets={setBudgets}/>
        </div>
    )
}

const Form = ({toggle, setBudgets}) => {

    const [budget, setBudget] = useState({username:'',income:0,expenses:0, percentage: 0})

    const handleSumbit = async(e) => {
        e.preventDefault()
       const response = await postBudget(budget)
            setBudgets(budgets => [...budgets,response])
            toggle()
 
    } 
    const onChangeUser = (event) => {
        setBudget({...budget,[event.target.name]: event.target.value})
    }

    const onChange = (event) => {
        setBudget({...budget,[event.target.name]: Number(event.target.value)})
    }

    // const handleValidation = () => {
    //     budget.expenses < 1
    // }
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