import styled from 'styled-components';
import Box from '@mui/material/Box';

export const ModalBox = styled(Box)`
  position: absolute;
  top: 18%;
  left: 28%;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  width: 550px;
`;

export const ModalBody = styled.div`
width: 100%;
box-sizing: border-box;
padding: 50px;
`;


export const ActionBtn = styled.div`
width: 100%;
box-sizing: border-box;
margin: 15px 0;
`;

export const AccountDetails = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
margin-bottom: 20px;
`;

export const MobileIcon = styled.img`
object-fit: contain;
height: 40px;
margin-right: 20px;
`;

export const Descriptions = styled.div`
color: #3A57E8;
font-size: 14px;
font-weight: 600;
`;