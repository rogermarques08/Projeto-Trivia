import styled from 'styled-components';

export const feedBackPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const feedBackContainer = styled.div`
background-color: white;
width: 439px;
height: 278px;
margin: auto;
box-shadow: 1px 4px 13px 2px rgba(0, 0, 0, 0.2);
border-radius: 10px;
text-align: center;
margin-top: 120px;
`;

export const infos = styled.div`
margin-top: 130px;
color: #B5B5B5;
`;

export const userImage = styled.img`
position: absolute;
top: 170px;
border-radius: 104.412px;
width: 145px;
height: 145px;
`;

export const logo = styled.img`
width: 136.54px;
height: 137.29px;
margin-top: 10px;
`;

export const buttonsContainer = styled.div`
width:439px;
display: flex;
margin-top: 10px;
justify-content: space-between;
`;

export const rankingBtn = styled.button`
width: 212.5px;
height: 45px;
background: #00D5E2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
color: white;
border:none;
:hover {
    cursor: pointer;
    border: 1px solid black;
}
`;

export const playAgainBtn = styled.button`
width: 212.5px;
height: 45px;
background: #2FC18C;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
color: white;
border:none;
:hover {
    cursor: pointer;
    border: 1px solid black;
}
`;
