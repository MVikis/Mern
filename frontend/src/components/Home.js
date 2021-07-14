import React, { useEffect, useState } from 'react'
import { BudgetCard } from './BudgetCard'
import {GetBudgets} from '../api/posts'
import {Sort} from './Sort'
import { AddBudget } from './AddBudget'
import {sortArray} from './SortingFunctions'
import {Modal} from './Modal'
import { Flipper, Flipped } from 'react-flip-toolkit'


export const Home = () => {

    const [budgets, setBudgets] = useState([])
    const [sortedList, setList] = useState()
    const [sortType, setSort] = useState({prop:'income', order:'asc'})
    

   
    useEffect(() => {
      FetchBudgets()}
      
    ,[])

   
    
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
        <Sort sortType={sortType} setSort={setSort} sortedList={sortedList} setList={setList}/>
        </Modal>
          </div>
          {sortedList&&(
            <Flipper className="row" flipKey={`${sortType.order}-${sortType.prop}`}>
            {sortedList.map(budget => 
             
                <BudgetCard setBudgets={setBudgets} user={budget} />
              )}
                </Flipper>
          )}
          
        </div>
        </div>

    )
}