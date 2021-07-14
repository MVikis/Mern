import React, { useState } from 'react'
import {sortArray} from './SortingFunctions'


export const Sort = ({ sortType, setSort, sortedList, setList, toggle})=> {

  
 

  const SetSorting = (e) => {
    
    if(sortType.prop === e.target.value){
    
      return;
    }
    console.log(sortType)
    setSort({...sortType, prop: e.target.value})
    const sorted = sortArray(sortedList,sortType)
    setList(sorted)
    console.log(sortType)

    toggle()
  }

  const Set = (e) => {
   

    if(sortType.order === e.target.value){
    toggle()
      return;
    }
    setSort({...sortType, order: e.target.value})
    const sorted = sortArray(sortedList,sortType)
    setList(sorted)
    toggle()
  }

  return(
    <div className="sort">
      <h3>Sort by</h3>
      <div className="row no-wrap">
        <div className="column">
          
          <select value={sortType.prop} onChange={SetSorting}>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
          <option value="percentage">Percentage</option>
          </select>
        
        <select value={sortType.order} onChange={Set}>
          <option value="asc">Ascend</option>
          <option value="des">Descend</option>
          </select>
          
        </div>
       
    </div>
    </div>
    
    
  )

 
    
}