import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import CardSection from './CardSection';
import InputSection from './InputSection';
import { GeminiContextData } from '../../Context/GeminiContext';

const Main = () => {
    const { showResult, result, recentPrompts, loading } = useContext(GeminiContextData)
    return (
        <div className='flex-1 '>
            {/* navbar  */}
            <div className='flex items-center justify-between p-2'>
                <p>Gemini</p>
                <img className='w-[35px] rounded-full' src={assets.user_icon} alt="" />
            </div>

            {
                showResult ?
                    <div className='h-[70vh] overflow-y-scroll w-[800px] mx-auto noScrollBar'>
                        <div className='flex items-center gap-3 mb-5'>
                            <img className='w-[30px] rounded-full' src={assets.user_icon} alt="" />
                            <p>{recentPrompts}</p>
                        </div>

                        {
                            loading ?
                                <div className='flex flex-col gap-2 loading'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <div className='flex items-start gap-3'>
                                    <img className='w-[30px]' src={assets.gemini_icon} alt="" />
                                    <p dangerouslySetInnerHTML={{ __html: result }}>{ }</p>
                                </div>
                        }

                    </div>
                    :
                    <>
                        {/* greeting section  */}
                        <div className='text-center my-14'>
                            <h1 className='text-5xl font-bold greeting'>Hello, Navin</h1>
                            <p className='text-3xl font-semibold text-gray-300'>How can I help you today?</p>
                        </div>

                        {/* card section  */}
                        <CardSection />
                    </>
            }

            {/* input section */}
            <InputSection />
        </div>
    );
};

export default Main;