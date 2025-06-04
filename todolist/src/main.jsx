import { createRoot } from 'react-dom/client'
import './style.css'
import Todo from './Todo.jsx'
import Employees from './Employees.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <Todo />, */}
    <Employees />
  </>
)
