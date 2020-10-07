import React, { useCallback, useState } from 'react';

function Count() {
    const [count, setCount] = useState(0);

    const countButtonHandler = useCallback(() => {
        if(count >= 15){
            alert('15 Up!!');
            return
        }
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Items [{count}].</p>
            <button onClick={countButtonHandler}>Click Me!</button>
        </div>
    )
}

export default Count;