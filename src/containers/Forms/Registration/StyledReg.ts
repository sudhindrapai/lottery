import styled from 'styled-components';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const LoginAccountContainer = styled.div`
display: inline-block;
width: 100%;
box-sizing: border-box;
text-align: center;
font-weight: 500;
font-size: 14px;
line-height: 18px;
margin: 16px 0;
cursor: pointer;
color: #ADB5BD;
`;

export const LoginAccountOption = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 18px;
cursor: pointer;
color: #000000;
margin-left: 5px;
`;

export const TermsConditionContainer = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
margin: 10px 0 20px 0;
`;

export const EmptyCheckbox = styled(CheckBoxOutlineBlankIcon)`
color: #000000;
margin-right: 10px;
cursor: pointer;
`;

export const SelectedCheckbox = styled(CheckBoxIcon)`
color: #000000;
margin-right: 10px;
cursor: pointer;
`;

export const TermsText = styled.div`
width: 100%;
box-sizing: border-box;
font-size: 14px;
color: #ADB5BD;
font-weight: 400;
text-align: left;
span{
    color: #3A57E8;
    text-decoration: underline;
    cursor: pointer;
}
`;