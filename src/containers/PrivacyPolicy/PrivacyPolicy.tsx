import {FC} from 'react';
import {Wrapper,Container,Title,List,Details} from '../TAndC/StyledTandC';

const PrivacyPolicy = () => {
    return<Wrapper>
        <Container>
            <Title>
            Privacy Policy
            </Title>
            <Details>
            This privacy policy ("Policy") describes how King’s Rings collects, uses, and shares
             information about you when you use our website www.kingsrings.games and any
             other online products and services (collectively, the "Services").
            </Details>
            <Details>
            Collection of Information
            <br />
            We may collect information about you in a variety of ways. The information we may collect on the Services includes:
            </Details>
            <List>
                <li>
                Personal information you provide to us directly, such as your name, email address, postal address, and phone number.
                </li>
                <li>
                Information about your use of the Services, such as your search queries, 
                the pages you view, and the actions you take on the Services.
                </li>
                <li>
                Device information, such as your device type, device ID, and IP address.
                </li>
            </List>
            <Details>
            Use of Information
            <br />
            We may use the information we collect about you for a variety of purposes, including:
            </Details>
            <List>
                <li>
                To provide, maintain, and improve the Services.
                </li>
                <li>
                To personalize your experience on the Services.
                </li>
                <li>
                To communicate with you, such as to send you updates, 
                newsletters, marketing materials, and other information.
                </li>
                <li>
                To respond to your comments, questions, and requests.
                </li>
                <li>
                To enforce our policies and terms of use.
                </li>
            </List>
            <Details>
            Sharing of Information
            <br />
            We may share your information with third parties in the following circumstances:
            </Details>
            <List>
                <li>
                With service providers who assist us in operating the Services and conducting our business.
                </li>
                <li>
                With third parties as required by law, such as to comply with a subpoena or similar legal process.
                </li>
                <li>
                In the event of a merger, acquisition, or sale of all or a portion of our assets, 
                we may share your information with the party involved in the transaction.
                </li>
            </List>
        </Container>
    </Wrapper>
};

export default PrivacyPolicy