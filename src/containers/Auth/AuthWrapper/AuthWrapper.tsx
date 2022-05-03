import React from 'react';
import { StyledAuthContainer, StyledFormSection, StyledImgSection, StyledImg } from './StyledAuthWrapper';

interface AuthWrapperProps {
    imgUrl: string,
    altText: string
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({imgUrl, altText, children}) => {
    return <StyledAuthContainer>
        <StyledImgSection>
            <StyledImg src={imgUrl} alt={altText} />
        </StyledImgSection>
        <StyledFormSection>
            {children}
        </StyledFormSection>
    </StyledAuthContainer>
}

export default AuthWrapper