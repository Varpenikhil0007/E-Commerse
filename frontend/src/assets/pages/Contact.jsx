import React from 'react'
import Title from '../components/Title'
import { assets } from '../frontend_assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>


      </div>
      <div className='flex flex-col my-10 justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=''/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>My MailID</p>
          <p>varpenikhil07@gmail.com</p>

        </div>

      </div>
    </div>
  )
}

export default Contact