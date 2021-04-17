const url = 'http://localhost:5000/budgets/';

export const getBudgets = async() => {
return await fetch(url)
.then(res => res.json())

}

export const getBudget = () => {
     fetch(url+':id')
    .then(res => res.json())
}
export const postBudget = async(Budget) => {
   await fetch(`${url}add`, {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify(Budget)})
    .then(res => console.log(res.data));
}