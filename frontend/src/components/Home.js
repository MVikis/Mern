import React, { useEffect, useState } from 'react'
import { BudgetCard } from './BudgetCard'
import {GetBudgets} from '../api/posts'
import {Sort} from './Sort'
import { AddBudget } from './AddBudget'
import {sortArray} from './SortingFunctions'
import {Modal} from './Modal'

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
      }, [sortType, budgets]);
    
    const FetchBudgets = async() => {
         const data = await GetBudgets()
        setBudgets(data)
        setList(data)
        
       
    }

    return (
        <div>
        <div className="main">
          <div className="sidebar">
            <Modal type="add">
            <AddBudget setBudgets={setBudgets}/>
            </Modal>
        <Modal type="sort">
        <Sort sortType={sortType} setSort={setSort} />
        </Modal>
        
          </div>
        
        
            {sortedList.map(budget => 
                <BudgetCard key={budget._id} setBudgets={setBudgets} user={budget} />)}
          
        </div>
        </div>

    )
}