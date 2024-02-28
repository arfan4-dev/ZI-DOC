/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { getDate, getDay, getMonth, getYear, getTime } from "../lib/getDate";
import { getLocation } from "../lib/getLocation";
import { getVisitor } from "../lib/helper";
import { AnimatePresence, motion } from "framer-motion";

export default function ZI_Doc() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [visitor, setVisitor] = useState();
  const [date, setDate] = useState([{
    currentDay: getDay(),
    currentDate: getDate(),
    currentMonth: getMonth(),
    currentYear: getYear(),
    currentTime: getTime(),
  }])
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

  useEffect(() => {
    let location = getLocation();
    setVisitor(getVisitor(location.latitude, location.longitude));
    const visitorData = JSON.parse(localStorage.getItem("visitor"));
    setVisitor(visitorData);
    setInterval(() => {
      Promise.all([getDate(), getMonth(), getDay(), getYear(), getTime()])
        .then(values => {
          const [currentDate, currentMonth, currentYear, currentDay, currentTime] = values;
          setDate({ ...date, currentDay, currentDate, currentMonth, currentYear, currentTime });
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }, 1000)
  }, [])


  return (
    <div className="hidden sm:block" ref={menuRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>

      {

        !isOpen && <div onClick={() => setIsOpen(!isOpen)} className=" customScrollbar cursor-pointer bg-[#000000] w-[30px] lg:w-[34px] sm:h-[528px] md:h-[527px] lg:h-[703px] xl:h-[607px] 2xl:h-[1056px] 3xl:h-[1079px] absolute left-0 top-0 overflow-y-auto">
          <p className="uppercase text-[#FFFFFF] tracking-[2px]  -rotate-90 absolute sm:-left-[7px]  sm:top-7 lg:-left-[14px] md:top-6 md:-left-2  lg:top-8 xl:-left-[15px]  xl:top-[30px]  2xl:-left-[26px]  2xl:top-14  text-[6px] lg:text-[9px]  2xl:text-[14px]">
            products
          </p>
          <p className="uppercase text-[#FFFFFF] -rotate-90  sm:mt-[40px] md:mt-[35px] lg:mt-[50px] xl:mt-[48px]  2xl:mr-0 2xl:mt-[100px] text-[12px] lg:text-[16px]">|</p>

          <p className="  text-[6px] lg:text-[9px]  2xl:text-[14px] uppercase text-[#FFFFFF] tracking-[2px]  -rotate-90 sm:mt-[35px] md:mt-[35px] lg:mt-[45px] xl:mt-[45px] 2xl:mt-[75px] sm:-mb-[5px] lg:-mb-2  xl:-mb-3  2xl:-mb-2">
            solution
          </p>
          <p className=" uppercase text-[#FFFFFF] -rotate-90 text-[12px] lg:text-[16px]">
            |
          </p>


          <p className="  text-[6px] lg:text-[9px]  2xl:text-[14px] uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 sm:mt-[63px] md:mt-[65px] lg:mt-[87px] 2xl:mt-[135px] sm:-mb-1 md:-mb-[8px]  lg:-mb-2 2xl:-mb-2">
            documentation
          </p>
          <p className="text-[12px] lg:text-[16px] uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 ">
            |
          </p>


          <p className=" text-[6px] lg:text-[9px]  2xl:text-[14px] uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 sm:mt-[95px] md:mt-[95px] lg:mt-[126px] xl:mt-[125px] 2xl:mt-[185px] flex sm:-mb-[5px]  md:-mb-[8px] lg:-mb-2 xl:-mb-3 2xl:-mb-2">
            electronic
            <span className=" text-[#FFFFFF] ml-1  text-[6px] lg:text-[9px]  2xl:text-[14px]">
              {" "}
              signature
            </span>
          </p>
          <p className="uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 text-[12px] lg:text-[16px]">|</p>

          <p className="uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 sm:mt-[40px] md:mt-[43px] lg:mt-[54px] xl:mt-[53px] 2xl:mt-[85px]  text-[6px] lg:text-[9px]  2xl:text-[14px] sm:-mb-[6px] md:-mb-[8px] lg:-mb-2 xl:-mb-3 2xl:-mb-2">
            industries
          </p>
          <p className="uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 text-[12px] lg:text-[16px]">|</p>

          <p className="uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 sm:mt-[80px] md:mt-[85px] lg:mt-[106px]  xl:mt-[105px] 2xl:mt-[165px] flex  text-[6px] lg:text-[9px]  2xl:text-[14px] sm:-mb-[5px] md:-mb-2 lg:-mb-3">
            aes<span className="text-[#FFFFFF] mx-1  text-[6px] lg:text-[9px]  2xl:text-[14px]">256</span>
            <span className="text-[#FFFFFF]   text-[6px] lg:text-[9px]  2xl:text-[14px]">
              encription
            </span>
          </p>
          <p className="uppercase text-[#FFFFFF]  -rotate-90 text-[12px] lg:text-[16px]">|</p>

          <p className=" text-[6px] lg:text-[9px]  2xl:text-[14px] uppercase text-[#FFFFFF] tracking-[2px] -rotate-90 sm:mt-[23px] md:mt-[28px] lg:mt-[33px] xl:mt-8 2xl:mt-16 xl:mb-5 2xl:mb-0">
            pricing
          </p>
        </div>
      }




      {/* Navbar */}

      <div className="sm:ml-12 sm:mr-5 sm:mt-7 md:ml-11 md:mt-6 md:mr-7 lg:ml-14 lg:mr-9 lg:mt-8 xl:ml-14 xl:mr-7 xl:mt-[28px] 2xl:ml-14 2xl:mr-[73px] 2xl:mt-[68px] flex items-center justify-between ">
        <img
          src="/assets/zi_doc_logo.svg"
          alt="zi_doc"
          className="cursor-pointer sm:w-[60px] sm:h-[40px] lg:w-[90px] lg:h-[50px] 2xl:w-[129px] 2xl:h-[60px] 2xl:mr-40"

        />
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="sm:w-[100px] sm:h-[40px] lg:w-[170px] sm:ml-24 md:ml-28 xl:ml-0 lg:h-[40px] 2xl:w-[204px] 2xl:h-[50px]"
        />

        <div className="flex items-center sm:space-x-3 md:space-x-5 lg:space-x-6 xl:space-x-5 2xl:space-x-10">
          <div>
            <p className="font-lato text-[6px] lg:text-[8px] 2xl:text-[12px] tracking-[1px] xl:tracking-[2px]">
              {date.currentTime} {visitor?.visitor_data?.cityName} {visitor?.visitor_data.countryName}
            </p>
            <p className="font-lato text-[#BE9F56] ml-1.5 xl:ml-2 2xl:ml-1 text-end text-[6px] lg:text-[8px] 2xl:text-[12px] tracking-[1px] xl:tracking-[2px]">
              {date.currentYear}, {date.currentDate} {date.currentMonth} {date.currentDay}
            </p>
          </div>
          <img
            src={visitor?.visitor_data.country.app_icon}
            alt="flag logo"
            className=" sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] xl:h-[25px] xl:w-[25px]"
          />
          <FaRegUser className="w-[21px] h-[11px]" />
        </div>
      </div>

      <div className="">
        <img
          src="/assets/ZIMA_AI.svg"
          alt="AI_LOGO"
          className="absolute sm:right-[28px] lg:right-[42px] xl:right-[35px] 2xl:right-[80px] w-[130px] h-[30px] md:w-[150px] md:h-[30px] xl:w-[150px] xl:h-[30px]  2xl:w-[184px] 2xl:h-[40px]"
        />
        <p className={`${isOpen && 'hidden'} font-lato tracking-[1px] absolute text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] sm:right-[28px] lg:right-[40px] xl:right-[34px] 2xl:right-[80px] font-bold sm:top-28 md:top-[110px] lg:top-[135px] xl:top-[120px] 2xl:top-[180px]`}>
          TRY FOR FREE
        </p>
        <div className="bg-[#000000] sm:w-[300px] sm:h-[388px] md:w-[300px] md:h-[382px] lg:w-[400px] lg:h-[533px] xl:w-[380px] xl:h-[451px] 2xl:w-[541px] 2xl:h-[837px] 3xl:h-[846px] absolute sm:top-[140px] md:top-36 lg:top-[170px] xl:top-[155px] 2xl:top-[220px] right-0 rounded-bl-[20px] rounded-tl-[20px]">
          <img
            src="/assets/arrow.svg"
            className="sm:w-[35px] sm:h-[50px] lg:w-[45px] lg:h-[60px] xl:w-[52px] xl:h-[68px] sm:ml-3 sm:mt-5 lg:ml-3 lg:mt-5 xl:ml-7 xl:mt-7"
            alt=""
          />
          <img
            src="/assets/signature.svg"
            alt=""
            className="absolute sm:left-14 sm:top-11  lg:left-20 lg:top-11 xl:left-24 xl:top-14 w-[150px] h-[50px] lg:w-[213px] lg:h-[70px]"
          />
          <hr className="sm:ml-3 sm:mr-3 xl:ml-6 xl:mr-6" />
        </div>
      </div>
    </div>
  );
}
