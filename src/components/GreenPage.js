import React, { useContext } from 'react';
import { ColorContext } from '../App';

const GreenPage = () => {

  const Context = useContext(ColorContext);
  console.log(Context);
  
  return (
    <div>
      <h1 style={{ color: 'yellow'}}>this is the GreenPage</h1>
    </div>
  )
}

export default GreenPage;