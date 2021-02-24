import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Netflix_App/Card';
import Sdata from './Netflix_App/Sdata'


ReactDOM.render( <>

  <h1 className='heading_style'> My Favourite OTT Series... </h1>
  {Sdata.map((val) => {
    return(
      <Card 
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
  );
  })}
  </>,
  document.getElementById("root"));