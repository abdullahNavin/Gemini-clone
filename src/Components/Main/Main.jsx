import React from 'react';
import { assets } from '../../assets/assets';
import CardSection from './CardSection';
import InputSection from './InputSection';

const Main = () => {
    return (
        <div className='flex-1 '>
            {/* navbar  */}
            <div className='flex items-center justify-between p-2'>
                <p>Gemini</p>
                <img className='w-[35px] rounded-full' src={assets.user_icon} alt="" />
            </div>

            {/* greeting section  */}
            <div className='text-center my-14'>
                <h1 className='text-5xl font-bold greeting'>Hello, Navin</h1>
                <p className='text-3xl font-semibold text-gray-300'>How can I help you today?</p>
            </div>

            {/* card section  */}
            <CardSection/>

            {/* input section */}
            <InputSection/>
        </div>
    );
};

export default Main;