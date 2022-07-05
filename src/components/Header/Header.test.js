import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Test
import { fireEvent, render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { createMemoryHistory } from 'history'
import 'regenerator-runtime/runtime'

// store
import { Provider } from 'react-redux'
import store from '../../utils/store'

// Components
import Header from './index'

// Pages
import CreateEmployee from '../../pages/CreateEmployee'
import EmployeesList from '../../pages/EmployeeList'
import Home from '../../pages/Home'

describe('When the Header is rendered', () => {
    test('Then I can see the Header', () => {
        render(
            <Router>
                <Header />
            </Router>
        )
        const header = screen.getByTestId('header')
        expect(header).not.toBeNull()
    })
    describe('When I click on the link "employeeList"', () => {
        test('Then the employees list page should be render', () => {
            const history = createMemoryHistory(['/employeeList'])
            render(
                <Provider store={store}>
                    <Router history={history}>
                        <Header />
                        <Routes>
                            <Route
                                path="/employeeList"
                                element={<EmployeesList />}
                            />
                        </Routes>
                    </Router>
                </Provider>
            )
            const employeesLink = screen.getByTestId('toEmployeeList')
            expect(employeesLink).not.toBeNull()
            fireEvent.click(employeesLink)
            const title = screen.getByText('Current Employees')
            expect(title).toBeInTheDocument()
        })
    })
    describe('When I click on the link  "createEmployee"', () => {
        test('Then the Create Employee page should be render', () => {
            const history = createMemoryHistory(['/createEmployee'])
            render(
                <Provider store={store}>
                    <Router history={history}>
                        <Header />
                        <Routes>
                            <Route
                                path="/createEmployee"
                                element={<CreateEmployee />}
                            />
                        </Routes>
                    </Router>
                </Provider>
            )
            const createLink = screen.getByTestId('toCreateEmployee')
            expect(createLink).not.toBeNull()
            fireEvent.click(createLink)
            const title = screen.getByText('Employee Information')
            expect(title).toBeInTheDocument()
        })
    })
    describe('When I click on the logo or brand text link', () => {
        test('Then the home page should be render', () => {
            const history = createMemoryHistory(['/'])
            render(
                <Provider store={store}>
                    <Router history={history}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </Router>
                </Provider>
            )
            const homeLink = screen.getByTestId('toHome')
            expect(homeLink).not.toBeNull()
            fireEvent.click(homeLink)
            const title = screen.getByText('WELCOME TO HRnet !')
            expect(title).toBeInTheDocument()
        })
    })
})
