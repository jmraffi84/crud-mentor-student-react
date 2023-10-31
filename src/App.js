import { useEffect, useState } from 'react';
import './App.css';
import Student from './Components/Student';
import { Routes, Route } from 'react-router-dom';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
import Nopage from './Components/Nopage';
function App() {
  const [students, setStudents] = useState([])
  useEffect(() => {
    const getStudentDetails = async () => {
      const res = await fetch(`https://653f4a8a9e8bd3be29e02d3f.mockapi.io/students`, {
        method: "GET",
      });
      const data = await res.json();
      setStudents(data)
    }
    getStudentDetails()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Student
          students={students}
          setStudents={setStudents}
        />} />

        <Route
          path="/add-students"
          element={<AddStudent
            students={students}
            setStudents={setStudents}
          />}
        />
        <Route
          path="/edit-students/:id"
          element={<EditStudent
            students={students}
            setStudents={setStudents}
          />}
        />
        <Route path="*" element={<Nopage />} />
      </Routes>

    </div>
  );
}

export default App;
