import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

// Creation components that using styled-component
const DropdownSelect = styled.div``

const Select = styled.select`
    margin-bottom: 20px;
    width: 41vh;
    height: 55px;
    font-size: 2.5vh;
    border-radius: 20px;
    border: solid 2px ${colors.secondary};
`
/**
 * @description Component that show an input select
 * @returns { HTMLElement }
 */
const Dropdown = ({ htmlFor, defaultValue, options, className }) => {
    return (
        <DropdownSelect>
            {/* <Label htmlFor={htmlFor} className={hideLabel ? 'sr-only' : ''}>
                {label}
            </Label> */}
            <Select name={htmlFor} id={htmlFor} className={className}>
                <option value="">{defaultValue}</option>
                {options.map((option) => {
                    return (
                        <option
                            value={option.value ? option.value : option.option}
                            key={option.option}
                        >
                            {option.option}
                        </option>
                    )
                })}
            </Select>
        </DropdownSelect>
    )
}
//Prop-Types
Dropdown.propTypes = {
    label: PropTypes.string,
    htmlFor: PropTypes.string,
    defaultValue: PropTypes.string,
    options: PropTypes.array,
    hideLabel: PropTypes.bool,
    className: PropTypes.string,
}

export default Dropdown
