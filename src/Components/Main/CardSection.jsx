
import { assets } from '../../assets/assets';

const CardSection = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-4 max-w-[800px] mx-auto mt-24'>
                <div className='relative bg-gray-200 text-gray-600 border border-gray-400 rounded-md p-3.5 cursor-pointer h-[200px]'>
                    <p>suggest a beautiful place to see on an upcomming road trip</p>
                    <img className='w-7 absolute bottom-1 right-1 p-1.5 bg-gray-100 rounded-full' src={assets.compass_icon} alt="" />
                </div>
                <div className='relative bg-gray-200 text-gray-600 border border-gray-400 rounded-md p-3.5 cursor-pointer h-[200px]'>
                    <p>Brifly summarize this concept urbon plainng</p>
                    <img className='w-7 absolute bottom-1 right-1 p-1.5 bg-gray-100 rounded-full' src={assets.bulb_icon} alt="" />
                </div>
                <div className='relative bg-gray-200 text-gray-600 border border-gray-400 rounded-md p-3.5 cursor-pointer h-[200px]'>
                    <p>Brainstrom team boanding activites for our work retreat</p>
                    <img className='w-7 absolute bottom-1 right-1 p-1.5 bg-gray-100 rounded-full' src={assets.message_icon} alt="" />
                </div>
                <div className='relative bg-gray-200 text-gray-600 border border-gray-400 rounded-md p-3.5 cursor-pointer h-[200px]'>
                    <p>Improve the readability of this following code</p>
                    <img className='w-7 absolute bottom-1 right-1 p-1.5 bg-gray-100 rounded-full' src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CardSection;