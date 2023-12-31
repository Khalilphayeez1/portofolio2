import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'
import { Typewriter } from 'react-simple-typewriter';
import img1 from './irq7qcsm.png'
import img2 from './gallary.png'
import img3 from './Like.jpg'
import img4 from './hash.jpg'
import web1 from './1.jpg'
import web2 from './2.jpg'
import web3 from './3.jpg'
import web4 from './4.jpg'
import web5 from './5.jpg'
import web6 from './6.jpg'

import { useState, useEffect } from 'react';
import resumeContent from './Resume.txt'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const handleType = (text) => {
    console.log(`Typed: ${text}`);
    // You can perform any actions based on the typed text here
  };

  return (
    <div className={darkMode ? 'dark' : ""}>
      <div className=' bg-white px-10 md:px-10 lg:px:40 dark:bg-gray-900'>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white font-semibold">Developed by WannaCry!</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)} />
              </li>
              <li>
                <button className='bg-gradient-to-r from-cyan-500 to-teal-500 ml-8 text-white px-4 py-2 rounded-md'>Resume</button>
              </li>

            </ul>
          </nav>

          <div className='text-center p-10 '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Khalil Phayeez</h2>
            <h1 className='text-2xl py-2'>
              
              <span className='text-teal-600 font-medium'>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['Web Developer', 'Mobile App Developer', 'Graphic Designer']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onType={handleType}
                />
              </span>
            </h1>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-white'>
              As a versatile web and mobile app developer, I craft seamless digital experiences that blend cutting-edge technology with intuitive design. Join me down below and let's get cracking!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-300 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <img src={img1} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <h3 className='text-3xl py-1 dark:text-white'>
            Services I offer
          </h3>
          <p className='text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-white'>
            As a seasoned web and mobile app developer, I specialize in creating dynamic and user-centric digital solutions. From responsive websites to feature-rich mobile applications, I bring innovation and technical excellence to every project. My services encompass full-stack development, seamless user experiences, and cutting-edge technologies to transform ideas into robust, interactive, and visually compelling digital platforms.
          </p>
          <div className="lg:flex gap-10">
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='mx-auto flex justify-center'>
                <img src={img2} className='block' width={100} height={100} />
              </div>

              <h3 className='py-4 text-teal-600'>Wev Development</h3>
              <p className='py-3 dark:text-white'>
                Creating elegant design suited for your natural desgint theory
              </p>
              <h4 className='py-4 text-teal-600'>Design tools i used</h4>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>Tailwind CSS</p>
              <p className='text-gray-800 py-1'>Node.js</p>
              <p className='text-gray-800 py-1'>VS Code</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='mx-auto flex justify-center'>
                <img src={img4} className='block ' width={100} height={100} />
              </div>

              <h3 className='py-4 text-teal-600'>Mobile App Development</h3>
              <p className='py-3 dark:text-white'>
                Creating elegant design suited for your natural desgint theory
              </p>
              <h4 className='py-4 text-teal-600'>Design tools i used</h4>
              <p className='text-gray-800 py-1'>Node.js</p>
              <p className='text-gray-800 py-1'>React native</p>
              <p className='text-gray-800 py-1'>VS Code</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='mx-auto flex justify-center'>
                <img src={img3} className='block' width={100} height={100} />
              </div>

              <h3 className='py-4 text-teal-600'>Graphic Design</h3>
              <p className='py-3 dark:text-white'>
                Creating elegant design suited for your natural desgint theory
              </p>
              <h4 className='py-4 text-teal-600'>Design tools i used</h4>
              <p className='text-gray-800 py-1'>PhotoShop</p>
              <p className='text-gray-800 py-1'>illutrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>

        </section>
        <section className=''>
          <div>
            <h3 className='text-3xl py-1 bg-teal-200 text-center'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-white'>
              Hello there! I'm Khalil Phayeez, a dedicated web developer and graphic designer. My journey in the digital realm is fueled by a passion for creating immersive and visually striking experiences. With a solid foundation in both web development and graphic design, I embark on a mission to seamlessly blend aesthetics and functionality, bringing forth digital creations that captivate and engage.
            </p>
          </div>
          <div className='flex flex-wrap gap-5 mx-auto lg:flex lg:justify-center mb-10'>
            <div className="w-full lg:w-1/2 xl:w-1/3">
              <img src={web1} className='rounded-lg object-cover w-full h-full' />
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3">
              <img src={web2} className='rounded-lg object-cover w-full h-full' />
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3">
              <img src={web3} className='rounded-lg object-cover w-full h-full' />
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3">
              <img src={web4} className='rounded-lg object-cover w-full h-full' />
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3">
              <img src={web5} className='rounded-lg object-cover w-full h-full' />
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3">
              <img src={web6} className='rounded-lg object-cover w-full h-full' />
            </div>
          </div>
        </section>

        <div className='bg-gray-800 rounded-sm px-10 py-5 text-white italic'>
          <p>Copyright 2023-2028 by Refsnes Data. All Rights Reserve</p>
        </div>

      </div>
    </div>
  );
}

export default App;
