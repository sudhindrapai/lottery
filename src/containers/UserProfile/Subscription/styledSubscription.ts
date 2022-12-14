import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: column;
align-items: flex-start;
justify-content: flex-start;
`;

export const Title = styled.div`
font-size: 18px;
font-weight: 600;
color: #000000;
`;

export const ActionBtnContainer = styled.div`
width: 100%;
box-sizing: border-box;
width: auto;
margin: 30px 0;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
button{
    margin-right: 10px;
}
`;

export const MembershipDetail = styled.div`
margin-top: 15px;
width: 100%;
box-sizing: border-box;
color: rgba(32,14,50,0.5);
font-size: 14px;
font-weight: 400;
text-align:left;
ol {
    padding-left: 15px;
    li{
        padding-bottom: 10px;
    }
}
`;