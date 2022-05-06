import { useThemeProps } from '@mui/system';
import styled from 'styled-components';

interface StyledTimerWrapperProps {
    color: string,
    fontSize: number
}

interface ResendTextProps {
    textColor: string,
};

export const TimerWrapper = styled.div`
display: flex;
color: ${(props: StyledTimerWrapperProps) => props.color || '#000000'};
font-size: ${(props:StyledTimerWrapperProps) => props.fontSize || '16'} 'px';
align-items: flex-start;
justify-content: flex-start;
`;

export const StyledResendText = styled.div`
display: inline-flex;
width: 100%;
font-size: 16px;
cursor: pointer;
color: ${(props:ResendTextProps) => props.textColor || '#000000'}
`;