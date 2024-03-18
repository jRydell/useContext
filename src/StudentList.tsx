//Komponent för att visa alla studenter (namn)
import { GlobalStateContext } from './GlobalStateContext'
import { useContext } from 'react'


const StudentList = () => {
    const globalState = useContext(GlobalStateContext)
    return (
        <div>
            <h3>Student list:</h3>
            <ul>
                {globalState.students.map((student) => (
                    <li key={student.id}>Name: {student.name}, Age: {student.age}</li>
                ))}
            </ul>

        </div>
    )
}

export default StudentList