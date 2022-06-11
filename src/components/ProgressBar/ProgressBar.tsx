// https://www.npmjs.com/package/@ramonak/react-progress-bar
import {FC} from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

import {Wrapper,CompletedColor} from './StyledProgressBart';

interface ProgressBarProps {
    total:number,
    completed: number
}

const ProgressBarView:FC<ProgressBarProps> = (props) => {
    const {total, completed} = props;
    return <Wrapper>
        <ProgressBar completed={completed} maxCompleted={total} height={"8px"} 
        // completedClassName={}
        baseBgColor={"#E3E3E3"}
        customLabel={" "} />
    </Wrapper>
};

export default ProgressBarView