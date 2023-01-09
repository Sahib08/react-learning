import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  const fetchProjects = async() => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    }catch(e){
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  if(loading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  if(tours.length === 0){
    return ( 
      <main>
        <h2>no tours left</h2>
        <button onClick={fetchProjects} className='btn'>Refresh</button>
      </main>
    )
  }
    
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
