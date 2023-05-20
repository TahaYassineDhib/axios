import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const baseUrl = "https://jsonplaceholder.typicode.com/users" ; 

const UserList = () => {
    const [user , setUser] = useState(null);
    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setUser(response.data);
        })
    }, [])
    console.log(user) ; 
    




  return (
    <div className='container'>
        {user && user.map((item) => {
        return < Card user={item} key={item.id}/>
        } )}
    </div>
  )
}

export default UserList