import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

const App = () => {
    return (
        <div className='flex'>
            <Sidebar></Sidebar>
            <Main></Main>
        </div>
    );
};

export default App;