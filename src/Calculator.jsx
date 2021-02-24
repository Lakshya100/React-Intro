import React from 'react';
let a;
let b;

function Calculator(){
    function add(a,b){
        return (a+b);
    }
    function sub(a,b){
        return (a-b);
    }
    function div(a,b){
        return (a/b);
    }
    function mult(a,b){
        return (a*b);
    }
    return(
        <h2>
        <ul>
            <li> Sum of two no. is {add(30,14)} </li>
            <li> Subtraction of two no. is {sub(30,11)} </li>
            <li> Division of two no. is {div(10,3).toFixed(2)} </li>
            <li> Multiplication of two no. is {mult(10,3)} </li>
        </ul>
        </h2>
    );
}

export default Calculator;