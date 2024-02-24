/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaRegUser } from "react-icons/fa6";

export default function ZI_Doc() {
  return (
    <div className=''>
        <div className='bg-[#000000] 2xl:w-[34px] 2xl:h-[1055px] absolute left-0 top-0 overflow-hidden'>
            <p className='uppercase text-[#FFFFFF] tracking-[3px] -rotate-90 absolute -left-[30px]  top-14 text-[14px]'> products</p>
            <p className='uppercase text-[#FFFFFF] -rotate-90 mt-[100px]'>|</p>
              <p className='text-[14px] uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 mt-[70px] -mb-2'>solution</p>
             <p className='text-[14px] uppercase text-[#FFFFFF] tracking-[2px] -rotate-90'>|</p>
         <p className='text-[14px] uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 mt-[130px] -mb-2'>documentation</p>
           <p className=' uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 '>|</p>

            <p className='text-[14px] uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 mt-[180px] flex -mb-2'>electronic 
            <span className=' text-[#FFFFFF] ml-2 text-[14px]'> signature</span></p>
            <p className='uppercase text-[#FFFFFF] tracking-[2px] -rotate-90'>|</p>

            <p className='uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 mt-[80px] text-[14px] -mb-2'>industries</p>
            <p className='uppercase text-[#FFFFFF] tracking-[2px] -rotate-90'>|</p>

             <p className='uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 mt-[165px] flex text-[14px]'>aes<span className='text-[#FFFFFF] mx-2 text-[14px]'>256</span> 
            <span className='text-[#FFFFFF] ml-1 text-[14px]'>encription</span> 
            </p>
             <p className='uppercase text-[#FFFFFF] tracking-[2px] -rotate-90'>|</p>

            <p className='text-[14px] uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 mt-14'>pricing</p>
{/* */}
        </div>
        <div className='2xl:ml-14 2xl:mr-20 2xl:mt-16 flex items-center justify-between '>
            <img src="/assets/zi_doc_logo.svg" alt="zi_doc" className='2xl:w-[129px] 2xl:h-[60px] 2xl:mr-40'/>
            <img src="/assets/logo.svg" alt="logo"  className='2xl:w-[204px] 2xl:h-[50px]'/>
           
            <div className='flex items-center 2xl:space-x-10'>
                <div>
                <p className=' text-[14px] tracking-[2px]'>17:23 LONDON UNITED KINGDOM</p>
                <p className='text-[#BE9F56] 2xl:ml-20 text-end  text-[12px] tracking-[2px]'>SUNDAY, 12 FEBURARY 2023</p>
                </div>
                <img src="/assets/UK.svg" alt="flag logo" className='2xl:h-[25px] 2xl:w-[25px]' />
                <FaRegUser className='w-[13px] h-[13px]' />
            </div>
        </div>

        <div >
        <img src="/assets/ZIMA_AI.svg" alt="AI_LOGO" className='absolute 2xl:right-[80px]' />
        <p className='absolute 2xl:right-[80px] font-bold 2xl:top-44'>TRY FOR FREE</p>
            <div className='bg-[#000000] 2xl:w-[541px] 2xl:h-[846px] absolute 2xl:top-52 2xl:right-0 rounded-bl-[20px] rounded-tl-[20px]'>
            <img src="/assets/arrow.svg" className='2xl:w-[52px] 2xl:h-[68px] 2xl:ml-7 2xl:mt-7' alt="" />
            <img src="/assets/signature.svg" alt="" className='absolute 2xl:left-24 2xl:top-14' />
            <hr className='2xl:ml-6 2xl:mr-6'/>
            </div>
        </div>
    </div>
  )
}
