import React, { useEffect, useState } from 'react'
import { BudgetCard } from './BudgetCard'
import {Sidebar} from './Sidebar'
import {GetBudgets} from '../api/posts'
import {Sort} from './Sort'
import {Compare} from './Sort'
import { AddBudget } from './AddBudget'

export const Home = () => {

    const [budgets, setBudgets] = useState([])
    const [sortedList, setList] = useState()
    const [sortType, setSort] = useState('income')
    

    const sortArray = type => {
        
        const sorted = budgets.sort((a, b) => a[type] - b[type]);
        setList(sorted);
      };
    useEffect(() => {
      FetchBudgets()}
      
    ,[])

    useEffect(() => {
        sortArray(sortType);
      }, [sortType]);
    
    function FetchBudgets(){
         const data = Promise.resolve(GetBudgets())
        data.then( res => setBudgets(res))
        
       
    }

    return (
        <div>
        <AddBudget setBudgets={setBudgets}/>
        <div className="main">
        <Sort setSort={setSort} />
        {sortedList&&(
            sortedList.map(budget => 
                <BudgetCard user={budget} />))}
          
          
           
            
        </div>
        </div>

    )
}