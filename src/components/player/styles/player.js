import styled from 'styled-components'

export const Container = styled.div``;

export const Overlay = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.95);
`;
export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    video {
        height: auto;
        width: 100%;
    }
`;

export const Button = styled.button`
    background: white;
    border: none;
    font-size: 2.3rem;
    color: black;
    text-decoration: none;
    padding: 23px 36px;
    border-radius: 4px;
    transition: .2s ease;
    max-width: 190px;
    cursor: pointer;

    &:hover{
        background: lightgrey;
    }

    &:active, &:focus {
        outline: none;
    }
`;