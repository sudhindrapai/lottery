import {FC, useState, useEffect} from 'react';
import Navigation from '../../components/Navigation/DesktopNavigation';
import {Wrapper, Viewheader, Container, ProfileContainer, TabMenuContainer,TabMenuElement,TabMenuBody, TabMenuContent} from './StyledUserProfile';
import PersonalInfoForm from './PersolanInfo/PersonalInfo';
import Address from './Address/Address';
import ChangePassword from './ChangePassword/ChangePassword';
import TwoFA from './2FA/2FA';
import Subscription from './Subscription/Subscription';
import {useLocation} from 'react-router-dom'

const tabMenuOptions = [
    {
        label: "Personal Info",
        propsId:"PROFILE",
        id: 1,
        isSelected: false
    },
    {
        label: "Address",
        propsId:"ADDRESS",
        id: 2,
        isSelected: false
    },
    {
        label: "Change Password",
        propsId:"CHANGE PASSWORD",
        id: 3,
        isSelected: false
    },
    {
        label: "2 Factor Authentication",
        propsId:"SETTINGS",
        id: 4,
        isSelected: false
    },
    {
        label: "Subscription",
        propsId:"MEMBERSHIP",
        id: 5,
        isSelected: true
    }
]

interface ProfileProps {
    activeState:string
}

const UserProfile:FC<ProfileProps> = ({activeState}) => {

    const [tabMenu, setTabMenuHandler] = useState(tabMenuOptions);

    const location = useLocation();

    let tabMenuView = tabMenu.map((menuObj) => {
        return <TabMenuElement key={menuObj.id} isSelectdItem ={menuObj.isSelected} >
            {menuObj.label}
        </TabMenuElement>
    });

    useEffect(() => {
        let updatedMenu = tabMenu.map((menuObj) => {
            return {
                ...menuObj,
                isSelected: menuObj.propsId === activeState
            }
        });
        setTabMenuHandler(updatedMenu);
    },[location]);

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
            {activeState}
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