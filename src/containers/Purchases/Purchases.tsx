import {FC, useEffect, useState} from 'react';
import Navigation from '../../components/Navigation/DesktopNavigation';
import LotteryPurchaseList from './Lottery/LotteryPurchaseList';
import AuctionPurchaseList from './Auction/AuctionPurchaseList';

import {Wrapper, Container, Viewheader, ContentContainer,MenuItem, TabMenuContainer,ViewBody} from './StyledPurchase';

const Purchases:FC = () => {
    const [tabMenu, setTabMenu] = useState([{
        id:1,
        label:'Lottery',
        isActive: true
    },
    {
        id:2,
        label:'Auction',
        isActive: false
    }
]);




const toggleTabMenuOption = (menuId:number) => {
    setTabMenu(tabMenu.map((menuObj) => {
        return {
            ...menuObj,
            isActive: menuObj.id === menuId
        }
    }));
}

    let tabMenuView = tabMenu.map((menuItemObj) => {
        return <MenuItem key={`menuItem_${menuItemObj.id}`} onClick = {() => {toggleTabMenuOption(menuItemObj.id)}} isSelectedItem={menuItemObj.isActive}>
            {menuItemObj.label}
        </MenuItem>
    });


    let filteredObj = tabMenu.filter((obj) => {
        return obj.isActive
    })[0];

    let view = <></>
    if (filteredObj.id === 1) {
        view = <LotteryPurchaseList />;
    } else if (filteredObj.id === 2) {
        view = <AuctionPurchaseList />
    }

    return <Wrapper>
        <Viewheader>
                Home / Purchases
            </Viewheader>
        <Container>
            <ContentContainer>
                <TabMenuContainer>
                {tabMenuView}
                </TabMenuContainer>
                <ViewBody>
                    {view}
                </ViewBody>
            </ContentContainer>
        </Container>
    </Wrapper>
};

export default Purchases
