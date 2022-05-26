import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//import component css
import GlobalStyle from './utils/style/GlobalStyle'

//import component
import Header from './components/Header'
import Home from './pages/Home'
import Error from './pages/Error'
import EmployeeList from './pages/EmpoyeeList'
/**
 * routes & renders pages
 * @returns {JSX}
 */
function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="employeeList" element={<EmployeeList />} />
            </Routes>
        </Router>
    )
}

export default App
