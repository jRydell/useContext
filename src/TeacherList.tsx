// Komponent för att visa lärare
import { useContext } from 'react'
import { GlobalStateContext } from './GlobalStateContext'


const TeacherList = () => {
    const globalState = useContext(GlobalStateContext)
    return (
        <div>
            <h3>Teacher list:</h3>
            <ul>
                {globalState.teachers.map((teacher) => (
                    <li key={teacher.id}>Name: {teacher.name}, Age: {teacher.age}, Subject: {teacher.subjects.join(', ')}</li>
                ))}
            </ul>

        </div>
    )
}

export default TeacherList