import {FC, useState, useEffect} from 'react';
import Navigation from '../../components/Navigation/DesktopNavigation';
import {Wrapper, Viewheader, Container, ProfileContainer, TabMenuContainer,TabMenuElement,TabMenuBody, TabMenuContent} from './StyledUserProfile';
import PersonalInfoForm from './PersolanInfo/PersonalInfo';
import Address from './Address/Address';
import ChangePassword from './ChangePassword/ChangePassword';
import TwoFA from './2FA/2FA';
import Subscription from './Subscription/Subscription';

import {useSelector, useDispatch} from 'react-redux';
import {getUserProfileDetail} from '../../features/userProfileSlice';

const tabMenuOptions = [
    {
        label: "Personal Info",
        id: 1,
        isSelected: false
    },
    {
        label: "Address",
        id: 2,
        isSelected: false
    },
    {
        label: "Change Password",
        id: 3,
        isSelected: false
    },
    {
        label: "2 Factor Authentication",
        id: 4,
        isSelected: false
    },
    {
        label: "Subscription",
        id: 5,
        isSelected: true
    }
]


const UserProfile:FC = () => {

    // const dispatch = useDispatch();

    const [tabMenu, setTabMenuHandler] = useState(tabMenuOptions);

    let tabMenuView = tabMenu.map((menuObj) => {
        return <TabMenuElement onClick={() => {updateTabMenu(menuObj.id)}} key={menuObj.id} isSelectdItem ={menuObj.isSelected} >
            {menuObj.label}
        </TabMenuElement>
    });

    const updateTabMenu = (menuId: number) => {
        let updatedMenu = tabMenu.map((menuObj) => {
            return {
                ...menuObj,
                isSelected: menuObj.id === menuId
            }
        });
        setTabMenuHandler(updatedMenu);
    }

    let detailView = <PersonalInfoForm />;

    for (let menuObj of tabMenu) {
        if (menuObj.isSelected === true) {
            if (menuObj.id === 1) {
                detailView = <PersonalInfoForm />;
            } else if (menuObj.id === 2) {
                detailView = <Address />;
            } else if (menuObj.id === 3) {
                detailView = <ChangePassword />
            } else if (menuObj.id === 4) {
                detailView = <TwoFA />
            } else if (menuObj.id === 5) {
                detailView = <Subscription />
            }
        }
    }

    return <Wrapper>
        <Viewheader >
            Home / Profile
        </Viewheader>
        <Container>
            <ProfileContainer>
                <TabMenuContainer>
                    {tabMenuView}
                </TabMenuContainer>
                <TabMenuBody>
                    <TabMenuContent>
                    {detailView}
                    </TabMenuContent>
                </TabMenuBody>
            </ProfileContainer>
        </Container>
    </Wrapper>
};

export default UserProfile