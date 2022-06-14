import styled from 'styled-components'
//import Component
//import TableGrid from '../../components/TableGrid'
import EmployeesArray from '../../components/EmployeesArray'
//import data mocked
import EmployeeData from '../../data'
// Creation components that using styled-component
const ListEmployees = styled.main``

/**
 * @description Component that show the EmployeeList page
 * @returns { HTMLElement }
 */

function EmployeesList() {
    const initial = () => {
        if (!localStorage.getItem('employee')) {
            localStorage.setItem('employee', JSON.stringify(EmployeeData))
        }
    }
    initial()
    return (
        <ListEmployees>
            {/* <TableGrid /> */}
            <EmployeesArray />
        </ListEmployees>
    )
}
export default EmployeesList
