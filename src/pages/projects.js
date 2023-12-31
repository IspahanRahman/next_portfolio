import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icon'
import Messenger_Clone from "../../public/images/projects/Messenger_Clone.PNG";
import Netflix from "../../public/images/projects/Netflix.PNG";
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({type,title,summary,img,link,github}) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-br-3xl xs:rounded-2xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
      <Link href={link} target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage 
          src={img} 
          alt={title} 
          className='w-full h-auto'
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline  underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-center dark:text-light'>
          <Link href={github} target='_blank' className='w-10'><GithubIcon/></Link>
          <Link href={github} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  dark:bg-light dark:text-dark sm:px-4 sm:text-base'>Visit project</Link>
        </div>
      </div>
    </article>
  )
}


const projects = () => {
  return (
    <>
      <Head>
          <title>Mahmud | Projects Page</title>
          <meta name='description' content='This is the about page of Md. Mahmud-Ur-Rahman'/>
      </Head>
      <TransitionEffect/>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-32 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject 
                type="Featured Project"
                title="Messenger Clone"
                summary="Developed a Messenger clone web application to emulate the functionality of popular messaging applications.Real-time messaging using Pusher, enabling instant communication between users in chat rooms and with individuals."
                img={Messenger_Clone}
                link="https://next-messenger-clone-mhykls4jw-ispahanrahman.vercel.app/"
                github="https://github.com/IspahanRahman/next-messenger-clone"
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject 
                  type="Featured Project"
                  title="Netflix Clone"
                  img={Netflix}
                  summary="Developed a Netflix clone web application to replicate the design and functionality of the original Netflix platform.User authentication and registration with next-auth, allowing users to create accounts and log in securely with Google and GitHub.Displaying movie details, including the title, description, and genres."
                  link="https://video-streaming-application-ten.vercel.app/"
                  github="https://github.com/IspahanRahman/video-streaming-application"
                />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects