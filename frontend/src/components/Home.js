import React, { useEffect, useState } from 'react'
import { BudgetCard } from './BudgetCard'
import {GetBudgets} from '../api/posts'
import {Sort} from './Sort'
import { AddBudget } from './AddBudget'
import {sortArray} from './SortingFunctions'

export const Home = () => {

    const [budgets, setBudgets] = useState([])
    const [sortedList, setList] = useState([])
    const [sortType, setSort] = useState({prop:'income', order:'asc'})
    

   
    useEffect(() => {
      FetchBudgets()}
      
    ,[])

    useEffect(() => {
        const sorted = sortArray(budgets, sortType);
        setList(sorted)
      }, [sortType]);
    
    const FetchBudgets = async() => {
         const data = await GetBudgets()
        setBudgets(data)
        setList(data)
        
       
    }
    console.log(budgets)

    return (
        <div>
        <AddBudget setBudgets={setBudgets}/>
        <div className="main">
        <Sort sortType={sortType} setSort={setSort} />
        
            {sortedList.map(budget => 
                <BudgetCard key={budget._id} setBudgets={setBudgets} user={budget} />)}
          
          
           
            
        </div>
        </div>

    )
}