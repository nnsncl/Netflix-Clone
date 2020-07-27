import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }

`;
export const Input = styled.input`
    width: 77%;
    border: 0;
    padding: 0 23px;
    height: 70px;
    
    &::placeholder{
        font-size: 16px;
    }

    &:focus, &:active{
        outline: none;
    }

    @media (max-width: 1000px) {
        width: 100%;
    }
`;
export const Button = styled.button`
    background: #db0510;
    color: white;
    height: 70px;
    padding: 0 23px;
    border:0; 
    font-size: 23px;
    width: 23%;
    transition: ease .2s;
    line-height: 0;

    &:hover{
        cursor: pointer;
        background: #f40612;
    }

    @media (max-width: 1000px) {
        margin-top: 23px;
        width: 50%;
    }
`;
export const Content = styled.h3`
    font-size: 1.8rem;
    font-weight: 400;
    padding: 23px 0;
    text-align: center;
`;