import React from 'react';
import Sidebar from './Sidebar';


function Container({ children }) {
    return (
        <div className='container'>
            <Sidebar />
            { children }
        </div>
    )
}

export default Container;
