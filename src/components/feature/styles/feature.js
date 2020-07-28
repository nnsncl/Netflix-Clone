import styled from 'styled-components'

export const Container = styled.section`
    width: 50%;
    margin: 96px auto;
    text-align: center;
    padding: 70px 45px;

    @media(max-width: 1000px) {
        width: 100%;
    }
`;
export const Title = styled.h1`
    font-size: 5.6rem;
    line-height: 1.1;
    margin: 23px 0;

    @media(max-width: 1000px) {
        font-size: 3.3rem;
    }
`;
export const Subtitle = styled.h2`
    font-size: 4.2rem;
    font-weight: 400;

    @media(max-width: 1000px) {
        font-size: 2.3rem;
    }
`;