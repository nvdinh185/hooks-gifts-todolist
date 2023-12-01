import { useState } from 'react';

const initialJobs = [
    'Quet nha',
    'Giat quan ao',
    'Lau nha'
]

const App = () => {

    const [job, setJob] = useState('');
    const [listJobs, setListJobs] = useState(initialJobs);

    const handleSubmit = () => {
        // let newArray = [...listJobs];
        // newArray.push(job);
        // setListJobs(newArray);
        setListJobs(prev => [...prev, job]);
        setJob('');
    }

    return (
        <>
            <input type='text' value={job}
                onChange={(e) => setJob(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {listJobs.map((job, idx) =>
                    <li key={idx}>
                        <p>{job}</p>
                    </li>
                )}
            </ul>
        </>
    )
}

export default App;