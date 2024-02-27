/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useRef } from 'react'
import { FiAlignLeft } from 'react-icons/fi'
import 'react-modern-drawer/dist/index.css'
import Sidebar from './Sidebar'
function MobileScreen() {
  const menuRef = useRef(null);

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }
  const handleClickOutside = useMemo(
    () => (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    },
    [menuRef]
  );

  useEffect(() => {
    const handleClick = (e) => handleClickOutside(e);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClickOutside]);
  return (
    <div className='sm:hidden' ref={menuRef}>
      <div className='w-[100%] bg-black h-[40px] flex items-center justify-between'>
        <button
          onClick={toggleDrawer}
          className="ml-4"
        >
          <FiAlignLeft color='white' className='' />
        </button>
        <img src="/assets/zi_doc_lock.svg" alt="" className='mr-4 w-[30px]' />
      </div>
    {
      isOpen && <Sidebar/>

    }
      {/* <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className={`customScrollbar overflow-auto h-screen`}
        size={185}
      >
        <div className=" bg-black ">
          <div className="relative  h-[200px]">
            <p className="text-[#FFFFFF] -rotate-90 text-[10px] tracking-[3px] absolute -left-7 top-[50px] "><span className="text-[#BE9F56] ">|</span> <span>PRODUCTS</span></p>
            <img src="assets/zi_doc_lock.svg" alt="zi_doc_lock.svg" className="w-[100px] h-[50px] absolute  left-12 top-[48px]  " />
          </div>
    <div className='customScrollbar overflow-auto h-[600px]'>

  
          <p className="text-[#2E2E2E] tracking-[6px] text-[22px] uppercase absolute  top-[110px] left-5">products</p>
          <p className="text-[7px] text-end text-[#FFFFFF] font-bold uppercase tracking-[3px] absolute top-[150px] left-[95px] ">signatures</p>
          <p className="text-[7px]  uppercase tracking-[2px] font-bold text-[#FFFFFF] absolute top-[170px] left-[8px] ">ELECTRONIC SIGNATURE</p>
          <p className="text-[6px]  uppercase tracking-[1.3px] font-bold text-[#2E2E2E] absolute top-[190px] left-[8px]">WORLDS MOST SECURE WAY TO SIGN <br /> AND SEND</p>

          <p className="text-[7px] uppercase tracking-[2px] font-bold text-[#FFFFFF] absolute top-[215px] left-[8px]  ">E-WITNESS</p>

          <p className="text-[6px]  uppercase tracking-[1.3px] font-bold text-[#2E2E2E] absolute top-[235px] left-[8px] ">WITNESS & SIGN CONFIDENTIAL AND <br /> HIGH VALUE AGREEMENTS/CONTRACTS
          </p>


          <p className="text-[7px]  uppercase tracking-[2px] font-bold text-[#FFFFFF] absolute top-[260px] left-[8px] ">IDENTITY VERIFICATION</p>
          <p className="text-[6px]  uppercase tracking-[1.3px] font-bold text-[#2E2E2E] absolute top-[280px] left-[8px]  ">WORKING SEAMLESSLY WITH AES <br /> 256-BIT ENCRYPTION AND ZIMO MEET
          </p>


          <p className="text-[7px]  text-end text-[#FFFFFF] font-bold uppercase tracking-[3px] absolute top-[312px] left-[100px] ">contracts</p>
          <p className="text-[7px]  uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute top-[330px] left-[5px] ">CONTRACT/AGREEMENT MANAGEMENT</p>
          <p className="text-[6px]  uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute top-[350px] left-[8px] ">ORGANISED, AUTOMATED DUCUMENT
          </p>
          <p className="text-[7px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute top-[365px] left-[90px]   "> WORKFLOWS</p>


          <p className="text-[7px]  uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute top-[385px] left-[8px] ">DOCUMENT GENERATION</p>
          <p className="text-[7px]  uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute top-[405px] left-[8px]  ">GENERATE DOCUMENTS SEAMLESSLY <br /> THROUGH YOUR DEDICATED PORTAL</p>

          <p className="text-[7px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute top-[435px] left-[8px]               ">DATA SECURITY</p>
          <p className="text-[6px] text-justify  uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute top-[455px] left-[8px] ">ALL SIGNATURES,CONTRACTS,AGREEMENTS, <br /> DOCUMENTS AND WITNESS STATEMENTS <br /> KEPT UNDER AES 256-BITENCRYPTION FOR <br /> THE DURATION OF YOUR MEMBERSHIP</p>

          <p className="text-[7px]  uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute top-[500px] left-[127px]">HISTORY</p>


          <p className="text-[7px]  uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute top-[515px] left-[8px] ">DOC.SAFE</p>
          <p className="text-[6px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute top-[535px] left-[8px]  ">SEARCH, VIEW, DOWNLOAD AND SHARE <br /> EVERY SIGNATURE, CONTRACT, AGREEMENT,<br />AND DOCUMENT FROM YOUR PORTAL</p>



          <p className="text-[7px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute top-[570px] left-[135px]">MORE</p>
          <p className="text-[7px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute top-[590px] left-[8px] ">PAYMENTS</p>

          <p className="text-[6px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute top-[610px] left-[8px] ">AGREE, SIGN AND MAKE PAYMENT(S) IN A<br />SINGLE CLICK</p>

          <p className="text-[7px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute top-[640px] left-[8px] ">CLICKWRAPS</p>
          <p className="text-[6px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute top-[660px] left-[8px] ">CAPTURE CONSENT WITH A SINGLE CLICK
          </p>

          <p className="text-[7px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute top-[680px] left-[8px] ">WEB FORMS</p>
          <p className="text-[6px] uppercase tracking-[1px] font-bold text-[#2E2E2E] absolute top-[700px] left-[8px] ">INCORPORATE DATA COLLECTION AND <br /> SPEED UP SIGNING</p>

          <p className='text-[7px] uppercase tracking-[1px] font-bold text-[#FFFFFF] absolute top-[730px] left-[75px] '>ALL PRODUCTS</p>
          <img src="assets/right_arrow.svg" alt="" className='w-[15px] h-[15px] absolute top-[728px] left-[140px] ' />
        </div>
        </div>
      </Drawer>    */}

<div>
  <img src="assets/ZIMA_AI.svg" className=' absolute right-4 top-14' alt="img" />
  <p className={`${isOpen&& 'hidden'} font-lato tracking-[1px] absolute text-[10px] right-[16px]  font-bold top-28 `}>
          TRY FOR FREE
        </p>
</div>
<div className="bg-[#000000] w-[300px] h-[385px]  absolute top-[140px] right-0 rounded-bl-[20px] rounded-tl-[20px]">
          <img
            src="/assets/arrow.svg"
            className="w-[35px] h-[50px] ml-3 mt-5 "
            alt=""
          />
          <img
            src="/assets/signature.svg"
            alt=""
            className="absolute left-14 top-11   w-[150px] h-[50px] "
          />
          <hr className="ml-3 mr-3" />
        </div>

       </div>

  )
}

export default MobileScreen
