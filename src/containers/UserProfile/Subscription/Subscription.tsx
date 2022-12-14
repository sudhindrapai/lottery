import {FC,useEffect} from 'react';
import * as style from './styledSubscription';
import Button from '../../../components/UI/Buttons/Button';

import {ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';

import {RootState} from '../../../app/store';
import {getSubscriptionDetailData,buyGoldMembership,
    suspendGoldmembership, reActivateMembership} from '../../../features/subScription';
import {useSelector, useDispatch} from 'react-redux';

const Subscription:FC = () => {

    const dispatch = useDispatch();

    const subscriptionDetail = useSelector((state:RootState) => state.subscription.isSubscribed);

    useEffect(() => {
        dispatch(getSubscriptionDetailData());
    },[])

    const purchaseMembership = () => {
        dispatch(buyGoldMembership());
    };

    const suspendMembership = () => {
        dispatch(suspendGoldmembership({
            reason: "Not intrested anymore"
        }));
    }

    const reActivateUserMembership = () => {
        dispatch(reActivateMembership({
            reason: "Re-activate"
        }));
    };

    return <style.Container>
        <style.Title>
            Gold Membership
        </style.Title>
        {subscriptionDetail === false && 
        <style.MembershipDetail>
            <ol>
                <li>
                Automatically participate in all lottery games with 5 entries in each Lottery game
                </li>
                <li>
                lottery games participation
                </li>
                <li>
                Unlocked gold members lottery list
                </li>
                <li>
                Monthly Pass
                </li>
            </ol>
        </style.MembershipDetail>}
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
    <Button 
        appBtnType={AppButtonType.primaryBtn}
        disabled={false} 
        fullWidth={true} 
        size={ButtonSizeVariant.medium} 
        variant={ButtonVariant.contained} 
        type={ButtonType.submit} 
        clicked={purchaseMembership} >
            Cancel Membership
    </Button>
    <Button 
        appBtnType={AppButtonType.primaryBtn}
        disabled={false} 
        fullWidth={true} 
        size={ButtonSizeVariant.medium} 
        variant={ButtonVariant.contained} 
        type={ButtonType.submit} 
        clicked={purchaseMembership} >
            Activate Membership
    </Button>
        </style.ActionBtnContainer>
    </style.Container>
};

export default Subscription