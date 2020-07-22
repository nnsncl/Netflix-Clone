import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    padding: 70px 56px;
    margin: auto;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
    grid-gap: 1.5rem;

    @media (max-width: 420px) {
        grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
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
    margin-bottom: 16px;
`;

export const Title = styled.p`
    color: #757575;
    font-size: 1.6rem;
    margin-bottom: 30px;
`;

export const Text = styled.p`
    color: #757575;
    font-size: 1.3rem;
    margin-top: 24px;
`;

export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`;