import { useEffect, useState } from "react"
import { AnimatePresence, motion, useAnimation } from "framer-motion";
/* eslint-disable @next/next/no-img-element */
function Sidebar({isOpen}) {
  const controls = useAnimation();
  useEffect(() => {
    if (isOpen) {
      // If the menu is open, animate it in
      controls.start({ opacity: 1, x: 0 });
    } 
    else {
      // If the menu is closed, animate it out
      controls.start({ opacity: 0, x: -100,duration:1 });
    }


  }, [ isOpen,controls]);

  return (


    <div className="overflow-y-auto customScrollbar h-screen absolute left-0 top-0">
      <AnimatePresence >
        <motion.div 
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{ duration: '0.5' }}
          className=" bg-black sm:w-[180px] sm:h-[750px] md:w-[180px] md:h-[750px] lg:w-[200px] lg:h-[840px] xl:w-[200px] xl:h-[850px] 2xl:w-[262px] 2xl:h-[1079px] customScrollbar overflow-y-auto">
          <div className="relative">
            <p className="text-[#FFFFFF] -rotate-90 sm:text-[10px]  md:text-[12px] xl:text-[14px] 2xl:text-[20px] tracking-[3px] absolute sm:-left-7 sm:top-[50px] md:-left-8 md:top-[50px] lg:-left-8 lg:top-[60px] xl:-left-10 xl:top-[60px] 2xl:-left-12 2xl:top-[75px]"><span className="text-[#BE9F56] ">|</span> <span>PRODUCTS</span></p>
            <img src="assets/zi_doc_lock.svg" alt="zi_doc_lock.svg" className="sm:w-[75px] sm:h-[30px] md:w-[85px] md:h-[35px] lg:w-[85px] lg:h-[35px] xl:w-[100px] xl:h-[40px] 2xl:w-[129px] 2xl:h-[60px] absolute  sm:left-12 sm:top-[70px]  md:left-12 md:top-[70px]  lg:left-14 lg:top-[80px] xl:left-14 xl:top-[83px] 2xl:left-20 2xl:top-[98px]" />
          </div>

          <p className="text-[#2E2E2E] tracking-[6px] sm:text-[22px]  lg:text-[28px] xl:text-[30px] 2xl:text-[40px] uppercase absolute  sm:top-[110px] sm:left-4  md:top-[113px] md:left-4 lg:top-[130px] lg:left-3 xl:top-[130px] xl:left-1 2xl:top-[165px] 2xl:left-3">products</p>
          <p className="text-[7px] lg:text-[8px]  2xl:text-[10px] text-end text-[#FFFFFF] font-bold uppercase tracking-[3px] absolute sm:top-[150px] sm:left-[95px] md:top-[150px] md:left-[95px] lg:top-[175px] lg:left-[113px] xl:top-[175px] xl:left-[115px] 2xl:top-[230px] 2xl:left-[160px]">signatures</p>
          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[2px] font-bold text-[#FFFFFF] absolute sm:top-[170px] sm:left-[8px] md:top-[170px] md:left-[8px] lg:top-[195px] lg:left-[8px] xl:top-[190px] xl:left-[8px] 2xl:top-[250px] 2xl:left-[15px]">ELECTRONIC SIGNATURE</p>
          <p className="text-[6px] lg:text-[7px] 2xl:text-[10px] uppercase tracking-[1.3px] font-bold text-[#2E2E2E] absolute sm:top-[190px] sm:left-[8px] md:top-[190px] md:left-[8px] lg:top-[215px] lg:left-[8px] xl:top-[210px] xl:left-[8px] 2xl:top-[275px] 2xl:left-[15px]">WORLDS MOST SECURE WAY TO SIGN <br /> AND SEND</p>

          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[2px] font-bold text-[#FFFFFF] absolute sm:top-[215px] sm:left-[8px]  lg:top-[245px] lg:left-[8px] xl:top-[245px] xl:left-[8px] 2xl:top-[320px] 2xl:left-[15px]">E-WITNESS</p>

          <p className="text-[6px] lg:text-[7px] 2xl:text-[10px] uppercase tracking-[1.3px] font-bold text-[#2E2E2E] absolute sm:top-[235px] sm:left-[8px] lg:top-[265px] lg:left-[8px] xl:top-[265px] xl:left-[8px] 2xl:top-[345px] 2xl:left-[15px]">WITNESS & SIGN CONFIDENTIAL AND <br /> HIGH VALUE AGREEMENTS/CONTRACTS
          </p>


          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[2px] font-bold text-[#FFFFFF] absolute sm:top-[260px] lg:top-[295px] sm:left-[8px] xl:top-[300px] xl:left-[8px] 2xl:top-[390px] 2xl:left-[15px]">IDENTITY VERIFICATION</p>
          <p className="text-[6px] lg:text-[7px] 2xl:text-[10px] uppercase tracking-[1.3px] font-bold text-[#2E2E2E] absolute sm:top-[280px] lg:top-[315px] sm:left-[8px]  xl:top-[320px] xl:left-[8px] 2xl:top-[415px] 2xl:left-[15px]">WORKING SEAMLESSLY WITH AES <br /> 256-BIT ENCRYPTION AND ZIMO MEET
          </p>


          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] text-end text-[#FFFFFF] font-bold uppercase tracking-[3px] absolute sm:top-[312px] sm:left-[100px] lg:top-[352px] lg:left-[113px] xl:top-[352px] xl:left-[115px] 2xl:top-[460px] 2xl:left-[160px]">contracts</p>
          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute sm:top-[330px] sm:left-[5px] lg:top-[373px] lg:left-[8px] xl:top-[375px] xl:left-[8px] 2xl:top-[490px] 2xl:left-[15px]">CONTRACT/AGREEMENT MANAGEMENT</p>
          <p className="text-[6px] lg:text-[7px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute sm:top-[350px] sm:left-[8px] lg:top-[395px] lg:left-[8px] xl:top-[395px] xl:left-[8px] 2xl:top-[515px] 2xl:left-[15px]">ORGANISED, AUTOMATED DUCUMENT
          </p>
          <p className="text-[7px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute sm:top-[365px] sm:left-[90px] lg:top-[410px] lg:left-[110px]  xl:top-[410px] xl:left-[110px] 2xl:top-[535px] 2xl:left-[153px]"> WORKFLOWS</p>


          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute sm:top-[385px] sm:left-[8px] lg:top-[430px] lg:left-[8px] xl:top-[430px] xl:left-[8px] 2xl:top-[560px] 2xl:left-[15px]">DOCUMENT GENERATION</p>
          <p className="text-[7px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute sm:top-[405px] sm:left-[8px] lg:top-[450px] lg:left-[8px] xl:top-[450px] xl:left-[8px] 2xl:top-[585px] 2xl:left-[15px]">GENERATE DOCUMENTS SEAMLESSLY <br /> THROUGH YOUR DEDICATED PORTAL</p>

          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute sm:top-[435px] sm:left-[8px] lg:top-[480px] lg:left-[8px] xl:top-[485px] xl:left-[8px] 2xl:top-[630px] 2xl:left-[15px]">DATA SECURITY</p>
          <p className="text-[6px] text-justify lg:text-[7px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute sm:top-[455px] sm:left-[8px] lg:top-[500px] lg:left-[8px] xl:top-[505px] xl:left-[8px] 2xl:top-[655px] 2xl:left-[15px]">ALL SIGNATURES,CONTRACTS,AGREEMENTS, <br /> DOCUMENTS AND WITNESS STATEMENTS <br /> KEPT UNDER AES 256-BITENCRYPTION FOR <br /> THE DURATION OF YOUR MEMBERSHIP</p>

          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute sm:top-[500px] sm:left-[127px] lg:top-[555px] lg:left-[140px] xl:top-[560px] xl:left-[140px] 2xl:top-[730px] 2xl:left-[195px]">HISTORY</p>


          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute sm:top-[515px] sm:left-[8px] lg:top-[575px] lg:left-[8px] xl:top-[580px] xl:left-[8px] 2xl:top-[760px] 2xl:left-[15px]">DOC.SAFE</p>
          <p className="text-[6px] lg:text-[7px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute sm:top-[535px] sm:left-[8px] lg:top-[595px] lg:left-[8px] xl:top-[600px] xl:left-[8px] 2xl:top-[785px] 2xl:left-[15px]">SEARCH, VIEW, DOWNLOAD AND SHARE <br /> EVERY SIGNATURE, CONTRACT, AGREEMENT,<br />AND DOCUMENT FROM YOUR PORTAL</p>



          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute sm:top-[570px] sm:left-[135px] lg:top-[640px] lg:left-[150px] xl:top-[648px] xl:left-[150px] 2xl:top-[848px] 2xl:left-[210px]">MORE</p>
          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute sm:top-[590px] sm:left-[8px] lg:top-[660px] lg:left-[8px] xl:top-[670px] xl:left-[8px] 2xl:top-[878px] 2xl:left-[15px]">PAYMENTS</p>

          <p className="text-[6px] lg:text-[7px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute sm:top-[610px] sm:left-[8px] lg:top-[680px] lg:left-[8px] xl:top-[690px] xl:left-[8px] 2xl:top-[905px] 2xl:left-[15px]">AGREE, SIGN AND MAKE PAYMENT(S) IN A<br />SINGLE CLICK</p>

          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute sm:top-[640px] sm:left-[8px] lg:top-[710px] lg:left-[8px] xl:top-[725px] xl:left-[8px] 2xl:top-[950px] 2xl:left-[15px]">CLICKWRAPS</p>
          <p className="text-[6px] lg:text-[7px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute sm:top-[660px] sm:left-[8px] lg:top-[730px] lg:left-[8px] xl:top-[745px] xl:left-[8px] 2xl:top-[975px] 2xl:left-[15px]">CAPTURE CONSENT WITH A SINGLE CLICK
          </p>

          <p className="text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute sm:top-[680px] sm:left-[8px] lg:top-[750px] lg:left-[8px] xl:top-[770px] xl:left-[8px] 2xl:top-[1000px] 2xl:left-[15px]">WEB FORMS</p>
          <p className="text-[6px] lg:text-[7px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute sm:top-[700px] sm:left-[8px] lg:top-[770px] lg:left-[8px] xl:top-[790px] xl:left-[8px] 2xl:top-[1020px] 2xl:left-[15px]">INCORPORATE DATA COLLECTION AND <br /> SPEED UP SIGNING</p>

          <p className='text-[7px] lg:text-[8px] 2xl:text-[10px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute sm:top-[730px] sm:left-[75px] lg:top-[810px] lg:left-[80px] xl:top-[830px] xl:left-[80px] 2xl:top-[1055px] 2xl:left-[100px]'>ALL PRODUCTS</p>
          <img src="assets/right_arrow.svg" alt="" className='w-[15px] h-[15px] xl:w-[20px] xl:h-[20px] 2xl:w-[30px] 2xl:h-[30px] absolute sm:top-[728px] sm:left-[140px] lg:top-[808px] lg:left-[157px] xl:top-[826px] xl:left-[157px] 2xl:top-[1048px] 2xl:left-[200px]' />
        </motion.div>
      </AnimatePresence>
    </div>

  )
}

export default Sidebar