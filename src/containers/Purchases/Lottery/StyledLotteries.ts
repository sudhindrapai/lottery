import styled from 'styled-components';

interface TabMenuItemProps{
    isActive:boolean
}

interface ValueProps{
    width: number|string,
    textAlign:string
}

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
padding: 50px;
`;

export const TabMenuWrapper = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
`;

export const TabMenuItem = styled.div`
color: ${(props:TabMenuItemProps) => props.isActive ? '#ffffff' : '#ADB5BD'};
background-color: ${(props:TabMenuItemProps) => props.isActive ? '#3A57E8' : '#F1F3FF'};
padding: 16px;
cursor: pointer;
`;

export const CollapseHeader = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
border: 1px solid #E8E8E8;
border-bottom: none;
padding: 15px 10px;
background-color: #F9F9F9;
`;

export const Label = styled.div`
color: #000000;
width: ${(props:ValueProps) => props.width};
text-align: ${(props:ValueProps) =>props.textAlign};
font-weight: 600;
font-size: 14px;
`;