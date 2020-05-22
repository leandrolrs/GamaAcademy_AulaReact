import styled from 'styled-components';

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    heigth: 1.5rem;
    padding: 0 .5rem;

    &focus,
    &active {
        outline: none;
        box-shadow: none;
    }
`;


export const Button = styled.button`
    heigth: 1.5 rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
`;


export const Container = styled.div`
    width: 100vw;
    heigth: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;