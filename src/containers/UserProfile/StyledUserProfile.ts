import styled from 'styled-components';

interface TabMenuElement {
    isSelectdItem: boolean
}

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
position: relative;
`;

export const Viewheader = styled.div`
width: 100%;
box-sizing: border-box;
max-height: 160px;
height: 160px;
background-color: #3A57E8;
font-size: 16px;
font-weight: 500;
padding-top: 30px;
`;

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
padding: 50px;
position: absolute;
top: 57%;
`;

export const ProfileContainer = styled.div`
width: 100%;
box-sizing: border-box;
background-color: #ffffff;
border-radius: 20px;
overflow: hidden;
`;

export const TabMenuContainer = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
max-height: 170px;
border-bottom: 1px solid #E8E8E8;
`;

export const TabMenuElement = styled.div`
font-size: 16px;
color: ${(props:TabMenuElement) => props.isSelectdItem ? '#3A57E8':'#200E32'};
padding: 20px 30px;
background-color: ${(props:TabMenuElement) => props.isSelectdItem ? 'rgba(58, 87, 232, 0.12);':'#ffffff'};
border-bottom: ${(props:TabMenuElement) => props.isSelectdItem ? '2px solid #3A57E8':''};
`;

export const TabMenuBody = styled.div`
width: 100%;
box-sizing: border-box;
padding: 30px;
`;

export const TabMenuContent = styled.div`
max-width: 674px;
`;