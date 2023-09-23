import { useState } from 'react';
import './NoContent.css'

interface Count {
    count: number
}

const NoContent = () => {

    const [countValue, setCount] = useState<Count>({count: 0})

    return (
        <div className='no-content'>
            <h1>Unfortunately, there is no content yet</h1>
            <p>But you can play with count button instead c:</p>
            <div>
                <span>{countValue.count}</span>
                <button onClick={() => setCount({count: countValue.count+1})}>Increase</button>
            </div>
        </div>
    );
};

export default NoContent;