import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1589px;
    padding: 95px 56px;
    margin: auto;

    @media (max-width: 813px) {
        max-width: 100%;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
    grid-gap: 1.5rem;

    @media (max-width: 813px) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Link = styled.a`
    color: #757575;
    font-size: 1.3rem;
    text-decoration: none;
    margin-bottom: 13px;
    transition: .2s ease;

    &:hover{
        color:white;
    }
`;

export const Title = styled.p`
    color: #757575;
    font-size: 2.3rem;
    margin-bottom: 36px;
`;

export const Text = styled.p`
    color: #757575;
    font-size: 1.3rem;
    margin-top: 23px;
`;

export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`;