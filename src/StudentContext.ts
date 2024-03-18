//context som lagrar alla studener 

import { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';


type Student = {
    name: string,
    age: number,
    id: string,

}

export const initialStudents: Student[] = [

    {
        id: uuidv4(),
        name: "Bosse",
        age: 34,

    },
    {
        id: uuidv4(),
        name: "Stina",
        age: 46,

    },
    {
        id: uuidv4(),
        name: "Bosse",
        age: 26,

    }

]

export const StudentContext = createContext([] as Student[])