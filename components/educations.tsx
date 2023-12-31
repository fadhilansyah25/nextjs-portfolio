"use client";

import React from "react";
import { educationsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import TimelineElement from "./timeline-element";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export default function Educations() {
  const { ref } = useSectionInView("Educations", { amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      id="educations"
      className="mb-20 mt-28 max-w-[45rem] scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* section title */}
      <SectionHeading>Educations</SectionHeading>

      {/* timeline container */}
      <ol className="relative mx-4 border-l border-gray-200 dark:border-gray-700 sm:mx-8">
        {educationsData.map((item, index) => (
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
          >
            <TimelineElement {...item} />
          </motion.div>
        ))}
      </ol>
    </motion.section>
  );
}
