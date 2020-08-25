import styled from 'styled-components'


export const Container = styled.section`
    padding: 0;
    width: 100%;
`;

export const Frame = styled.div`
    padding: 36px 56px;
    width: 50%;
    text-align: left;
    max-width: 1589px;
    margin: 190px auto;

    @media(max-width: 813px){
        width: 100%;
        margin: 95px auto;
    }
`;

export const Content = styled.img`
    width: 100%;
    box-sizing: border-box;
`;

export const Text = styled.p`
    font-size: 3.6rem;
    font-weight: 400;
    line-height: 1.1;
    color: white;

    @media(max-width: 813px) {
        font-size: 2.3rem;
    }
`;