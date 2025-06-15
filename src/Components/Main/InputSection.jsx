import React from 'react';
import { assets } from '../../assets/assets';

const InputSection = () => {
    return (
        <div className='bg-gray-300 p-4 max-w-[800px] mx-auto flex items-center justify-between rounded-full mt-16'>
            <input className='border-none outline-none flex-1' placeholder='Eanter a prompt here' type="text" />
            <div className='flex items-center gap-1.5'>
                <img className='w-[30px] cursor-pointer' src={assets.gallery_icon} alt="" />
                <img className='w-[30px] cursor-pointer' src={assets.mic_icon} alt="" />
                <img className='w-[30px] cursor-pointer' src={assets.send_icon} alt="" />
            </div>
        </div>
    );
};

export default InputSection;