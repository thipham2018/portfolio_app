import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Thi Pham, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I developed a strong passion for crafting software during my tenure at a software company,
              where I held a role as a software seller. This ignited my determination to embark on the path of a software developer,
              I decided to start my passion in 2021 through enrollment at Algonquin College. Alongside my formal education,
              I've been avidly expanding my skill set through online learning and nurturing valuable connections within the developer community.
              My unwavering goal is to continue pursuing knowledge, ensuring that I can consistently deliver exceptional services to all my clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
