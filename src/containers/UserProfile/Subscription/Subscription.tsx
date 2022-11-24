import {FC} from 'react';
import * as style from './styledSubscription';
import Button from '../../../components/UI/Buttons/Button';

import {ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';

const Subscription:FC = () => {

    const purchaseMembership = () => {

    };

    return <style.Container>
        <style.Title>
            Gold Membership
        </style.Title>
        <style.MembershipDetail>
            Membership detail goes here
        </style.MembershipDetail>
        <style.ActionBtnContainer>
        <Button 
        appBtnType={AppButtonType.primaryBtn}
        disabled={false} 
        fullWidth={true} 
        size={ButtonSizeVariant.medium} 
        variant={ButtonVariant.contained} 
        type={ButtonType.submit} 
        clicked={purchaseMembership} >
            Buy Membership
    </Button>
        </style.ActionBtnContainer>
    </style.Container>
};

export default Subscription