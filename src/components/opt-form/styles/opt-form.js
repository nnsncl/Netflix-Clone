import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
`;
export const Input = styled.input`
    height: 48px;
    padding: 10px;
    min-width:33vw;
    
    &::placeholder{
        font-size: 14px;
    }

    &:focus, &:active{
        outline: none;
    }
`;
export const Button = styled.button`
    height: 48px;
    padding: 0 10px;
    color: white;
    border: none;
    background: red;
`;
export const Content = styled.h3`
    font-size: 1.8rem;
    padding: 0 3rem;
`;