import styled from 'styled-components'


export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};
    max-width: 1400px;
    margin: auto;
    width: 100%;

    @media(max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Pane = styled.div`
    width: 50%;

    @media(max-width: 1000px) {
        width: 100%;
        padding: 0 4.5rem;
        text-align: center;
    }
`;

export const Item = styled.div`
    display: flex;
    border-bottom: .8rem solid  #222;
    padding: 5rem 5%;
    color: white;
    overflow: hidden;
`;

export const Container = styled.section`
    background: black;

    @media(max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 5rem;
        }
    }
`;

export const Title = styled.h1`
    font-size: 5rem;
    line-height: 1.1;
    margin-bottom: .8rem;

    @media(max-width: 600px) {
        font-size: 3.5rem;
    }
`;

export const SubTitle = styled.h2`
        font-size: 2.6rem;
        font-weight: normal;
        line-height: normal;

        @media(max-width: 600px) {
            font-size: 1.8rem;
        }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;
