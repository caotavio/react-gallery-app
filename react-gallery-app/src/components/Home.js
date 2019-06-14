import React from 'react';
import welcome from '../welcome.jpg';

function Home() {

  return(
    <div>
      <h1> A React Gallery! Enjoy!</h1>
      <img src={welcome} alt="welcome" />
      <h4> Search for your favourite pictures or browse between those 3 categories while you think of cool stuff to look for. </h4>
    </div>
  );
}

export default Home;