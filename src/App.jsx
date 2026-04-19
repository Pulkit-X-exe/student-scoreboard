import { useState } from "react";
import Header from "./components/Header";
import StudentRow from "./components/StudentRow";
import AddStudentForm from "./components/AddStudent";
import Footer from "./components/Footer";

function App () {

    const [students, setStudents] = useState([
        { name: "Pulkit", score: 80 },
        { name: "Aman", score: 30 },
        { name: "Priya", score: 20 }
    ]);

    const updateScore = (index, newScore) => {
        const updatedStudents = [...students];
        updatedStudents[index].score = Number(newScore);
        setStudents(updatedStudents);
    };

    const addStudent = (name, score) => {
        const newStudent = { name, score };
        setStudents([...students, newStudent]);
    };

    const deleteStudent = (index) => {
        const updatedStudents = students.filter((_, i) => i !== index);
        setStudents(updatedStudents);
    };

    const totalStudents = students.length;

    const totalMarks = students.reduce((sum, student) => {
        return sum + student.score;
    }, 0);

    const avgMarks = totalStudents > 0
        ? (totalMarks / totalStudents).toFixed(2)
        : 0;

    return (
        <div className="app">

            <Header />

            <h2>Student Record</h2>

            <div className="results">
                <h3>Total Students: {totalStudents}</h3>
                <h3>Total Marks: {totalMarks}</h3>
                <h3>Average Marks: {avgMarks}</h3>
                <h3>Maximum Marks : 100</h3>
            </div>

            <AddStudentForm addStudent={addStudent} />

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student, index) => (
                        <StudentRow
                            key={index}
                            name={student.name}
                            score={student.score}
                            index={index}
                            updateScore={updateScore}
                            deleteStudent={deleteStudent}
                        />
                    ))}
                </tbody>
            </table>
        <Footer />
        </div>
    );
}

export default App;