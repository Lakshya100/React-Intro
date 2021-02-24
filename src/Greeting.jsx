import React from 'react';
import './index.css';

function Greeting(){
    let time = new Date().getHours();
    let greet = "";
    const cssStyle = {};

    if (time >= 1 && time <= 11) {
        greet = 'Good Morning';
        cssStyle.color = 'green';
    } else if (time >= 12 && time <= 19) {
        greet = 'Good Afternoon';
        cssStyle.color = 'orange';
    } else {
        greet = 'Good Night';
        cssStyle.color = 'purple';
    }

    return(
        <>
            <div>
                <h1>
                    Hello Sir, <span style={cssStyle}> {greet} </span>
                </h1>
            </div>
        </>
    );
}

export default Greeting;