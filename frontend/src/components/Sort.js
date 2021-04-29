import React, { useState } from 'react'

export const Sort = ({setSort, sortType, toggle})=> {

 

  const SetSorting = (e) => {
    if(sortType === e.target.value){
      
      return;
    }
    setSort( {...sortType, prop: e.target.value})
    toggle()
  }

  const Set = (e) => {
    if(sortType.order === e.target.value){
      
      return;
    }
    setSort({...sortType, order: e.target.value})
    toggle()
  }


  return(
    <div className="sort">
      <h3>Sort by</h3>
      <div className="row no-wrap">
        <div className="column">
          <select onChange={SetSorting}>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
          <option value="percentage">Percentage</option>
          </select>
        
        <select onChange={Set}>
          <option value="asc">Ascend</option>
          <option value="des">Descend</option>
          </select>
        </div>
       
    </div>
    </div>
    
    
  )

 
    
}