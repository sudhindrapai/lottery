import {FC, useState, useEffect, useMemo, useRef} from 'react';
import {TimerWrapper, StyledResendText} from './StyledTimer';
import {addPaddingZero} from '../../Utility/Utility';

interface CountDownTimerProps {
    totalDuration: number,
    onReachEnd():void,
    color: string,
    fontSize: number,
    restartCounter():void,
    restartCounterText:string,
    maxResendAttempt: number,
    resendTextColor: string
}



const CountDownTimer:FC<CountDownTimerProps> = (props) => {
    const {totalDuration, onReachEnd, color, fontSize, restartCounterText, maxResendAttempt, resendTextColor} = props
    const [seconds, setSeconds] = useState(totalDuration)
    const secondsLeftRef = useRef(totalDuration);
    const maxAttemptRef = useRef(maxResendAttempt);

    const timer = ():void => {
        let timerInterval = setInterval(() => {
            let updatedValue = secondsLeftRef.current -1;
            secondsLeftRef.current = updatedValue;
            setSeconds(updatedValue);
            if (updatedValue === 0) {
                clearInterval(timerInterval)
            }
        },1000)
    };

    if (seconds === 0) {
        onReachEnd();
    }

    useEffect(() => timer(),[])

    const resetCounter:React.MouseEventHandler<HTMLDivElement> = ():void => {
        setSeconds(totalDuration);
        secondsLeftRef.current = totalDuration;
        maxAttemptRef.current = maxAttemptRef.current - 1;
        timer();
    };

    let resendText = useMemo(() => {
        if (maxAttemptRef.current > 0) {
            return(<StyledResendText textColor={resendTextColor} 
                       onClick={resetCounter}>
                 {restartCounterText}
                </StyledResendText>)
        } else {
            return(<StyledResendText textColor={resendTextColor} >You have reached maximum attempts</StyledResendText>)
        }
    },[maxAttemptRef.current]);

    let displayTimer = useMemo(() => {
        let minutes = Math.floor(seconds/60);
        let remainingSec = seconds - minutes*60 ;
        return <span>{addPaddingZero(minutes)}:{addPaddingZero(remainingSec)}</span>
    },[seconds])


    return <TimerWrapper color={color} fontSize={fontSize}>
       {seconds === 0 ? resendText : <><StyledResendText textColor={resendTextColor} >Resend Code</StyledResendText> ({displayTimer}) </>}
    </TimerWrapper>
}

export default CountDownTimer