import React, { useEffect, useState } from 'react';
import UserModel from '../types/models';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([]);
    const [team, setTeam] = useState<UserModel[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleAddUser = (user: UserModel): void => {
        const newTeam = [...team, user]
        setTeam(newTeam)
    }

    return (
        <div>
            {/* <User name="Md Mehedi" age={6} addUser={handleAddUser}></User> */}
            <h3>Team size: {team.length}</h3>
            {
                users.map(user => <User user={user} addUser={handleAddUser}></User>)
            }
        </div>
    );
};

export default Users;