import {FC, useEffect} from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

import * as UIConstants from '../../UIConstants';

const Navigation:FC = () => {

    return window.innerWidth <= UIConstants.mobileWidth ? <MobileNavigation /> : <DesktopNavigation />;
}

export default Navigation