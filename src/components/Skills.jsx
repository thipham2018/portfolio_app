import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Java from '../assets/java.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Csharp from '../assets/csharp.png';
import Python from '../assets/python.png';
import Mysql from '../assets/mysql.png';
import SQL from '../assets/sql.png';
import Azure from '../assets/azure.png';


const Skills = () => {
  return (
    <div name='skills' className='h-full h-screen px-8 justify-center items-center p-4 bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='py-10 db-6'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div>
          <p className='py-4'>Language skills</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
            <p className='my-4'>JAVA</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Csharp} alt="HTML icon" />
            <p className='my-4'>C#</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
            <p className='my-4'>PYTHON</p>
          </div>
        </div>
        <div>
          <p className='py-4'>framwork and tools</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Azure} alt="HTML icon" />
            <p className='my-4'>AZURE</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
            <p className='my-4'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
            <p className='my-4'>MONGO DB</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
            <p className='my-4'>MYSQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={SQL} alt="HTML icon" />
            <p className='my-4'>SQL</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
            <p className='my-4'>TAILWIND</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
            <p className='my-4'>CSS</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
