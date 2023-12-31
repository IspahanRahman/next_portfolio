import React, { useRef } from 'react';
import {motion,useScroll} from 'framer-motion';
import LiIcon from './LiIcon';

const Details =({position,company,companyLink,time,address,work})=>{
  const ref = useRef(null);
  return(
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <LiIcon reference ={ref}/>
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<br></br>{company}</h3>
        <span className='capitalize font-medium text-dark/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium text-justify w-full md:text-sm'>
          {work}
        </p>
      </motion.div>
    </li>
  )
}
const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["start end","center start"]
  })
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      <div className='
        w-[75%]
        mx-auto
        relative
        lg:w-[90%]
        md:w-full
      '
      ref={ref}
      >
      <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full flex flex-col items-start justify-between  ml-4 xs:ml-2'>
        <Details
            position="Junior Software Engineer"
            company="Code Studio"
            time="Aug,2023-Present"
            address="Rajshahi,Bangladesh"
            work="Developing and maintaining both backend and frontend components of applications. I work extensively with Node.js for backend development and MySQL for database management. Develop robust and scalable backend services using Node.js, handling various APIs, data manipulation, and business logic implementation. Additionally, I contribute to frontend development using HTML, CSS, JavaScript, and EJS. " 
          />
          <Details
            position="Junior Frontend Engineer"
            company="Studio DevHub"
            time="Jan,2023-April,2023"
            address="Dhaka,Bangladesh"
            work="Worked in the frontend of different projects and implement reusable components. Managing the states of the 
            component using the redux store. Collaborating with other developers and team members on projects. React, 
            TypScript, Next.js, Material UI, Redux, Redux Toolkit." 
          />
            <Details
            position="Junior Frontend Engineer Intern"
            company="Studio DevHub"
            time="Sep,2022-Dec,2022"
            address="Dhaka,Bangladesh"
            work="Learning and understanding the company's codebase and development process. Writing and testing code for front-end 
features or components. React, TypeScript, Material UI
" 
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience