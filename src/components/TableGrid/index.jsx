import React, { useMemo } from 'react'
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
`
const Label = styled.label``
const Select = styled.select``
const OptionNumber = styled.option``
const EmployeeSearch = styled.div``
const InputSearch = styled.input``
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
    const containerStyle = useMemo(
        () => ({ width: '100%', height: '100%' }),
        []
    )

    const columnDefs = [
        { headerName: 'First Name', field: 'firstName', width: '150' },
        { headerName: 'LastName', field: 'lastName', width: '150' },
        { headerName: 'Date of Birth', field: 'dateOfBirth', width: '150' },
        { headerName: 'Street', field: 'street', width: '150' },
        { headerName: 'City', field: 'city', width: '150' },
        { headerName: 'State', field: 'state', width: '150' },
        { headerName: 'Zip Code', field: 'zipCode', width: '150' },
        { headerName: 'Start Date', field: 'startDate' },
        { headerName: 'Department', field: 'department', width: '150' },
    ]
    const rowData = JSON.parse(localStorage.getItem('employee'))
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
                    <Label> Search :</Label>
                    <InputSearch />
                </EmployeeSearch>
            </SectionEmployee>
            <Div style={containerStyle}>
                <AgThemeBalham
                    className="ag-theme-balham"
                    style={{
                        margin: 'auto',
                        height: '500px',
                        width: '90%',
                    }}
                >
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={rowData}
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
