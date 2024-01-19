import React from 'react';

const SectionTitle = ({ subTitle, title }) => {
    return (
        <>
      <div className=' text-center py-5'>
        {
            subTitle && (
                <h2 className='text-bold font-pacifico md:text-4xl text-green-600'>{subTitle}</h2>
            )
        }
        {
            title && ( <> <h1 className='md:text-[65px] font-agbalumo text-green-600'>{title}</h1>
            <hr /></>
               
            )
        }
      </div>
    </>
    );
};

export default SectionTitle;