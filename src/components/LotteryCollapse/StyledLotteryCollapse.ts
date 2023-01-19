import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ValueProps{
    width: number|string,
    textAlign:string
}

export const Values = styled.div`
width: 100%;
box-sizing: border-box;
max-height: 500px;
overflow-y: auto;
`;

export const CollapseBtn = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
padding: 10px 20px;
border: 1px solid #E8E8E8;
border-bottom: none;
cursor:pointer;
`;


export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
position: relative;
`;


export const ChevronDown = styled(ExpandMoreIcon)`
color: #000000;
`;

export const Value = styled.div`
color: #000000;
width: ${(props:ValueProps) => props.width};
text-align: ${(props:ValueProps) =>props.textAlign};
`;

export const CollapseBody = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
background-color:#F9F9F9;
border: 1px solid #E8E8E8;
min-height: 200px;
padding: 10px;
`;

export const TicketDetails = styled.div`
display: flex;
flex: 1;
border-right: 1px solid #E8E8E8;
flex-flow: row Wrap;
align-items: center;
justify-content: center;
`;

export const TicketDetail = styled.div`
display: flex;
flex-flow: column;
text-align: left;
flex-basis: 40%;
margin-bottom: 10px;
`;

export const TicketDetailTitle = styled.div`
font-size: 14px;
color: rgba(32, 14, 50, 0.5);
font-weight: 400;
margin-bottom: 5px;
`;

export const TicketDetailValue = styled.div`
font-size: 18px;
color: #200E32;
font-weight: 500;
`;

export const TicketImage = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
`;

export const ImageContainer = styled.div`
min-height: 200px;
background-color: #000000;
width: 450px;
`;