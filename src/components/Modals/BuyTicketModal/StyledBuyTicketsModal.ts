import styled from 'styled-components';
import Box from '@mui/material/Box';
import * as UIConstants from '../../../UIConstants';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

interface TicketType {
    type: string,
    selected: boolean
}

const bonzeBgColor = 'linear-gradient(76.64deg, #775345 5.43%, #CA9274 29.33%, #9E7C59 68.72%, #D8A58A 90.4%)';

const silverColor = 'linear-gradient(80.76deg, #CECED5 12.22%, #E4E4E8 87.16%);';

const GoldColor = 'linear-gradient(76.64deg, #EFDFA3 5.43%, #CE8631 29.33%, #C1A053 47.47%, #F4C045 68.72%, #C88221 90.4%);';

const PlatinumColor = 'linear-gradient(76.68deg, #797979 10.83%, #D4D4D4 44.62%, #D2D2D2 45.2%, #8D8D8D 84.98%);';

export const ModalBox = styled(Box)`
  position: absolute;
  top: 10%;
  left: 24%;
  min-width: 400px;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  ${UIConstants.mobileView}{
      min-width: 100%;
      width: 100%;
      left: 0;
      top: 5%;
  }
`;

export const ModalHeader = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items:center;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid #E9EFFF;
${UIConstants.mobileView}{
    padding: 15px;
}
`;

export const Title = styled.div`
font-size: 16px;
color: #000000;
`;

export const CloseIcon = styled(CloseOutlinedIcon)`
color: #000000;
cursor: pointer;
`;
 

export const ModalBody = styled.div`
width: 100%;
box-sizing: border-box;
padding: 30px;
${UIConstants.mobileView}{
    padding: 15px;
}
`;

export const SectionTitle = styled.div`
font-size:14px;
font-weight: 600;
color: #000000;
`;

export const TicketsLists = styled.div`
width:100%;
box-sizing: border-box;
display: flex;
flex-flow: row wrap;
align-items: center;
justify-content: center;
gap: 10px;
margin: 15px 0;
`;

export const Ticket = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: space-between;
flex-basis: 48%;
height: 65px;
padding: 10px;
border-radius: 6px;
cursor: pointer;
border: ${(props:TicketType) => props.selected ? '4px solid #FCA027' : '4px solid #ffffff'};
background: ${(props:TicketType) => {
    return props.type === "bronze" ? bonzeBgColor : props.type === 'silver' ? silverColor : props.type === 'gold' ? GoldColor : PlatinumColor;
}};
`;

export const SummarySection = styled.div`
width: 100%;
box-sizing: border-box;
font-size: 14px;
color: #000000;
text-align: right;
margin-top: 20px;
span{
    font-size: 20px;
    margin-left: 15px;
};
${UIConstants.mobileView}{
    margin-top: 10px;
}
`;

export const ActionSection = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: flex-end;
justify-content: flex-end;
margin-top: 30px;
Button:nth-child(1){
    margin-right: 10px;
};
`;