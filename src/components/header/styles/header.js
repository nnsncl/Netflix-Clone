import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;

    @media (max-width: 813px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;` }
    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    padding: 36px 0;
    height: 95px;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }

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

export const TextLink = styled.a``;