'use client';

import React, { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/react';
import { MdLanguage } from 'react-icons/md';

import { useParams, useRouter } from 'next/navigation';
// import { MoonIcon } from './MoonIcon';
// import { SunIcon } from './SunIcon';

export const LanguageSwitcher = () => {
  const [isSelected, setIsSelected] = useState(true);
  // const [choiceLang, setChoiceLang] = useState(false);
  const router = useRouter();
  const searchParams = useParams();

  useEffect(() => {
    if (searchParams.lang === 'uk') {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  }, [searchParams, setIsSelected]);

  const switchLang = () => {
    const lang = isSelected ? 'uk' : 'en';
    router.push(`/${lang}`);
    setIsSelected((pre) => !pre);
  };

  return (
    <Switch
      isSelected={isSelected}
      onValueChange={switchLang}
      className="justify-between "
      // className={`${isSelected ? 'translate-x-0' : 'translate-x-6'}`}
      classNames={{
        base: 'w-[95px] h-[45px] ',
        wrapper:
          'w-[95px] h-[45px] bg-transparent gradient-border before:p-[1.5px] justify-center',
        thumb: 'bg-transparent',
        thumbIcon: 'fill-white  ml-0',
        label: '',
        startContent: 'text-lightWhite text-[25px]',
        endContent: 'text-lightWhite text-[25px]',
      }}
      thumbIcon={<MdLanguage size={16} />}
      defaultSelected
      // size="lg"
      color="danger"
      startContent={<span>EN</span>}
      endContent={<span>UA</span>}
    ></Switch>
  );
};

// "use client";

// import { useEffect, useState } from "react";
// // import { Switch } from "@headlessui/react";
// import { useParams, useRouter } from "next/navigation";

// export const LanguageSwitcher = () => {
//   const [choiceLang, setChoiceLang] = useState(false);
//   const router = useRouter();
//   const searchParams = useParams();

//   useEffect(() => {
//     if (searchParams.lang === "uk") {
//       setChoiceLang(false);
//     } else {
//       setChoiceLang(true);
//     }
//   }, [searchParams, setChoiceLang]);

//   const switchLang = () => {
//     const lang = choiceLang ? "uk" : "en";
//     router.push(`/${lang}`);
//     setChoiceLang((pre) => !pre);
//   };

//   return (
//     <div className="ml-10">
//       <Switch
//         checked={choiceLang}
//         onChange={switchLang}
//         className="relative flex items-center justify-around w-12 h-6 bg-lightBlue cursor-pointer rounded-full  "
//       >
//         <span className="text-[9px]">UA</span>
//         <span
//           aria-hidden="true"
//           className={`${
//             choiceLang ? "translate-x-0" : "translate-x-6"
//           } absolute top-[2px] right-[2px] bottom-[2px] left-[2px] cursor-pointer w-5 h-5 bg-blue pointer-events-none inline-block transform rounded-full transition duration-200 ease-in-out`}
//         />
//         <span className="text-[9px]">EN</span>
//       </Switch>
//     </div>
//   );
// };

// // export const LanguageSwitcher = () => {
// //   const [lang, setLang] = useState(false);
// //   return (
// //     <label className="relative flex items-center justify-evenly w-12 h-6 p-[2px] rounded-3xl bg-lightBlue">
// //       <p className="text-[9px]">UA</p>
// //       <input
// //         className="hidden"
// //         type="checkbox"
// //         name="type"
// //         // value={type}
// //         // onClick={formik.handleChange}
// //       />
// //       <span
// //         className={`${
// //           lang ? "translate-x-9" : "translate-x-0"
// //         }absolute cursor-pointer w-5 h-5 rounded-3xl bg-blue`}
// //       >
// //         <span className="">
// //           {/* {!type ? (
// //               <span>
// //                 <svg className="">
// //                   <use href={Icons + "#icon-minis"}></use>
// //                 </svg>
// //               </span>
// //             ) : (
// //               <span>
// //                 <svg className="">
// //                   <use href={Icons + "#icon-plus"}></use>
// //                 </svg>
// //               </span>
// //             )} */}
// //         </span>
// //       </span>
// //       <p className="text-[9px]">EN</p>
// //     </label>
// //   );
// // };
