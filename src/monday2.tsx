import React, {useState} from 'react';
import './App.css';

export const App = () => {

    return (
        <div>test</div>
    )
}
export default App
//
// Вопрос:
//
//     Какой тип правильнее указать вместо "any" при типизации стэйта?
//
//     copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const results = useState<any>(["Bob", "Alex", "Ann"])
//     const users = results[0]
//     const setUsers = results[1]
//
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// // Какой тип правильнее указать вместо "any" при типизации стэйта?
//
// Ответ:
//
// Вопрос:
//
//     Что вернёт выражение: typeof useState?
//
//     copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     return (
//         <p>Тут будет список пользователей!</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList />, document.getElementById('root')
// );
//
// // Что вернёт выражение: typeof useState?
//
// Ответ:
// typeof useState()
// Вопрос:
//
//     Чему равно results.length?
//
//     copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     const users = results[0]
//     const setUsers = results[1]
//
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// // Чему равно results.length?
//
// Ответ:
//
//     Вопрос:
//
//         Что вернёт выражение: Array.isArray(users)?
//
//     copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что вернёт выражение: Array.isArray(users)?
//
//
//
// Ответ:
//
//     Вопрос:
//
//         Что вернёт выражение: typeof setUsers?
//
// //     copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    return (
        <p>Тут будет список пользователей</p>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что вернёт выражение: typeof setUsers?

Что надо вставить вместо XXX, чтобы код заработал?

    copy
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const getUser = (user: string) => <li>{user}</li>
    const usersList = users.map(XXX)

    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {usersList}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что надо вставить вместо XXX, чтобы код заработал?
Вопрос:

    Что вернёт выражение: Array.isArray(usersList)?

    copy
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const getUser = (user: string) => <li>{user}</li>
    const usersList = users.map(getUser)

    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {usersList}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что вернёт выражение: Array.isArray(usersList)?

Ответ:

    Что вернёт выражение: typeof getUser?

    copy
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const getUser = (user: string) => <li>{user}</li>

    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {users.map(getUser)}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что вернёт выражение: typeof getUser?
Вопрос:

    Что надо написать вместо XXX, чтобы код работал?

    copy
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type UserType = {
    id: number
    name: string
    age: number
}

function User(props: UserType) {
    return (
        <li>User {props.name}: {props.age} y.o.</li>
    )
}

function UsersList() {
    const state = [
        {id: 1, name: "Bob", age: 34},
        {id: 2, name: "Alex", age: 25},
        {id: 3, name: "Ann", age: 30},
        {id: 4, name: "John", age: 23},
    ]
    const users = [
        {id: 1, userName: "Bob", age: 34},
        {id: 2, userName: "Alex", age: 25},
        {id: 3, userName: "Ann", age: 30},
        {id: 4, userName: "John", age: 23},
    ]

    const [usersList, setUsersList] = useState<Array<UserType>>(XXX)
    return (
        <main>
            <h5>User list:</h5>
            <p>Тут будет список пользователей</p>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что надо написать вместо XXX, чтобы код работал?
