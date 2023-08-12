import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import profilepic3 from "../../public/images/profile/profilepic3.jpg";
import Image from 'next/image';
import { motion, motionValue, useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({value}) =>{
  const ref = useRef(null);
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue,{duration:3000});
  const isInView = useInView(ref,{once:true});

  useEffect(()=>{
    if(isInView){
      motionValue.set(value);
    }
  },[isInView,value,motionValue]);

  useEffect(()=>{
    springValue.on("change",(latest)=>{
      if(ref.current && latest.toFixed(0) <=value){
        ref.current.textContent = latest.toFixed(0)
      }
    })
  },[springValue,value]);

   return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Mahmud | About Page</title>
        <meta name='description' content='This is the about page of Md. Mahmud-Ur-Rahman'/>
      </Head>
      <TransitionEffect/>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 '>Biography</h2>
              <p className='font-medium text-justify'>
                Hi, I&apos;m Md. Mahmud-Ur-Rahman,a passionate and dedicated Full-Stack Developer with expertise in Node.js for backend development and React for frontend engineering. I take immense pride in crafting seamless and intuitive digital experiences that leave a lasting impact on users. With a strong focus on code quality and performance, I constantly strive to push the boundaries of what&apos;s possible in web development.
              </p>
              <p className='my-4 font-medium text-justify'>
              I began my journey into the world of software development with a profound fascination for technology.My journey started as a Full-Stack Developer, where I was exposed to the exciting realm of Node.js for backend solutions and React for frontend development.
              </p>
              <p className='font-medium text-justify'>
                My roles as a Full-Stack Developer allowed me to develop a comprehensive understanding of the end-to-end development process, enabling me to deliver projects with precision and efficiency. 
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
              <Image src={profilepic3} alt="ProfilePic" className="w-full h-auto rounded-2xl" priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"/>
            </div>
            <div className='col-span-2 flex flex-col items-center justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={2}/>
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Companies</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={3}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
              </div>
              
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={1}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
              </div>

            </div>
          </div>
          <Skills/>
          <Experience/>
          <Education/>
        </Layout>
      </main>
    </>
  )
}

export default about