import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
// Creation components that using styled-component
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    /* background: rgba(196, 196, 196, 0.4); */
    z-index: 50;
`
const ModalBg = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    width: 20rem;
    height: auto;
    border-radius: 5px;
    padding: 2rem;
    background-color: #fff;
`
const CloseBtn = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 32px;
    height: 32px;
    background-color: ${colors.secondary};
`
const ModalText = styled.div`
    color: ${colors.secondary};
`
const Span = styled.span`
    color: ${colors.white};
`

const Modal = ({ onClick, message }) => {
    return (
        <Overlay>
            <ModalBg>
                <CloseBtn type="button" aria-label="Close" onClick={onClick}>
                    <Span className="m-0">X</Span>
                </CloseBtn>
                <ModalText>
                    <p className="m-0">{message}</p>
                </ModalText>
            </ModalBg>
        </Overlay>
    )
}

Modal.propTypes = {
    message: PropTypes.string.isRequired,
    onclick: PropTypes.func,
}

export default Modal
