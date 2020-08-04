import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.section`
    margin: 96px auto;
    text-align: left;
    padding: 36px 56px;
    max-width: 1589px;

    @media(max-width: 813px) {
        width: 100%;
    }
`;
export const Title = styled.h1`
    font-size: 18rem;
    letter-spacing: -9px;
    line-height: .9;
    font-weight: 800;
    margin: 36px 0;
    overflow-wrap: break-word;

    @media(max-width: 813px) {
        font-size: 8.3rem;
        letter-spacing: -3px;
    }
`;
export const Subtitle = styled.h2`
    font-size: 3.6rem;
    font-weight: 400;
    margin-bottom: 59px;

    @media(max-width: 813px) {
        font-size: 2.3rem;
    }
`;

export const Link = styled(ReachRouterLink)`
    background: #db0510;
    font-size: 2.3rem;
    color: white;
    text-decoration: none;
    padding: 23px 59px;
    border-radius: 4px;
    transition: .2s ease;

    &:hover{
        background: #f40612;
    }
`;