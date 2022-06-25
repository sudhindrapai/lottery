import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
`;

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: flex-start;
gap: 30px;
padding: 30px;
`;

export const ImageSection = styled.div`
display: flex;
flex-basis: 49%;
`;

export const DetailSection = styled.div`
display: flex;
flex-basis: 49%;
flex-flow: column;
text-align: left;
`;

export const Title = styled.div`
font-weight: 400;
font-size: 41px;
line-height: 50px;
color: #000000;
margin-bottom: 8px;
`;

export const ProductType = styled.div`
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #000000;
margin-bottom: 24px;
`;

export const Description = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 36px;
color: #000000;
margin-bottom: 30px;
`;

export const ProgressBarContainer = styled.div`
width: 100%;
box-sizing: border-box;
margin-bottom: 16px;
`;

export const ProgressBarDetail = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: space-between;
margin-top: 16px;
`;

export const EngagedUrsers = styled.div`
display: flex;
flex-basis: 50%;
text-align: left;
color: #ADB5BD;
align-items: center;
justify-content: flex-start;
`;

export const TotalUsers = styled.div`
display: flex;
flex-basis: 50%;
text-align: right;
color: #ADB5BD;
align-items: center;
justify-content: flex-end;
`;

export const ActionDetail = styled.div`
width: 100%;
box-sizing: border-box;
text-align: left;
margin: 50px 0 30px 0;
Button{
    width: 270px
}
`;

export const TicketDetail = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
margin-bottom: 8px;
`;

export const Label = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-transform: capitalize;
color: #000000;
margin-right: 10px;
`;

export const Value = styled.div`
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: capitalize;
color: #000000;
`;

export const Line = styled.div`
width: 100%;
box-sizing: border-box;
border-bottom: 2px solid #ADB5BD;
margin: 24px 0;
`;

export const SellerSectionTitle = styled.span`
font-weight: 400;
font-size: 14px;
color: #000000;
display: inline;
border-bottom: 1px solid #ADB5BD;
width: fit-content;
padding: 0 10px 3px 10px;
`;

export const SellerDetailWrapper = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
margin: 15px 0;
`;

export const ProfileImg = styled.img`
height: 80px;
width: 80px;
border-radius: 50%;
display: flex;
flex-basis: 10%;
`;

export const SellerDetail = styled.div`
display: flex;
flex-basis: 90%;
margin-left: 15px;
`;

export const SellerName= styled.div`
font-weight: 500;
font-size: 24px;
line-height: 15px;
color: #ADB5BD;
`;

export const ItemDetails = styled.div`
width: 100%;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
margin-top: 15px;
`;

export const ItemDetailLabel = styled.div`
width: 100px;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #ADB5BD;
`;
export const SimilarProductContainer = styled.div`
width: 100%;
box-sizing: border-box;
margin: 50px 0;
`;

export const BreadCrumb = styled.div`
width: 100%;
box-sizing: border-box;
height: 67px;
display: flex;
align-items: center;
justify-content: flex-start;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-transform: capitalize;
color: #200E32;
background-color: #ffffff;
padding:0 30px;
margin-top: 2px;
`;

export const BreadCrumbItem = styled.div`
    color: #200E32;
    padding: 0 4px;
    cursor: pointer;
`;