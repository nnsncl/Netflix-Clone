import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;

    ${'' /* @media (max-width: 813px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;` }
    } */}
`;

export const Container = styled.div`
    display: flex;
    padding: 56px 56px 95px 56px;
    height: 95px;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(180deg, rgba(0,0,0,.6) 0%, rgba(255,255,255,0) 100%);

    a {
        display: flex;
    }

    @media (max-width: 813px) {
        padding: 36px;
    }
`;

export const Feature = styled.div`
    display: flex;
    flex-direction: column;
    padding: 95px 56px 190px 56px;
    width: 50%;
    max-width: 1589px;
    background: linear-gradient(45deg, rgba(0,0,0,9) 0%, rgba(255,255,255,0) 33%);

    @media(max-width: 1281px){
        width: 66.6%;
    }

    @media(max-width: 813px){
        width: 100%;
        padding: 56px;
    }

    ${'' /* @media(max-width: 813px){
        display: none;
    } */}
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Link = styled.a`
    font-size: 1.6rem;
    text-decoration: none;
    color: white;
    margin-right: 23px;
    cursor: pointer;
    font-weight: ${({ active })=> (active === 'true' ? '700' : 'normal')};

    &:last-of-type{
        margin-right: 0;
    }
`;

export const Logotype = styled.img`
    height: 36px;
    margin-right: 40px;
`;

export const LogoTitle = styled.img`
    width: 100%;
    max-width: 380px;
    height: auto;
    margin-bottom: 36px;
`;

export const Title = styled.h2`
    font-size: 9.5rem;
    letter-spacing: -3px;
    line-height: .9;
    font-weight: 800;
    margin: 36px 0;
    overflow-wrap: break-word;
`;

export const Content = styled.p`
    display: block;
    font-size: 3.6rem;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 59px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,.45);

    @media(max-width: 813px) {
        font-size: 1.9rem;
        line-height: 1.2;
    }
`;

export const Button = styled.button`
    background: #db0510;
    border: none;
    font-size: 2.3rem;
    color: white;
    text-decoration: none;
    padding: 23px 36px;
    border-radius: 4px;
    transition: .2s ease;
    max-width: 190px;
    cursor: pointer;

    &:hover{
        background: #f40612;
    }

`;

export const ButtonLink = styled(ReachRouterLink)`
    text-decoration:none;
    color: white;
    display:block;
    font-size: 1.6rem;
    background-color: #db0510;
    padding: 13px 19px;
    line-height: 1;
    transition: .2s ease;
    border: 0;
    border-radius: 4px;

    &:hover{
        cursor: pointer;
        background: #f40612;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    background: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        max-width: 16px;
    }

    &:active, &:focus{
        outline: none
    }
`;

export const SearchInput = styled.input`
    border: 0;
    background: transparent;
    color: white;
    transition: width .2s;
    max-height: 56px;
    font-size: 16px;
    font-weight: bold;
    opacity: 0;

    &::placeholder{
        color: white;       
    }

    margin-left: ${({ active }) => ( active === true ? '9px' : '0' )};
    padding: ${({ active }) => ( active === true ? '0 13px' : '0' )};
    width: ${({ active }) => ( active === true ? '190px' : '0' )};
    opacity: ${({ active }) => ( active === true ? '1' : '0' )};

    @media(max-width: 813px){
        width: ${({ active }) => ( active === true ? '95px' : '0' )};
    }

    &:active, &:focus{
        outline: none
    }
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border-radius: 100%;
    border: 0;
    width: 36px;
    height: 36px;
    cursor: pointer;

    &:active, &:focus{
        outline: none;
    }
`;


export const Dropdown = styled.div`
    display: none;
    position: absolute;
    background-color: black;
    border-radius: 4px;
    padding: 23px 36px;
    top: 36px;
    right: 0;

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
        font-weight: bold;
    }

    ${Group} {
    margin-bottom: 23px;
    padding-bottom: 23px;
    border-bottom: 1px solid rgba(255,255,255,.3);

        ${Link}, ${Picture} {
            cursor: default;
        }

        &:last-of-type {
            margin-bottom: 9px;
            padding-bottom: 0;
            border-bottom: none; 
        }
        
    }

    button {
        margin-right: 13px;
    }
    
    p {
        font-size: 13px;
        margin-bottom: 0;
        margin-top: 0;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 23px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`;