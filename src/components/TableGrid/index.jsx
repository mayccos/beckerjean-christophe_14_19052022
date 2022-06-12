import React, { useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../utils/style/colors'
// Creation components that using styled-component
const ContainerEmployee = styled.div`
    margin: auto;
`
const TitleEmployee = styled.h2`
    color: ${colors.tertiary};
    margin-top: 50px;
    text-align: center;
    margin-bottom: 25px;
`
const SectionEmployee = styled.section`
    width: 90%;
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
    margin-bottom: 30px;
`
const EntriesNumber = styled.div`
    width: 50%;
    color: ${colors.tertiary};
`
const Label = styled.label`
    color: ${colors.tertiary};
`
const Select = styled.select`
    border-radius: 20px;
    border: 2px solid ${colors.tertiary};
`
const OptionNumber = styled.option``
const EmployeeSearch = styled.div``
const InputSearch = styled.input`
    border-radius: 20px;
    border: 2px solid ${colors.tertiary};
`
const ButtonSearch = styled.button`
    border-radius: 20px;
    border: 2px solid ${colors.tertiary};
    background-color: ${colors.tertiary};
    color: ${colors.white};
`
const Div = styled.div``
const AgThemeBalham = styled.div``
const LinkTo = styled.div`
    margin: auto;
    text-align: center;
`
const LinkToHome = styled(Link)`
    text-decoration: none;
    color: ${colors.tertiary};
    &:hover {
        color: ${colors.white};
    }
`

const TableGrid = () => {
    /**
     * @typedef {("fistName"| "lastName"| "startDate"| "department"| "dateOfBirth"| "street"| "city"| "state"| "zipCode")} showKeys
     */

    /**
     * It takes an array of objects, a value to search for, and a setter function to update the state of
     * the filtered array
     * @param targetArray - the array you want to filter
     * @param value - the value of the input field
     * @param set - the setter function for the state variable you want to update
     */
    function employeesFilter(targetArray, value, set) {
        value = value.toLowerCase()
        let filterArray = []
        targetArray.forEach((el) => {
            for (const newEl of Object.values(el)) {
                if (typeof newEl !== 'string') continue
                if (newEl.toLowerCase().includes(value)) filterArray.push(el)
            }
        })

        set([...new Set(filterArray)])
    }
    const containerStyle = useMemo(
        () => ({ width: '100%', height: '100%' }),
        []
    )

    const columnDefs = [
        { headerName: 'First Name', field: 'firstName', width: 150 },
        { headerName: 'LastName', field: 'lastName', width: 150 },
        { headerName: 'Date of Birth', field: 'dateOfBirth', width: 150 },
        { headerName: 'Street', field: 'street', width: 150 },
        { headerName: 'City', field: 'city', width: 150 },
        { headerName: 'State', field: 'state', width: 150 },
        { headerName: 'Zip Code', field: 'zipCode', width: 150 },
        { headerName: 'Start Date', field: 'startDate', width: 150 },
        { headerName: 'Department', field: 'department', width: 150 },
    ]
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
    /**
     *  @description To Create a hook that is used to update the state of the table.
     */
    const [getRows, setGetRows] = useState(rows)
    const [searched, setSearched] = useState('')
    /**
     * @description takes a value, sets it to the state, and then filters the rows based on that value
     * @param searchedValue - The value that is the user sought.
     */
    const requestSearch = (searchedValue) => {
        setSearched(searchedValue)
        employeesFilter(rows, searchedValue, setGetRows)
    }
    return (
        <ContainerEmployee>
            <TitleEmployee>Employee List</TitleEmployee>
            <SectionEmployee>
                <EntriesNumber>
                    <Label>Show</Label>
                    <Select>
                        <OptionNumber>10</OptionNumber>
                        <OptionNumber>25</OptionNumber>
                        <OptionNumber>50</OptionNumber>
                        <OptionNumber>100</OptionNumber>
                    </Select>
                    entries
                </EntriesNumber>
                <EmployeeSearch>
                    <Label> Search: </Label>

                    <InputSearch
                        value={searched}
                        onChange={(e) => requestSearch(e.target.value)}
                    />
                    <ButtonSearch
                        onClick={() => requestSearch('')}
                        style={{
                            visibility: InputSearch.value
                                ? 'hidden'
                                : 'visible',
                        }}
                    >
                        X
                    </ButtonSearch>
                </EmployeeSearch>
            </SectionEmployee>
            <Div style={containerStyle}>
                <AgThemeBalham
                    className="ag-theme-balham"
                    style={{
                        margin: 'auto',
                        height: '500px',
                        width: '90%',
                        borderRadius: 20,
                    }}
                >
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={getRows}
                        pagination={true}
                    />
                </AgThemeBalham>
            </Div>
            <LinkTo>
                <LinkToHome to={'/'}>Home</LinkToHome>
            </LinkTo>
        </ContainerEmployee>
    )
}
export default TableGrid
