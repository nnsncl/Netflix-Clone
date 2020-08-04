import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    margin-top: 95px;
`;

export const Inner = styled.div`
    display: flex;
    padding: 36px 56px;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    max-width: 1589px;
`;
export const Item = styled.div`
   color: white;
   margin-bottom: 9px;

   &first-of-type{
       margin-top:3px;
   }
`;
export const Frame = styled.div`
    margin-bottom: 9px;
`;
export const Title = styled.h1`
    font-size: 5.6rem;
    line-height: 1.1;
    margin: 0 0 95px 0;

    @media(max-width: 813px) {
        font-size: 3.5rem;
    }
`;
export const Header = styled.div`
    display: flex;
    font-size: 3.6rem;
    font-weight: 400;
    line-height: 1.1;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-weight: normal;
    padding: .8em 0;
    user-select:none;
    align-items:center;
    width: 100%;

    img {
        filter: brightness(0) invert(1);
        height: 24px;

        @media(max-width: 813px) {
            height: 13px;
    }
    }

    @media(max-width: 813px) {
        font-size: 2.3rem;
    }

`;
export const Body = styled.div`
    font-size: 2.3rem;
    font-weight: 400;
    line-height: 1.1;
    user-select: none;
    align-items: center;
    width: 66.6%;

    @media(max-width: 813px) {
        font-size: 1.6rem;
    }
`;