import React, { useEffect, useState } from 'react'
import { BudgetCard } from './BudgetCard'
import {Sidebar} from './Sidebar'
import {GetBudgets} from '../api/posts'

export const Home = () => {

    const [budgets, setBudgets] = useState()

    useEffect(() => {
      FetchBudgets()}
    ,[])
    
    function FetchBudgets(){
         const data = Promise.resolve(GetBudgets())
        data.then( res => setBudgets(res))
        console.log(budgets)
    }

    return (
        <div>
        <Sidebar/>
        <div className="main">
            {budgets&&(
                budgets.map( budget =>
                    <BudgetCard key={budget._id} user={budget}/>
                )
            )}

        </div>
        </div>

    )
}