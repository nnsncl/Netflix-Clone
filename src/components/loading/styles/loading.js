import styled, { createGlobalStyle } from 'styled-components'

export const LockBody = createGlobalStyle`
    body {
        overflow: hidden;
    }
`
export const ReleaseBody = createGlobalStyle`
    body {
        overflow: visible;
    }
`

export const Spinner = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 999;
    position: fixed;
    
    :after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        background-image: url(/images/misc/spinner.png);
        background-size: contain;
        background-repeat: no-repeat;
        margin-top: -5%;
        margin-left: -2.5%;
        width: 95px;
        height: 95px;
        animation-name: spin;
        animation-duration: 1000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        @media(max-width: 813px){
            margin-left: -10%;
        }
    }


    
    @-ms-keyframes spin {
        from {
            -ms-transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
        }
    }

    @-moz-keyframes spin {
        from {
            -moz-transform: rotate(0deg);
        }
        to {
            -moz-transform: rotate(360deg);
        }
    }
    
    @-webkit-keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;