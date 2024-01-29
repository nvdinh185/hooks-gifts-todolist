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
    const [error, setError] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    // Xử lý thêm hoặc sửa
    const handleSubmit = () => {
        // Nếu chưa nhập thì thông báo lỗi
        if (!job) {
            setError('Vui lòng nhập!');
        } else {
            // Xử lý thêm job mới
            if (!isEdit) {
                let newArray = [...listJobs];
                newArray.push(job);
                setListJobs(newArray);
                setJob('');
            } else {
                // Xử lý sửa job
                let newArray = [...listJobs];
                let idx = newArray.findIndex(jb => jb === editJob);
                newArray.splice(idx, 1, job);
                setListJobs(newArray);
                setJob('');
                setIsEdit(false);
            }
        }
    }

    // Xử lý khi bấm vào nút sửa mỗi job
    const handleClickEdit = (job) => {
        setJob(job);
        setEditJob(job);
        // console.log(editJob);
        setIsEdit(true);
    }

    // Xử lý xóa
    const handleDelete = (job) => {
        if (window.confirm('Bạn có chắc muốn xóa ?')) {
            /* Cách 1:
            // let newArray = [...listJobs];
            // let idx = newArray.findIndex(jb => jb === job);
            // newArray.splice(idx, 1);
            */

            // Cách 2:
            let newArray = listJobs.filter(jb => jb !== job);
            setListJobs(newArray);
        }
    }

    // Xử lý khi blur vào ô input
    const handleBlur = (e) => {
        if (!e.target.value) {
            setError('Vui lòng nhập!');
        }
    }

    // Xử lý khi nhập vào ô input
    const handleInput = (e) => {
        setError('');
    }

    return (
        <>
            <input type='text' value={job}
                onChange={(e) => setJob(e.target.value)}
                onBlur={e => handleBlur(e)}
                onInput={e => handleInput(e)}
                className={error && 'invalid'}
            />
            <button onClick={handleSubmit}>{isEdit ? 'Edit' : 'Add'}</button><br />
            <span style={{
                color: 'red',
                fontStyle: 'italic'
            }}>{error}</span>

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