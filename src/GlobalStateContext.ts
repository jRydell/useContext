import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

type Student = {
  name: string;
  age: number;
  id: string;
};

type Teacher = {
  name: string;
  age: number;
  id: string;
  subjects: string[];
};

type GlobalState = {
  students: Student[];
  teachers: Teacher[];
};

export const initialGlobalState: GlobalState = {
  students: [
    {
      id: uuidv4(),
      name: "Alice",
      age: 20,
    },
    {
      id: uuidv4(),
      name: "Bob",
      age: 21,
    },
    {
      id: uuidv4(),
      name: "Charlie",
      age: 22,
    },
  ],
  teachers: [
    {
      id: uuidv4(),
      name: "Hasse",
      age: 44,
      subjects: ["Math", "History"],
    },
    {
      id: uuidv4(),
      name: "Kerstin",
      age: 35,
      subjects: ["Religion", "Art"],
    },
    {
      id: uuidv4(),
      name: "Ludvig",
      age: 26,
      subjects: ["Sports", "Culture"],
    },
  ],
};

export const GlobalStateContext = createContext(initialGlobalState);
