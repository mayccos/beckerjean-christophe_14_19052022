import * as React from 'react'
import EmployeesData from '../../data'
//Custom and style
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

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
    const init = () => {
        if (!localStorage.getItem('employee')) {
            localStorage.setItem('employee', JSON.stringify(EmployeesData))
        }
    }
    init()
    return (
        <CreateEmployees>
            <CreationTitle>Employee Information</CreationTitle>
            <CreateEmployeeForm />
        </CreateEmployees>
    )
}

export default CreateEmployee
