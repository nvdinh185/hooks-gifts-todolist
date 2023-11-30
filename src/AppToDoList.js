import { useState } from 'react';

const initialJobs = [
    'Quet nha',
    'Giat quan ao',
    'Lau nha'
]

const App = () => {

    const [job, setJob] = useState('');
    const [editJob, setEditJob] = useState('');
    const [listJobs, setListJobs] = useState(initialJobs);
    const [isEdit, setIsEdit] = useState(false);

    const handleAdd = () => {
        if (!isEdit) {
            let newArray = [...listJobs];
            newArray.push(job);
            setListJobs(newArray);
            setJob('');
        } else {
            let newArray = [...listJobs];
            let idx = newArray.findIndex(jb => jb === editJob);
            newArray.splice(idx, 1, job);
            setListJobs(newArray);
            setJob('');
            setIsEdit(false);
        }
    }

    const handleClickEdit = (job) => {
        setJob(job);
        setEditJob(job);
        // console.log(editJob);
        setIsEdit(true);
    }

    const handleDelete = (job) => {
        if (confirm('Bạn có chắc muốn xóa ?')) {
            // let newArray = [...listJobs];
            // let idx = newArray.findIndex(jb => jb === job);
            // newArray.splice(idx, 1);
            let newArray = listJobs.filter(jb => jb !== job);
            setListJobs(newArray);
        }
    }

    return (
        <>
            <input type='text' value={job}
                onChange={(e) => setJob(e.target.value)} />
            <button onClick={handleAdd}>{isEdit ? 'Edit' : 'Add'}</button>

            <ul>
                {listJobs.map((job, idx) =>
                    <li key={idx}>
                        <p>{job}</p>
                        <button onClick={() => handleClickEdit(job)}>Sửa</button>
                        <button onClick={() => handleDelete(job)}>Xóa</button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default App;