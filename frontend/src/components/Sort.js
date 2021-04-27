import React, { useState } from 'react'
import {GiReceiveMoney, GiPayMoney}  from 'react-icons/gi';
import {FaPercentage} from 'react-icons/fa'



export const Sort= ({setSort, sortType})=> {

 

  const SetSorting = (e) => {
    if(sortType === e.target.title){
      
      return;
    }
    setSort( {...sortType, prop: e.target.title})
  }

  const Set = (e) => {
    if(sortType.order === e.target.title){
      
      return;
    }
    setSort( {...sortType, order: e.target.title})
  }


  return(
    <div className="sort">
    <div className="sorting-container">
      <h3>Sort by</h3>
      <div className="row no-wrap">
        <div className="column">
        <h4>{sortType.prop}</h4>
    <div className="row">
      <div id="income" title="income" onClick={SetSorting} className="button"><GiReceiveMoney/></div>
      <div id="expenses" title="expenses" onClick={SetSorting} className="button"><GiPayMoney/></div>
      <div id="percentage" title="percentage" onClick={SetSorting} className="button"><FaPercentage/></div>
    </div>
        </div>
      
    <div className="row">
      <div onClick={Set} title="asc" className="button">Asc</div>
      <div onClick={Set} title="des" className="button">Des</div>
      
    </div>
    </div>
    </div>
    </div>
    
  )

 
    
}