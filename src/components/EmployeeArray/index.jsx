import React from 'react'

// Import of @mui library to create a table
import { DataGrid, GridToolbarFilterButton } from '@mui/x-data-grid'

// Custom and style
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

// Creation components that using styled-component
const Div = styled.div`
    background-color: ${colors.white};
`
/**
 * @description  to custom the toolbar of table
 * @return function CustomToolbar
 */
function CustomToolbar() {
    return <GridToolbarFilterButton style={{ color: 'black' }} />
}
/**
 * @typedef {("fistName"| "lastName"| "startDate"| "department"| "dateOfBirth"| "street"| "city"| "state"| "zipCode")} showKeys
 */

/**
 * This function is used to show an array of current Employee
 */
const EmployeeArray = () => {
    let addOneUser = localStorage.getItem('employee')

    let users = JSON.parse(addOneUser)

    const rows = []

    if (users !== null) {
        users.map((user, index) =>
            rows.push({
                id: index,
                firstName: user.firstName,
                lastName: user.lastName,
                startDate: user.startDate,
                department: user.department,
                dateOfBirth: user.dateOfBirth,
                street: user.street,
                city: user.city,
                state: user.state,
                zipCode: user.zipCode,
            })
        )
    }

    /* To Create an array of objects that will be used to complete  the table. */
    const columns = [
        { field: 'firstName', headerName: 'firstName', width: 150 },
        { field: 'lastName', headerName: 'lastName', width: 150 },
        { field: 'startDate', headerName: 'startDate', width: 150 },
        { field: 'department', headerName: 'department', width: 150 },
        { field: 'dateOfBirth', headerName: 'dateOfBirth', width: 150 },
        { field: 'street', headerName: 'street', width: 150 },
        { field: 'city', headerName: 'city', width: 150 },
        { field: 'state', headerName: 'state', width: 150 },
        { field: 'zipCode', headerName: 'zipCode', width: 150 },
    ]

    /**
     *  @return {JSX} table to display the list of employee
     */

    return (
        <Div
            style={{
                width: '85%',
                marginTop: '2rem',
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                components={{ Toolbar: CustomToolbar }}
                autoHeight={true}
            />
        </Div>
    )
}

export default EmployeeArray
