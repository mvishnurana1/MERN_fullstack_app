import React from 'react'

import UsersList from '../components/UsersList'; 

const Users = () => {

    const Users = [
        {id: 'u1', 
        name:'Vishnu', 
        image: 'data:image/jpeg;base64,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', 
        places: 3 }]; 

    return <UsersList items={Users}  />
}

export default Users; 