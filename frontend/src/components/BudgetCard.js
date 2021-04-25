
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import React, {useEffect, useMemo} from 'react'
import { DeleteModal } from './DeleteModal'

const currency = 'kr'


export const BudgetCard = ({user}) => {
 
  const data = [
    { name: 'income', value: user.income },
    { name: 'expenses', value: user.expenses }
   
  ];
  const COLORS = ['#a3d2ca','#f05945'];

  
    return(
        <div className="card">
         <DeleteModal id={user._id}/>
            <div className="chart-container">
              <div className="chart">
              <div className="inside-chart">
              <div className="main-text">{user.percentage}%</div>
              <ResponsiveContainer>
              <PieChart>
        <Pie
          data={data}
          innerRadius={40}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >  {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
     
    </PieChart>
    </ResponsiveContainer>
              </div>
             
              </div>
            </div>
            <div className="row flex-start">
                <div  className="username">{user.username}</div>
                <div style={{backgroundColor:COLORS[0]}} className="economy-card">
                  {user.income}
                  <span>{currency}</span>
                  </div>
                <div style={{backgroundColor:COLORS[1]}} className="economy-card">
                  {user.expenses}
                  <span>{currency}</span>
                  </div>
                  

            </div>
        </div>
    )
}
