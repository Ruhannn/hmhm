import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
    const users = useLoaderData();
    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
    }
    
    return (
        <div>
            <h2>our users:{users.length}</h2>
            <div style={style}>
                {
                  users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;