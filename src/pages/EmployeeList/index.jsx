import * as React from 'react'
import { NavLink } from 'react-router-dom'

//style and custom
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

//import components
import EmployeeArray from '../../components/EmployeeArray'

//import data
import EmployeesData from '../../data'

// Creation components that using styled-component
const CurrentsEmployees = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index: 10;
`
const EmployeesTitle = styled.h1`
    margin-top: 2rem;
    color: ${colors.tertiary};
`

/**
 * @description function that use EmployeeArray to display the employee list page
 * @returns The CurrentEmployees page is being returned.
 */
function CurrentEmployees() {
    const init = () => {
        if (!localStorage.getItem('employee')) {
            localStorage.setItem('employee', JSON.stringify(EmployeesData))
        }
    }
    init()
    return (
        <CurrentsEmployees>
            <EmployeesTitle>Current Employees</EmployeesTitle>
            <EmployeeArray />
            <NavLink to="/" style={{ color: '#5A6F08' }}>
                Home
            </NavLink>
        </CurrentsEmployees>
    )
}

export default CurrentEmployees
