import React, { ChangeEvent, FormEvent, useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

    interface User {
        name: string,
        age: number
    }

    const handleCount = (): void => {
        setCounter(counter + 1)
    }

    const handleToSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const users = {
            name: 'mohammad',
            age: 55
        }
        setUser(users)
    }

    const handleInput = (e: ChangeEvent<HTMLFormElement>) => {

    }

    return (
        <div>
            <h1>This is Counter</h1>
            <h3>{counter}</h3>
            <button onClick={handleCount}>Increase</button>
        </div>
    );
};

export default Counter;