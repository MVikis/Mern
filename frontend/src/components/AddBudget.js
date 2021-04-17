import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io';
import {postBudget} from '../api/posts'

export const AddBudget = () => {

    const [budget, setBudget] = useState({username:'',income:0,expenses:0})

    const handleSumbit = (e) => {
        e.preventDefault()
        console.log(budget)
        postBudget(budget)
        

    } 
    const onChangeUser = (event) => {
        setBudget({...budget,[event.target.name]: event.target.value})
    }

    const onChange = (event) => {
        setBudget({...budget,[event.target.name]: Number(event.target.value)})
    }
    return(
        <div>
            <h3 className="title">Add Budget</h3>
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
        </div>
    )
}