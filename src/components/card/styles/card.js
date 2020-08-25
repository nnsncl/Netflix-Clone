import styled from 'styled-components';

export const Title = styled.p`
    font-size: 3.6rem;
    color: white;
    font-weight: 800;
    margin: 56px 56px 23px 56px;

    @media(max-width: 813px){
        font-size: 1.9rem;
        margin: 36px 36px 13px 36px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    
    > ${Title} {
        @media (max-width: 813px) {
            margin-left: 23px;
        }
    }
    
    &:last-of-type {
        margin-bottom: 0;
    }

`;

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};

    > ${Container}:first-of-type {
        @media (min-width: 813px) {
            margin-top: -190px;
        }
    }
`;

export const SubTitle = styled.p`
    font-size: 1.9rem;
    color: white;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`;

export const Text = styled.p`
    margin-top: 9px;
    font-size: 1.3rem;
    color: white;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
`;

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 13px;
    background: linear-gradient(0deg, rgba(0,0,0,3) 0%, rgba(255,255,255,0) 100%);
    width: 100%;
`;

export const Image = styled.img`
    border: 0;
    width: 100%;
    cursor: pointer;
    height: auto;
    padding: 0;
    margin: 0;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 3px;
    position: relative;
    cursor: pointer;
    width: 100%;
    transition: ease .2s;
    
    &:hover {
        transform: scale(1.3);
        z-index: 2;
    }
    
    @media (min-width: 813px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
            display: block;
            z-index: 2;
        }
    }
    
    &:first-of-type {
        margin-left: 56px;
        
        @media (max-width: 813px) {
            margin-left: 23px;
        }
    }
    
    &:last-of-type {
        margin-right: 56px;
        
        @media (max-width: 813px) {
            margin-right: 23px;
        }
    }
`;

export const FeatureText = styled.p`
    font-size: 1.9rem;
    color: white;
    margin: 0;
    
    @media (max-width: 813px) {
        line-height: 22px;
    }
`;

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    height: 560px;
    background-position-x: right;
    background-repeat: no-repeat;
    
    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;
        
        ${Title} {
            font-size: 1.9rem;
            margin-bottom: 13px;
        }
        ${FeatureText} {
            font-size: 1.3rem;
        }
    }
`;

export const FeatureTitle = styled(Title)`
    margin-left: 0;
`;

export const FeatureClose = styled.button`
    color: white;
    position: absolute;
    right: 23px;
    top: 23px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    
    img {
        filter: brightness(0) invert(1);
        width: 23px;
    }
`;

export const Content = styled.div`
    margin: 56px;
    max-width: 33.3%;
    line-height: normal;
    
    @media (max-width: 813px) {
        margin: 23px;
        max-width: none;
    }
`;

export const Maturity = styled.div`
    background: ${({ rating }) => (rating >= 15 ? '#db0510' : '#737373')};
    border-radius: 100%;
    width: auto;
    padding: 13px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    font-size: 12px;
`;