import React, { useState } from 'react';

function Count() {
    const [count, setCount] = useState(0);

    const countButtonHandler = () => {
        if(count >= 15){
            alert('15 Up!!');
            return
        }
        setCount(count + 1);
    }

    return (
        <div>
            <p>Items [{count}].</p>
            <button onClick={countButtonHandler}>Click Me!</button>
        </div>
    )
}

export default Count;