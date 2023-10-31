import Base from '../Base/Base'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import { studentValidationSchema } from './AddStudent'
import { useFormik } from 'formik'
const EditStudent = ({ students, setStudents, studId }) => {
    const { id } = useParams()

    const studentData = students.find(stud => stud.id === id)

    const { values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors, touched }
        = useFormik({
            initialValues: {
                name: studentData.name,
                batch: studentData.batch,
                gender: studentData.gender,
                education: studentData.education
            },
            validationSchema: studentValidationSchema,
            onSubmit: (updatedStudent) => {
                // handleAddStudent(updatedStudent)
                console.log(updatedStudent);
                editStudent(updatedStudent);

            }
        })

    const navigate = useNavigate()
    // const [idx, setIdx] = useState("")
    // const [name, setName] = useState("")
    // const [batch, setBatch] = useState("")
    // const [gender, setGender] = useState("")
    // const [education, setEducation] = useState("")

    // useEffect(() => {

    // setIdx(studentData.id)
    // values.name = studentData.name
    // values.batch = studentData.batch
    // values.gender = studentData.gender
    // values.education = studentData.education

    // setStudents(studentData)
    // }, [id, students, values])

    const editStudent = async (updatedStudent) => {

        try {
            // const updatedStudent = {
            //     id, name, batch, gender, education
            // }
            // fetch and update data
            const response = await fetch(`https://653f4a8a9e8bd3be29e02d3f.mockapi.io/students/${id}`, {
                method: "PUT",
                body: JSON.stringify(updatedStudent),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json()
            const studIndex = students.findIndex((stud) => stud.id === id);

            students[studIndex] = data
            setStudents([...students])
            navigate("/")
        } catch (error) {
            console.log(error);
        }


    }


    return (
        <Base
            title={"Students Info"}
            description={"Edit student details here"}
        >
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <h4>Edit Students</h4>
                    {/* <TextField
                    placeholder='Enter Id of Student'
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                /> */}
                    {touched.name && errors.name ? <span style={{ color: "crimson" }}>
                        {errors.name}
                    </span> : ""}
                    <TextField
                        placeholder='Enter Name of Student'
                        label="Name" variant="outlined"
                        fullWidth sx={{ m: 1 }}
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='name'

                    />

                    {touched.batch && errors.batch ? <span style={{ color: "crimson" }}>
                        {errors.batch}
                    </span> : ""}
                    <TextField
                        placeholder='Enter Batch of Student'
                        label="Batch" variant="outlined"
                        fullWidth sx={{ m: 1 }}
                        type="text"
                        value={values.batch}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="batch"

                    />
                    {touched.gender && errors.gender ? <span style={{ color: "crimson" }}>
                        {errors.gender}
                    </span> : ""}
                    <TextField
                        placeholder='Enter Gender of Student'
                        label="Gender" variant="outlined"
                        fullWidth sx={{ m: 1 }}
                        type="text"
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="gender"

                    />
                    {touched.education && errors.education ? <span style={{ color: "crimson" }}>
                        {errors.education}
                    </span> : ""}
                    <TextField
                        placeholder='Enter Education of Student'
                        label="Education" variant="outlined"
                        fullWidth sx={{ m: 1 }}
                        type="text"
                        value={values.education}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="education"

                    />
                    <div>
                        <Button type="submit" variant="contained"  >Add Student</Button>

                    </div>


                </div>
            </form>
        </Base>
    )
}

export default EditStudent