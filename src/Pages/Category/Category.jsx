import React from 'react';
import SectionTitle from '../../Components/Shared/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='py-2 md:py-8 bg-gray-100'>
           <SectionTitle
           subTitle="welcome to our"
           title="7 hills summer camp"
           ></SectionTitle> 
           <div className='mx-5 max-w-7xl md:mx-auto md:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='w-[280px] mx-auto md:w-[350px]  rounded-2xl '>
                <img className='w-[280px] md:w-[350px] rounded-t-xl' src="https://summercamp.ancorathemes.com/wp-content/uploads/2016/03/home1_banner1-370x224.jpg" alt="" />
                <div className='bg-green-500 pb-4 md:pb-12 rounded-b-xl'>
                <h1 className='text-xl md:text-2xl text-white md:py-8 font-agbalumo text-center'>Photoes</h1>
                <h1 className='text-2xl md:text-5xl text-center text-white md:pb-4 font-teko'>VISIT GALLERY</h1>
                <div className='text-center '>
                <button className='text-green-600 font-teko text-xl text-center bg-white  px-3 md:px-7 md:py-2 hover:shadow-[4px_4px_4px_rgb(0,0,255)] hover:text-white rounded-full hover:bg-transparent'>More</button>
                </div>
                
                </div>
                
            </div>
            <div className='w-[280px] mx-auto md:w-[350px]  rounded-2xl '>
                <img className='w-[280px] md:w-[350px] rounded-t-xl' src="https://summercamp.ancorathemes.com/wp-content/uploads/2016/03/home1_banner2-370x224.jpg" alt="" />
                <div className='bg-amber-500 pb-4 md:pb-12 rounded-b-xl'>
                <h1 className='text-xl md:text-2xl text-white md:py-8 font-agbalumo text-center'>Alumni</h1>
                <h1 className='text-2xl md:text-5xl text-center text-white md:pb-4 font-teko'>STAY IN TOUCH</h1>
                <div className='text-center '>
                <button className='text-amber-600 font-teko text-xl text-center bg-white  px-3 md:px-7 md:py-2 hover:shadow-[4px_4px_4px_rgb(0,0,255)] hover:text-white rounded-full hover:bg-transparent'>More</button>
                </div>
                
                </div>
                
            </div>
            <div className='w-[280px] mx-auto md:w-[350px]  rounded-2xl '>
                <img className='w-[280px] md:w-[350px] rounded-t-xl' src="https://summercamp.ancorathemes.com/wp-content/uploads/2016/03/home1_banner3-1-370x224.jpg" alt="" />
                <div className='bg-yellow-400 pb-12 rounded-b-xl'>
                <h1 className='text-xl md:text-2xl text-white md:py-8 font-agbalumo text-center'>Staff Positions</h1>
                <h1 className='text-2xl md:text-5xl text-center text-white md:pb-4 font-teko'>JOIN THE TEAM</h1>
                <div className='text-center '>
                <button className='text-yellow-600 font-teko text-xl text-center bg-white  px-3 md:px-7 md:py-2 hover:shadow-[4px_4px_4px_rgb(0,0,255)] hover:text-white rounded-full hover:bg-transparent'>More</button>
                </div>
                
                </div>
                
            </div>
           </div>
        </div>
    );
};

export default Category;