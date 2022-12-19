import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  // function making fetch call to fetch data
  const getUsers = async () => {
    // returns promise
    const response = await fetch(url);
    // returns data 
    const users = await response.json();
    console.log(users);
    setUsers(users);
  }

  // Called only once, if not then setUsers in above function changes state and re-render component
  // and when it re-render useState will run which call the above function again sticking in a loop, so that is why we only call once
  useEffect(() => {
    getUsers();
  }, []);

  return <>
    <h3>Github Users</h3>
    <ul className='users'>
    {
      users.map((user) => {
        const {id, login, avatar_url, html_url} = user;
        return <li key={id}>
          <img src={avatar_url} alt={login}></img>
          <div>
            <h4>{login}</h4>
            <a href={html_url}>profile</a>
          </div>
        </li>
      })
    }
    </ul>
  </>;
};

export default UseEffectFetchData;
