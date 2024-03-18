//context som lagrar alla lärare

import { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

type Teacher = {
    name: string,
    age: number,
    id: string,
    subjects: string[],

}

export const initialTeachers: Teacher[] = [

    {
        id: uuidv4(),
        name: "Hasse",
        age: 44,
        subjects: ["Math", "History"]

    },
    {
        id: uuidv4(),
        name: "Kerstin",
        age: 35,
        subjects: ["Religon", "Art"]
    },
    {
        id: uuidv4(),
        name: "Ludvig",
        age: 26,
        subjects: ["Sports", "Culture"]

    }

]

export const TeacherContext = createContext([] as Teacher[])