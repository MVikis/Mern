import react from 'react'

export const getBudgets = () => {
return fetch('http://localhost:5000/budgets/')
.then(res => res.json())

}
export const getBudget = () => {
    return fetch('http://localhost:5000/budget/:id')
    .then(res => res.json())
}
export const postBudget = (user) => {
    fetch('http://localhost:5000/budgets/add', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }}, user)
    .then(res => console.log(res.data));
}