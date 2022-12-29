import styled from 'styled-components';

interface MenuItemProps {
    isSelectedItem:boolean
}

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
position: relative;
height: 98vh;
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
top: 6%;
border-radius: 20px;
`;

export const ContentContainer = styled.div`
width: 100%;
box-sizing: border-box;
background-color: #ffffff;
border-radius: 20px;
overflow:hidden;
`;

export const MenuItem = styled.div`
color: ${(props:MenuItemProps) => props.isSelectedItem ? '#3A57E8' : '#ADB5BD'};
font-size: 16px;
padding: 20px 30px;
background-color: ${(props:MenuItemProps) => props.isSelectedItem ? ' rgba(58,87,232,0.12)' : '#ffffff'};
border-bottom: ${(props:MenuItemProps) => props.isSelectedItem ? ' 2px solid #3A57E8' : ' 2px solid #ffffff'};
cursor:pointer;
`;

export const TabMenuContainer = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
border-bottom: 1px solid #f7f7f7;
`;

export const ViewBody = styled.div`
width: 100%;
box-sizing: border-box;
padding: 15px;
`;