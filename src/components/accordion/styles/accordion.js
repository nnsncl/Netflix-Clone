import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    margin: auto;
    width: 815px;
`;
export const Item = styled.div`
   color: white;
   margin-bottom: 10px;

   &first-of-type{
       margin-top:3px;
   }
`;
export const Frame = styled.div`
    margin-bottom: 10px;
`;
export const Title = styled.h1`
    font-size: 5rem;
    line-height: 1.1;
    margin: 0 0 8px 0;

    @media(max-width: 600px) {
        font-size: 3.5rem;
    }
`;
export const Header = styled.div`
    display: flex;
    font-size: 2.6rem;
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

        @media(max-width: 600px) {
            height: 16px;
    }
    }

    @media(max-width: 600px) {
        font-size: 1.6rem;
    }

`;
export const Body = styled.div`
    font-size: 2.6rem;
    font-weight: normal;
    line-height: normal;
    padding: 0.8em 0;
    user-select: none;
    align-items: center;
    width: 100%;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);

    @media(max-width: 600px) {
        font-size: 1.6rem;
    }
`;