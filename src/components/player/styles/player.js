import styled from 'styled-components'

export const Container = styled.div``;
export const Overlay = styled.div``;
export const Inner = styled.div``;
export const Close = styled.button``;
export const Button = styled.button`
    background: white;
    border: none;
    font-size: 2.3rem;
    color: black;
    text-decoration: none;
    padding: 23px 36px;
    border-radius: 4px;
    transition: .2s ease;
    max-width: 190px;
    cursor: pointer;

    &:hover{
        background: lightgrey;
    }

    &:active, &:focus {
        outline: none;
    }
`;