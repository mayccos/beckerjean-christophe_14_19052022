import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
// import { NavLink } from 'react-router-dom'
// import EmployeesData from '../../data'
//import components
import CreateEmployeeForm from '../../components/CreateEmployeeForm'
// Creation components that using styled-component
const CreateEmployees = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index: 10;
`
const CreationTitle = styled.h1`
    margin-top: 2rem;
    color: ${colors.tertiary};
`

/**
 * @description function that use CreateEmployee Form to display the employee creation page
 * @returns The CreateEmployees page is being returned.
 */
function CreateEmployee() {
    return (
        <CreateEmployees>
            <CreationTitle>Employee information</CreationTitle>
            <CreateEmployeeForm />
        </CreateEmployees>
    )
}

export default CreateEmployee
