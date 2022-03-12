import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

interface LoaderProps{
    isLoading:boolean
}

const Loader: React.FC<LoaderProps> = ({isLoading}) => {
    return ( isLoading ?  <div>
        <Backdrop isVisible={isLoading} />
        Loading...</div> : null)
}

export default Loader