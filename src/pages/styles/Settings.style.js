import styled from 'styled-components';

export const settingsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`;

export const settingsInfosContainer = styled.div`
width: 489px;
height: 488px;
background-color: white;
display: flex;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
flex-direction: column;
border-radius: 10px;
justify-content: space-around;
align-items: center;
position: relative;
`;

export const title = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 30px;
padding-top: 10px;
line-height: 150%;
color: #3C1B7A;
text-transform: uppercase;
`;

export const logo = styled.img`
width: 177.79px;
height: 178.76px;
position: absolute;
top: -130px;
`;

export const selects = styled.select`
width: 387px;
height: 45px;
font-family: 'Verdana';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: #6B7588;
`;

export const apllyButton = styled.button`
width: 386px;
height: 45px;
background: #2FC18C;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
color: white;
font-weight: 700;
border: none;
:hover {
    cursor: pointer;
    border: 1px solid black;
}
`;
