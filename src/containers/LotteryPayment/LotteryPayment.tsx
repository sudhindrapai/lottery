import {FC, Fragment} from 'react';
import Navigation from '../../components/Navigation/DesktopNavigation';
import CoinImgSrc from '../../assets/lotteryCoin.png'

import {ViewHeader, ContentSection, Content, 
    SectionTitle, SectionContainer,PurchaseSectionDetails,
    PurchaseSectionImg, PurchaseDetails,LotteryDetail,Label,Value} from './StyledLotteryPayment';

const LotteryPayment:FC = () => {
    return <Fragment>
        <Navigation />
        <ViewHeader />
        <ContentSection>
            <Content>
                <SectionContainer>
                    <SectionTitle>
                    Purchase details
                    </SectionTitle>
                    <PurchaseSectionDetails>
                        <PurchaseSectionImg >
                            <img src={CoinImgSrc} />
                        </PurchaseSectionImg>
                        <PurchaseDetails>
                            <LotteryDetail>
                                <Label>
                                    Lottery Id
                                </Label>
                                <Value>
                                    1234567
                                </Value>
                                </LotteryDetail>
                                <LotteryDetail>
                                <Label>
                                    Lottery Price
                                </Label>
                                <Value>
                                    10000
                                </Value>
                            </LotteryDetail>
                            <LotteryDetail>
                            <Label>
                                    Lottery Ends on
                                </Label>
                                <Value>
                                    10000
                                </Value>
                            </LotteryDetail>
                        </PurchaseDetails>
                    </PurchaseSectionDetails>
                </SectionContainer>
                <SectionContainer>
                    <SectionTitle>
                   Gold Membership
                    </SectionTitle>
                </SectionContainer>
            </Content>
            <Content>
            <SectionContainer>
                    <SectionTitle>
                    Purchase details1
                    </SectionTitle>
                </SectionContainer>
            </Content>
        </ContentSection>
    </Fragment>
};

export default LotteryPayment