import { Route, Routes } from 'react-router-dom'
import './App.css'
import Tasks from './components/tasks/tasks'
import DetailTask from './components/detailsTask/detailsTask'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/details/:id" element={<DetailTask />} />
    </Routes>
  )
}

export default App
