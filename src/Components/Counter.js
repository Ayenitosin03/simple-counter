import { useState } from "react";
 import React from 'react'
 import classes from './Counter.module.css'
 
 function Counter() {
     const [counter, setCounter] = useState(0);
     const buttonIncrement = () => setCounter(counter+1);
     const buttonReset = () => setCounter(0);
     const buttonDecrement = () => setCounter(counter-1);
     return (
         <div className={classes.counterContainer}>
            <h1 className={classes.count}>{counter}</h1> 
            <div>
            <button type="button" onClick={buttonIncrement} className={classes.increase}>
                +Increase
            </button>
            <button type="button" onClick={buttonReset} className={classes.reset}>
             Reset
            </button>
            <button type="button" onClick={buttonDecrement} className={classes.decrease}>
              -Decrease
            </button>
            </div>
         </div>
     );
 }
 
 export default Counter
 