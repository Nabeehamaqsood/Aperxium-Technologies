"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function TeamSlider({ teamMembers }: { teamMembers: any[] }) {
  const scrollRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={scrollRef}
        className="flex whitespace-nowrap py-12 gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-8 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="inline-block w-[calc(50%-6px)] sm:w-64 md:w-80 flex-shrink-0 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-gray-100 dark:border-gray-700 p-4 sm:p-6 md:p-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6">
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full border-4 border-white dark:border-gray-800"
                sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                priority
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mt-2">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}