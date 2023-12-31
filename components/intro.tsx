"use client";

import React from "react";
import Image from "next/image";
import ProfilePic from "@/public/Photo.png";
import { motion } from "framer-motion";
import Link from "next/link";
import * as BsIcon from "react-icons/bs";
import * as HiIcon from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home", { amount: 0.5 });

  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 max-w-screen-md scroll-mt-[100rem] text-center sm:mb-0"
    >
      {/* profile picture */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={ProfilePic}
              alt="fadil-ardiansyah-profile-picture"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-32 w-32 rounded-full border-[0.3rem] border-white
            object-cover object-[50%_0%] shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* introduction desc container */}
      <motion.div
        className="leading-[1.5 mb-10  px-4 text-xl font-medium sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="mt-4 text-2xl font-medium">Fadil Ardiansyah</h1>
        <h1 className="mt-4">
          <span className="font-bold">Hello, </span> I'm{" "}
          <span className="font-bold">web developer.</span> I've dedicated{" "}
          <span className="underline">countless</span> hours with over the past{" "}
          <span className="font-bold">
            {new Date().getFullYear() - 2020}+ years
          </span>{" "}
          to learning <span className="font-bold">web development</span>. I
          enjoy building <span className="italic underline">sites & apps.</span>
        </h1>
      </motion.div>

      {/* CTA for contact container */}
      <motion.div
        className="flex flex-col justify-center gap-4 px-4 font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* button contact me */}
        <Link
          href={`#contact`}
          className="group flex items-center justify-center gap-2 rounded-md bg-gray-900 px-7 py-4 text-white 
          shadow-sm outline-none transition duration-200 hover:scale-110 hover:bg-gray-950 focus:scale-110
          active:scale-105 sm:py-3 sm:text-sm"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsIcon.BsArrowBarRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        {/* button to donwload cv */}
        <a
          className="group flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 
          shadow-sm outline-none transition duration-200 hover:scale-110 focus:scale-110 active:scale-105 dark:bg-black/40
          sm:py-3 sm:text-sm"
          href="https://drive.google.com/file/d/1UtxJv5ZPRdQ6Mie6QSVdoj1X0bMIfyIy/view?usp=sharing"
          target="_blank"
        >
          Download CV{" "}
          <HiIcon.HiDownload className="transition group-hover:scale-110" />
        </a>

        {/* button link for linkedin */}
        <a
          href="https://www.linkedin.com/in/fadhilansyah25/"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-3 
          py-4 text-[#0077B5] shadow-sm outline-none transition duration-200 hover:scale-[1.2] 
          focus:scale-110 active:scale-105 dark:bg-black/40 sm:py-3"
          target="_blank"
        >
          <BsIcon.BsLinkedin />
          <p className="sm:hidden">Linkedin</p>
        </a>

        {/* button link for github */}
        <a
          href="https://github.com/fadhilansyah25"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-3 py-4 
          shadow-sm outline-none transition duration-200 hover:scale-[1.2] focus:scale-110 active:scale-105 
          dark:bg-black/40 sm:py-3"
          target="_blank"
        >
          <BsIcon.BsGithub />
          <p className="sm:hidden">Github</p>
        </a>
      </motion.div>
    </section>
  );
}
