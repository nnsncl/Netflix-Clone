import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 66.6vh;
    background: rgb(0, 0, 0, 0.6);
    border-radius: 8px;
    width: 25%;
    margin: 96px auto;
    padding: 44px 56px;
    transition: ease .2s;

    @media(max-width: 1441px){
        width: 50%;
    }

    @media(max-width: 589px){
        width: 90%;
    }
`;
export const Frame = styled.form`
    display: flex;
    flex-direction: column;

`;
export const Input = styled.input`
    border-radius: 4px;
    background: #333;
    border: 1px solid transparent;
    color: #fff;
    height: 50px;
    line-height: 50px;
    padding: 13px 19px;
    margin-bottom: 19px;
    transition: ease .2s;

    &:hover{
        background: #454545;
        border: 1px solid rgba(255,255,255,.3);
        box-shadow: 0px 0px 0px 3px rgba(255,255,255,.3);

        &::placeholder{
            color:white;
            transition: ease .2s;
        }
    }
    
    &:focus, &:active{
        outline: none;
        background: #454545;
        border: 1px solid rgba(255,255,255,.3);
    }

    &:last-of-type{
        margin-bottom: 9px;
    }

`;
export const Button = styled.button`
    border: none;
    color: white;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    padding: 13px 19px;
    margin: 23px 0;
    background: #e50914;
    transition: ease .2s;

    &:hover{
        cursor: pointer;
        background: #f40612;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    `;
export const Title = styled.h1`
    font-size: 3.2rem;
    line-height: 1.1;
    margin-bottom: .8rem;
    padding: 0 0 33px 0;

    @media(max-width: 600px) {
        font-size: 3.5rem;
    }
`;
export const Content = styled.p`
    font-size: 16px;
    color: #737373;
    margin-bottom: 9px;
`;
export const ContentSmall = styled.p`
    font-size: 13px;
    color: #737373;
`;
export const Helper = styled.p`
    font-size: 1.3rem;
    color: #737373;
`;
export const Link = styled(ReachRouterLink)`
    color: white;
    font-weight: 800;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;