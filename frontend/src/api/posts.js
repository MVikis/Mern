const url = 'http://localhost:5000/budgets/';

export const GetBudgets = async() => {
return await fetch(url)
.then(res => res.json())

}

export const GetBudget = () => {
     fetch(url+':id')
    .then(res => res.json())
}
export const postBudget = async(Budget) => {
  const response = await fetch(`${url}add`, {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify(Budget)})
    
   return response.json()
}
export const DeleteBudget = async(id) => {
    const deleteMessage = await fetch(url + id,  {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    
    })
    return deleteMessage.status
    
}