import {FC} from 'react';

import * as Styled from '../Success/StyledSuccess';
const PaypalFail:FC = () => {
    return <Styled.Wrapper>
        <Styled.SectionWrapper>
            <Styled.Title>
                Payment Failed!
            </Styled.Title>
            <Styled.Subtitle>
                Payment is failed due to following reason:
                <ol>
                    <li>
                    Transaction cannot be authorized
                    </li>
                    <li>
                    Incorrect OTP or Password
                    </li>
                    <li>
                    Signature validation failed
                    </li>
                    <li>
                    Insufficient balance in the account
                    </li>
                </ol>
            </Styled.Subtitle>
        </Styled.SectionWrapper>
    </Styled.Wrapper>
};

export default PaypalFail