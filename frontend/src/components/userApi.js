import react from 'react'

export const getUsers = () => {
return fetch('http://localhost:5000/users/')
.then(res => res.json())

}
export const getUser = () => {
    return fetch('http://localhost:5000/users/:id')
    .then(res => res.json())
}
export const postUser = (user) => {
    fetch('http://localhost:5000/users/add', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }}, user)
    .then(res => console.log(res.data));
}