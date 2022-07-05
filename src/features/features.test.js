import reducer, { createEmployee } from './employee'

test('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        employees: [],
    })
})
test('Should add a employee  in an empty array', () => {
    const initialState = {
        employees: [],
    }
    const newEmployee = {
        firstName: 'Tony',
        lastName: 'Stark',
        birthDate: '05/29/1970',
        street: '10880 Malibu Point',
        city: 'Malibu',
        state: 'CA',
        zipCode: '90265',
        startDate: '08/13/1995',
        department: 'Engineering',
    }
    expect(reducer(initialState, createEmployee(newEmployee))).toEqual({
        employees: [
            {
                firstName: 'Tony',
                lastName: 'Stark',
                birthDate: '05/29/1970',
                street: '10880 Malibu Point',
                city: 'Malibu',
                state: 'CA',
                zipCode: '90265',
                startDate: '08/13/1995',
                department: 'Engineering',
            },
        ],
    })
})

test('Should add a employee  an existing list', () => {
    const initialState = {
        employees: [
            {
                firstName: 'Tony',
                lastName: 'Stark',
                birthDate: '05/29/1970',
                street: '10880 Malibu Point',
                city: 'Malibu',
                state: 'California',
                zipCode: '90210',
                startDate: '08/13/1995',
                department: 'Engineering',
            },
        ],
    }

    const newEmployee = {
        firstName: 'Bruce',
        lastName: 'Wayne',
        birthDate: '04/17/1915',
        street: 'Manor of Wayne',
        city: 'Gotham City',
        state: 'New Jersey',
        zipCode: '89800',
        startDate: '03/11/1996',
        department: 'Legal',
    }

    expect(reducer(initialState, createEmployee(newEmployee))).toEqual({
        employees: [
            {
                firstName: 'Tony',
                lastName: 'Stark',
                birthDate: '05/29/1970',
                street: '10880 Malibu Point',
                city: 'Malibu',
                state: 'California',
                zipCode: '90210',
                startDate: '08/13/1995',
                department: 'Engineering',
            },
            {
                firstName: 'Bruce',
                lastName: 'Wayne',
                birthDate: '04/17/1915',
                street: 'Manor of Wayne',
                city: 'Gotham City',
                state: 'New Jersey',
                zipCode: '89800',
                startDate: '03/11/1996',
                department: 'Legal',
            },
        ],
    })
})
