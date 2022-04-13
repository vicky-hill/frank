import React from 'react';
import Sidebar from './Sidebar';
import BottomNav from 'components/elements/BottomNav';


function Container({ children }) {
    return (
        <>
            <div className='container'>
                <Sidebar />
                {children}
            </div>
            <BottomNav />
        </>
    )
}

export default Container;
