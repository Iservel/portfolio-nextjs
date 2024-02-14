"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-12">
        I'm a tech-loving Real-Time Analyst by day and a national champion
        hip-hop dancer by night. Since building my first website at 11, I've
        been passionate about crafting web projects that prioritize seamless
        user experiences and engagement.
      </p>

      <p className="font-semibold -mb-12">
        Let's make some digital magic together!
      </p>
    </motion.section>
  );
}
