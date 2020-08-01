import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80%;
    height: 100%;
    margin: 190px auto;
`;
export const Title = styled.h1`
    font-size: 5rem;
    line-height: 1.1;
    margin-bottom: .8rem;
`;
export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2vh 2vh 0 0;

    &:last-of-type {
        margin: 2vh 0 0 0;
    }

    @media(max-width: 813px){
        margin: 2vh 0 0 0;
    }
`;
export const Picture = styled.img`
    height: 10vw;
    width: 10vw;
    border-radius: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    transition: ease .2s;
    cursor: pointer;

    &:hover {
        border: 3px solid rgba(255,255,255, 1);
        box-shadow: 0px 0px 0px 9px rgba(255,255,255,.1);
    }
    @media(max-width: 813px){
        height: 33vw;
        width: 33vw;
    }
`;
export const UserName = styled.p`
    line-height: 1.2em;
    color: #737373;
    display: block;
    font-size: 2.3rem;
    margin: 13px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: .2s ease-in-out;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition: .2s ease-in-out;

    @media(max-width: 813px){
        flex-direction: column;
    }
    
    &:hover ${UserName} {
        cursor: pointer;
        color: white;
    }
`;