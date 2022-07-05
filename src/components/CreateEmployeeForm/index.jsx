import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// Import of library and css to use a datePicker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { DropdownComponent } from 'lycant-library'
import 'lycant-library/dist/index.css'

//Custom ans style
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

// import components
import Modal from '../Modal'

//import data
import { states, departments } from '../../utils/optionsDropdown'
import EmployeesData from '../../data'
// actions
import { createEmployee } from '../../features/employee'

// Creation components that using styled-component
const Div = styled.div`
    background-color: white;
    border-radius: 10px;
`
const Label = styled.label``
const Input = styled.input`
    margin-bottom: 20px;
    width: 40vh;
    height: 50px;
    font-size: 2.5vh;
    border-radius: 20px;
    border: solid 2px ${colors.secondary};
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index: 10;
    margin-bottom: 50px;
    width: 50vh;
    margin-top: 20px;
`
const FieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    margin-top: 10px;
`
const FormButtons = styled.div``
const Button = styled.button`
    font-size: 2.5vh;
    border-radius: 20px;
    border: solid 2px ${colors.secondary};
    color: ${colors.white};
    background-color: ${colors.secondary};
    &:hover {
        transform: scale(1.4);
    }
`
const Alert = styled.div`
    color: ${colors.alert};
`
const P = styled.p``
/**
 * @description Component that display the form to create an employee file
 * @returns { JSX }
 */
function CreateEmployeeForm() {
    const [startDate, setStartDate] = useState()
    const [birthDate, setBirthDate] = useState()
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)

    /**
     * @description Function that reset date picker
     */
    const resetInputs = () => {
        setStartDate('')
        setBirthDate('')
    }
    const capitalize = (str) => {
        return str.trim().charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    const handleOpenModal = () => {
        setModalOpen(true)
    }
    /**
     * @description Function that save the created employee in the state
     */
    const saveEmployee = (e) => {
        e.preventDefault()
        const firstName = document.querySelector('#first-name')
        const lastName = document.querySelector('#last-name')
        const birthDate = document.querySelector('.birthDate')
        const street = document.querySelector('#street')
        const city = document.querySelector('#city')
        const state = document.querySelector('#states')
        const zipCode = document.querySelector('#zip-code')
        const startDate = document.querySelector('.startDate')
        const department = document.querySelector('#departments')

        /**
         * @description Function that show or return to the initialState of form
         */
        const InitialState = () => {
            setStartDate('')
            setBirthDate('')
            department.value = ''
            city.value = ''
            lastName.value = ''
            firstName.value = ''
            street.value = ''
            state.value = ''
            zipCode.value = ''
            setErrorMessage(false)
        }

        const newEmployee = {
            firstName: capitalize(firstName.value),
            lastName: capitalize(lastName.value),
            dateOfBirth: birthDate.value,
            startDate: startDate.value,
            department: department.value,
            street: capitalize(street.value),
            city: capitalize(city.value),
            state: state.value,
            zipCode: zipCode.value,
        }
        if (
            firstName.value !== '' &&
            lastName.value !== '' &&
            birthDate.value !== '' &&
            startDate.value !== '' &&
            department.value !== '' &&
            street.value !== '' &&
            city.value !== '' &&
            state.value !== '' &&
            zipCode.value !== ''
        ) {
            dispatch(createEmployee(newEmployee))
            const employees = JSON.parse(localStorage.getItem('employee')) || []
            EmployeesData.push(newEmployee)
            console.log(newEmployee)
            localStorage.setItem('employee', JSON.stringify(employees))

            handleOpenModal()
            InitialState()
        } else {
            setErrorMessage(true)
        }
    }

    return (
        <Div>
            <Form data-testid="form">
                <Label htmlFor="first-name" className="sr-only">
                    First Name
                </Label>
                <Input
                    type="text"
                    id="first-name"
                    placeholder="First Name"
                    data-testid="firstName"
                />

                <Label htmlFor="last-name" className="sr-only">
                    Last Name
                </Label>
                <Input
                    type="text"
                    id="last-name"
                    placeholder="Last Name"
                    data-testid="lastName"
                />

                <Label htmlFor="birth-date" className="sr-only">
                    Date of Birth
                </Label>
                <DatePicker
                    selected={birthDate}
                    placeholderText="Date of Birth"
                    className="birthDate"
                    onChange={(date) => setBirthDate(date)}
                    data-testid="birthDate"
                />
                <br />
                <Label htmlFor="start-date" className="sr-only">
                    Start Date
                </Label>
                <DatePicker
                    id="start-date"
                    selected={startDate}
                    placeholderText="Start Date"
                    className="startDate"
                    onChange={(date) => setStartDate(date)}
                    data-testid="startDate"
                />
                <FieldSet>
                    <legend>Address</legend>
                    <Label htmlFor="street" className="sr-only">
                        Street
                    </Label>
                    <Input
                        type="text"
                        id="street"
                        placeholder="Street"
                        data-testid="street"
                    />

                    <Label htmlFor="city" className="sr-only">
                        City
                    </Label>
                    <Input
                        type="text"
                        id="city"
                        placeholder="City"
                        data-testid="city"
                    />

                    <Label htmlFor="states" className="sr-only">
                        States
                    </Label>
                    <DropdownComponent
                        data-testid="states"
                        selectName="states"
                        defaultValue="select a state..."
                        options={states}
                        label=""
                        selectStyle={{ color: '#000' }}
                        wrapperStyle={{}}
                    />

                    <Label htmlFor="zip-code" className="sr-only">
                        Zip Code
                    </Label>
                    <Input
                        type="number"
                        id="zip-code"
                        placeholder="Zip Code"
                        data-testid="zipCode"
                    />
                </FieldSet>
                <br />

                <Label htmlFor="departments" className="sr-only">
                    Departments
                </Label>
                <DropdownComponent
                    data-testid="departments"
                    selectName="departments"
                    defaultValue="select a department..."
                    options={departments}
                    label=""
                    selectStyle={{ color: '#000' }}
                    wrapperStyle={{}}
                />
                {errorMessage && (
                    <Alert role="alert">
                        <P>
                            Warning! <br />
                            Please fill in the blank fields. <br />
                        </P>
                    </Alert>
                )}
                <FormButtons>
                    <Button
                        type="submit"
                        onClick={saveEmployee}
                        data-testid="saveButton"
                    >
                        Save
                    </Button>
                    <Button
                        type="reset"
                        onClick={resetInputs}
                        data-testid="resetButton"
                    >
                        Reset
                    </Button>
                </FormButtons>
                {isModalOpen && (
                    <Modal
                        onClick={handleCloseModal}
                        message=" New employee created !"
                        data-testid="okModal"
                    />
                )}
            </Form>
        </Div>
    )
}

export default CreateEmployeeForm
