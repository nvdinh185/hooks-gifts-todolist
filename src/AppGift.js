import { useState } from 'react';

const gifts = [
    'CPU i9',
    'RAM 32G RGB',
    'RGB KeyBoard'
]

const App = () => {

    const [gift, setGift] = useState();

    const randomGift = () => {
        var idx = Math.floor(Math.random() * gifts.length);
        setGift(gifts[idx]);
    }

    return (
        <>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button onClick={randomGift}>Lấy thưởng</button>
        </>
    )
}

export default App;