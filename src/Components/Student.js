import React from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom';
import { Button, Paper } from '@mui/material';


const Student = ({ students, setStudents }) => {
    const navigate = useNavigate();

    const deleteStudent = async (studentId) => {
        try {
            const res = await fetch(`https://653f4a8a9e8bd3be29e02d3f.mockapi.io/students/${studentId}`, {
                method: "DELETE"
            });
            const data = await res.json()
            console.log(data);
            if (data) {
                const removeStudent = students.filter(student => student.id !== studentId);
                setStudents(removeStudent)
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Base
            title={"Students Info"}
            description={"All students info will be displayed here"}
        >


            <div className='stud-collection'>
                {
                    students.map((stud, idx) => (
                        <Paper elevation={6} className='stud-card' key={idx}>
                            <h2>{stud.name}</h2>
                            <p>Batch : {stud.batch}</p>
                            <p>Gender : {stud.gender}</p>
                            <p>Education : {stud.education}</p>
                            <div className='card-btn-group'>
                                <Button onClick={() => navigate(`/edit-students/${stud.id}`)} variant="text">Edit</Button>
                                <Button onClick={() => deleteStudent(stud.id)} variant="outlined" color="error">Delete</Button>



                            </div>
                        </Paper>
                    ))
                }
            </div>
        </Base>
    )
}

export default Student