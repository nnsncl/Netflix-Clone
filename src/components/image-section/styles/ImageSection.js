import styled from 'styled-components'


export const Container = styled.section`
    padding: 0;
    width: 100%;
    margin-bottom: 95px;
`;

export const Frame = styled.div`
    padding: 36px 56px;
    width: 50%;

    @media(max-width: 813px){
        width: 100%;
    }
`;

export const Content = styled.img`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 95px;
`;

export const Text = styled.p`
    font-size: 3.6rem;
    font-weight: 400;
    line-height: 1.1;
    color: white;
`;