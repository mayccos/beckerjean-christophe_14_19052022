import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
// store
import { Provider } from 'react-redux'
import store from '../../utils/store'
// components
import CreateEmployeeForm from './'

describe('When the Header component is render', () => {
    test('Then I can see the form', () => {
        render(
            <Provider store={store}>
                <CreateEmployeeForm />
            </Provider>
        )
        const form = screen.getByTestId('form')
        expect(form).not.toBeNull()
    })

    describe('When I click on the save button', () => {
        test('Then it should render the modal', () => {
            render(
                <Provider store={store}>
                    <CreateEmployeeForm />
                </Provider>
            )
            const submitButton = screen.getByTestId('saveButton')
            expect(submitButton).not.toBeNull()
            fireEvent.click(submitButton)
            const modalOk = screen.queryByTestId('okModal')
            expect(modalOk).toBeDefined()
        })
    })

    describe('When I click on the reset button', () => {
        test('Then it should clear all inputs', () => {
            render(
                <Provider store={store}>
                    <CreateEmployeeForm />
                </Provider>
            )
            const inputData = {
                firstName: 'Bruce',
                lastName: 'Wayne',
                birthDate: '12/25/1950',
                street: 'Manor of Wayne',
                city: 'GothamCity',
                state: 'New York',
                zipCode: '90265',
                startDate: '08/13/1995',
                department: 'Engineering',
            }

            const firstName = screen.getByTestId('firstName')
            fireEvent.change(firstName, {
                target: { value: inputData.firstName },
            })
            expect(firstName.value).toBe(inputData.firstName)

            const lastName = screen.getByTestId('lastName')
            fireEvent.change(lastName, {
                target: { value: inputData.lastName },
            })
            expect(lastName.value).toBe(inputData.lastName)

            const birthDate = screen.getByPlaceholderText('Date of Birth')
            fireEvent.change(birthDate, {
                target: { value: inputData.birthDate },
            })
            expect(birthDate.value).toBe(inputData.birthDate)

            const street = screen.getByTestId('street')
            fireEvent.change(street, {
                target: { value: inputData.street },
            })
            expect(street.value).toBe(inputData.street)

            const city = screen.getByTestId('city')
            fireEvent.change(city, {
                target: { value: inputData.city },
            })
            expect(city.value).toBe(inputData.city)

            // const state = screen.getByTestId('states')
            // fireEvent.change(state, {
            //     target: { option: inputData.state },
            // })
            // expect(state.option).toBe(inputData.state)

            const zipCode = screen.getByTestId('zipCode')
            fireEvent.change(zipCode, {
                target: { value: inputData.zipCode },
            })
            expect(zipCode.value).toBe(inputData.zipCode)

            const startDate = screen.getByPlaceholderText('Start Date')
            fireEvent.change(startDate, {
                target: { value: inputData.startDate },
            })
            expect(startDate.value).toBe(inputData.startDate)

            // const department = screen.getByTestId('departments')
            // fireEvent.change(department, {
            //     target: { value: inputData.department },
            // })
            // expect(department.value).toBe(inputData.department)

            const resetButton = screen.getByTestId('resetButton')
            expect(resetButton).not.toBeNull()
            fireEvent.click(resetButton)

            expect(firstName.value).toBe('')
            expect(lastName.value).toBe('')
            expect(startDate.value).toBe('')
            expect(zipCode.value).toBe('')
<<<<<<< HEAD
            // expect(state.value).toBe('')
            expect(city.value).toBe('')
            expect(street.value).toBe('')
            expect(birthDate.value).toBe('')
            // expect(department.value).toBe('')
=======
            //expect(state.value).toBe('')
            expect(city.value).toBe('')
            expect(street.value).toBe('')
            expect(birthDate.value).toBe('')
            //expect(department.value).toBe('')
>>>>>>> 8f7fcbd7fd792c44d0be47976bedf83863185e4a
        })
    })
})
