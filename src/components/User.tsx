import React, { FC } from 'react';
import UserModel from '../types/models';

// interface Props {
//     name: string,
//     age: number,
//     addUser: () => void
// }

interface Props {
    user: UserModel;
    addUser: (user: UserModel) => void
}

const User: FC<Props> = ({ user, addUser }) => {

    return (
        <div>
            <div>
                <h2>Name: {user.name}</h2>
                <h4>Email: {user.email}</h4>
                <h4>Phone: {user.phone}</h4>
                <button onClick={() => addUser(user)}>Add Me</button>
            </div>
        </div>
    );
};

export default User;