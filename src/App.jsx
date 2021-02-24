import React from 'react';
// import List from './List';
// import Greeting from './Greeting';
import Calculator from './Calculator';
import Card from './Netflix_App/Card';
import Sdata from './Netflix_App/Sdata';
import './index.css';

const App = () => {
    return(<>
        <h1 className='heading_style'> My Favourite OTT Series... </h1>
        {Sdata.map((val) => {
            return(
                <Card 
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                />
            );
        })}
    </>);
}

export default App;