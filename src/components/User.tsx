import React, { FC } from 'react';

interface user {
    name: string,
    age: number,
    addUser: () => void
}

const User: FC<user> = ({ name, age, addUser }) => {

    return (
        <div>
            <h1>Mr: {name} with {age} month experience in Web Development Site.</h1>
            <button onClick={addUser}>Add Me</button>
        </div>
    );
};

export default User;