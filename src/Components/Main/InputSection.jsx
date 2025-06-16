import { useContext } from 'react';
import { assets } from '../../assets/assets';
import { GeminiContextData } from '../../Context/GeminiContext';

const InputSection = () => {
    const { setInput, Onsent, input } = useContext(GeminiContextData)

    return (
        <div className='bg-gray-300 p-4 max-w-[800px] mx-auto flex items-center justify-between rounded-full mt-16'>
            <input onChange={(e) => setInput(e.target.value)} value={input} className='border-none outline-none flex-1' placeholder='Eanter a prompt here' type="text" />
            <div className='flex items-center gap-1.5'>
                <img className='w-[30px] cursor-pointer' src={assets.gallery_icon} alt="" />
                <img className='w-[30px] cursor-pointer' src={assets.mic_icon} alt="" />
                {
                    input && <img onClick={Onsent} className='w-[30px] cursor-pointer' src={assets.send_icon} alt="" />
                }
            </div>
        </div>
    );
};

export default InputSection;