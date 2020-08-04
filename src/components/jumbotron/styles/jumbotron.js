import styled from 'styled-components'


export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};
    padding: 56px;
    margin: auto;
    max-width: 100%;

    @media(max-width: 813px) {
        max-width: 100%;
        flex-direction: column;
    }
`;

export const Pane = styled.div`
    width: 45%;

    @media(max-width: 813px) {
        width: 100%;
    }
`;

export const Item = styled.div`
    display: flex;
    color: white;
    overflow: hidden;
`;

export const Container = styled.section`
    background: black;

    @media(max-width: 813px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 5rem;
        }
    }
`;

export const Title = styled.h1`
    font-size: 5.6rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 36px;

    @media(max-width: 813px) {
        font-size: 3.6rem;
    }
`;

export const SubTitle = styled.p`
    font-size: 2.3rem;
    font-weight: 400;
    line-height: 1.3;
    color: white;
    
        @media(max-width: 813px) {
            font-size: 1.6rem;
        }
`;

export const Image = styled.img`
    margin-top: 23px;
    max-width: 100%;
    height: auto;
`;
