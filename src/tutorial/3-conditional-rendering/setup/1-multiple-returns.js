import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState('default User');

  // it fetches data and return accordingly - simple example
  useEffect(()=> {
    fetch(url).then((data) => {
      if(data.status >= 200 && data.status <=299){
        return data.json();
      }else{
        setLoading(false);
        throw new Error(data.statusText);
      }
    })
    .then((user)=>{
      const {login} = user;
      setUser(login);
      setLoading(false);
    })
    .catch((error)=>{
      setError(true);
    });
  }, []);

  if(isLoading){
    return <>
      <h2>Loading...</h2>
    </>
  } 

  if(isError){
    return <>
      <h1>Error...</h1>
    </>
  }

  return (
    <>
      <h1>{user}</h1>
    </>
  )
};

export default MultipleReturns;
