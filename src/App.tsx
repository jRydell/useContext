import './App.css'
import StudentList from './StudentList'
import TeacherList from './TeacherList'
import { GlobalStateContext, initialGlobalState } from './GlobalStateContext'


function App() {
  return (
    <GlobalStateContext.Provider value={initialGlobalState}>
      <div className="App">
        <h1>useContext Demo</h1>
        <StudentList />
        <TeacherList />
      </div>
    </GlobalStateContext.Provider>
  )
}

export default App;