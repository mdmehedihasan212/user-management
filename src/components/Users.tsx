import React from 'react';
import User from './User';

const Users = () => {
    const handleAddUser = (): void => {

    }

    return (
        <div>
            <h1>My User</h1>
            <User name="Md Mehedi" age={6} addUser={handleAddUser}></User>
        </div>
    );
};

export default Users;