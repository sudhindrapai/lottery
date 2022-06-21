import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
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

export const Container = styled.div`
width:100%;
box-sizing: border-box;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: flex-start;
padding: 50px 150px;
`;

export const FormSection = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: column;
background-color: #ffffff;
margin-bottom: 24px;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12);
border-radius: 8px;
align-items: flex-start;
justify-content: flex-start;
`;

export const TwoSectionForm = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
${FormSection}{
    flex: 1;
    flex-basis: 50%;
};
${FormSection}:first-child{
    margin-right: 30px;
}
`;

export const Title = styled.div`
width: 100%;
box-sizing: border-box;
padding: 24px;
border-bottom: 1px solid #E9EDF5;
color:#000000;
text-align: left;
`;

export const FormBody = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: column;
align-items: flex-start;
justify-content: flex-start;
padding: 24px;
color: #000000;
`;

export const CardWrapper = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: space-between;
background: linear-gradient(76.64deg, #EFDFA3 5.43%, #CE8631 29.33%, #C1A053 47.47%, #F4C045 68.72%, #C88221 90.4%);
border-radius: 6px;
padding: 24px 56px;
max-width: 80%;
`;

export const Content = styled.div`
display: flex;
flex-basis: 80%;
color: #ffffff;
font-weight: 400;
font-size: 20px;
line-height: 26px;
text-align: left;
`;

export const Amount = styled.div`
display: flex;
flex-basis: 80%;
color: #ffffff;
font-weight: 400;
font-size: 30px;
line-height: 51px;
display: flex;
justify-content: flex-end;
`;