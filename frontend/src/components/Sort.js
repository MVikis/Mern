import React, { useState } from 'react'
import {GiReceiveMoney, GiPayMoney}  from 'react-icons/gi';
import {FaPercentage} from 'react-icons/fa'



export const Sort= ({setSort})=> {

 

  const SetSorting = (e) => {
   console.log(e.target.title)
    setSort(e.target.title)
  }


  return(
    <div className="sort">
    <div className="sorting-container">
      <h3>Sort by</h3>
    <div className="row">
      <div id="income" title="income" onClick={SetSorting} className="button"><GiReceiveMoney/></div>
      <div id="expenses" title="expenses" onClick={SetSorting} className="button"><GiPayMoney/></div>
      <div id="percentage" title="percentage" onClick={SetSorting} className="button"><FaPercentage/></div>
    </div>
    </div>
    </div>
    
  )

 
    
}