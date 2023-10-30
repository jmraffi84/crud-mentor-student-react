import React, { useState } from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { useFormik } from 'formik'
import { Button, TextField } from '@mui/material'

export const studentValidationSchema = yup.object({
    name: yup.string().required("please fill the name"),
    batch: yup.string().required("please fill the batch detail").min(5, "Hey please fill the proper batch name"),
    gender: yup.string().required("Please specify your gender"),
    education: yup.string().required("It is not bad to tell you education"),
})

const AddStudent = ({ students, setStudents }) => {

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: "",
            batch: "",
            gender: "",
            education: ""
        },
        validationSchema: studentValidationSchema,
        onSubmit: (newStudent) => {
            handleAddStudent(newStudent)
        }
    })
    // const [id, setId] = useState("")
    // const [name, setName] = useState("")
    // const [batch, setBatch] = useState("")
    // const [gender, setGender] = useState("")
    // const [education, setEducation] = useState("")
    const navigate = useNavigate()
    const handleAddStudent = async (newStudent) => {

        // const newStudent = {
        //     // id,
        //     name,
        //     batch,
        //     gender,
        //     education
        // }
        try {

            const response = await fetch(`https://653f4a8a9e8bd3be29e02d3f.mockapi.io/students`, {
                method: "POST",
                body: JSON.stringify(newStudent),
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const data = await response.json()
            setStudents([...students, data])
            navigate("/")
            // setId("")
            // setName("")
            // setBatch("")
            // setGender("")
            // setEducation("")
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <Base
            title={"Students Info"}
            description={"Add student details here"}
        >
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <h4>Add New Students</h4>
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

export default AddStudent