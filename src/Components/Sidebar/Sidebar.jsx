import React, { useState } from 'react';
import { assets } from '../../assets/assets';


const Sidebar = () => {

    const [extended, setextanded] = useState(false);


    return (
        <div className='h-screen bg-gray-300 sidebar flex flex-col justify-between items-center p-4'>
            {/* top section */}
            <div className=''>
                <img onClick={() => setextanded(prev => !prev)} className='cursor-pointer ml-1.5' src={assets.menu_icon} alt="" />
                <div className=' bg-gray-400 px-2.5 py-1.5 flex items-center  rounded-full my-4 cursopr-pointer hover:bg-gray-500'>
                    <img className='' src={assets.plus_icon} alt="" />
                    {extended && <p className='ml-1.5'>New chat</p>}
                </div>
                {extended && <p className='font-semibold'>Recent</p>}
                {extended && <div className='flex items-center gap-1 cursor-pointer'>
                    <img src={assets.message_icon} alt="" />
                    <p>what is react</p>
                </div>}
            </div>
            {/* bottom section */}
            <div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src={assets.question_icon} alt="" />
                    {extended && <p>Help</p>}
                </div>
                <div className='flex items-center gap-2 my-2 cursor-pointer'>
                    <img src={assets.history_icon} alt="" />
                    {extended && <p>Activty</p>}
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src={assets.setting_icon} alt="" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;