import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Profile from "./components/Profile.jsx";
import Product from './components/Product.jsx';
import Recipe from './components/Recipe.jsx';

function App() {
  const [count, setCount] = useState(0)
  const name = 'Quackie Makers';
  const birthdate = 'Quackie Makers';
  const job = "Makers' favourite rubber duck";

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Profile 
          name={name} 
          birthdate={birthdate} 
          job={job}
        />
        <Product
          name="Air Fryer K2000"
          description="The best air fryer to fry all things, even Mars bars"
          price={2000}
        />
        <Recipe 
          title="Finnish cinammon buns" 
          type="dessert" 
          duration={60} 
        />
      </div>
    </>
  )
}

export default App