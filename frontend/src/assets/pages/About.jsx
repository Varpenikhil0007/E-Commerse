import React from 'react'
import Title from '../components/Title'
import { assets } from '../frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quos minima, sit illum qui sunt inventore quasi error reprehenderit commodi pariatur odit sint praesentium nostrum aliquid magni. Repellendus ab minima, </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit rem nulla reprehenderit temporibus excepturi nam eligendi, sed sint a hic dolores at inventore provident aspernatur fugit sequi omnis fuga iure pariatur totam soluta. Id neque tempora quisquam vel nulla veniam porro dicta voluptas adipisci sequi cum, iusto assumenda dolores?</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A deserunt suscipit quam in impedit dicta soluta quas necessitatibus incidunt, odio, asperiores natus fuga eligendi, tempore alias error! Nisi, aspernatur reprehenderit.</p>


        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'Choose US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, repellendus?</p>

        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, repellendus?</p>

        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p  className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, repellendus?</p>

        </div>

      </div>
        <NewsletterBox/>
    </div>
  )
}

export default About