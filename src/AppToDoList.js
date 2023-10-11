import { useState } from 'react';

const initialJobs = [
    'Quet nha',
    'Giat quan ao',
    'Lau nha'
]

const App = () => {

    const [job, setJob] = useState('');
    const [listJobs, setListJobs] = useState(initialJobs);

    const handleAdd = () => {
        let newArray = [...listJobs];
        newArray.push(job);
        setListJobs(newArray);
        setJob('');
    }

    return (
        <>
            <input type='text' value={job}
                onChange={(e) => setJob(e.target.value)} />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {listJobs.map((job, idx) =>
                    <li key={idx}>{job}</li>
                )}
            </ul>
        </>
    )
}

export default App;