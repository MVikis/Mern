
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import React, {useMemo} from 'react'

const currency = 'kr'

export const BudgetCard = ({user}) => {
  

  const data = [
    { name: 'income', value: user.income },
    { name: 'expenses', value: user.expenses },
    { name: 'rest', value: user.income - user.expenses },
  ];
  const COLORS = ['#a3d2ca', '#5eaaa8','#f05945'];

 
  
    return(
        <div className="card">
            <div className="chart-container">
              <div className="chart">
              <div className="inside-chart">
              <h4>{100 - Math.round(user.expenses * 100/user.income)}%</h4>
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
                <div style={{backgroundColor:COLORS[2]}} className="economy-card">
                  {user.expenses}
                  <span>{currency}</span>
                  </div>
                  

            </div>
        </div>
    )
}
