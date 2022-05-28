import styled from 'styled-components';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
min-height: 350px;
display: flex;
`;

export const ToggleModalBtn = styled.div`
display: inline-flex;
flex-flow: row;
align-items: center;
justify-content: center;
width: 272px;
height: 158px;
border: 1px solid #3A57E8;
border-radius: 8px;
cursor: pointer;

`;

export const AddCircleIconIcon = styled(AddCircleIcon)`
color: #3A57E8;
height: 30px;
width: 30px;
`;
