"use client";

import { motion } from "motion/react";
import { CalendarDays } from "lucide-react";

import styles from "@/app/wedding/wedding.module.css";

type SpecialDayCardProps = {
  date: string;
  label: string;
  description: string;
};

export default function SpecialDayCard({
  date,
  label,
  description,
}: SpecialDayCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -6,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.7,
      }}
      className={styles.dayCard}
    >
      <CalendarDays
        size={36}
        strokeWidth={1.25}
        className={styles.calendarIcon}
      />

      <h3>{date}</h3>

      <p className={styles.dayLabel}>{label}</p>

      <div className={styles.dayDivider}>
        <span />
        <b>◇</b>
        <span />
      </div>

      <p className={styles.dayDescription}>{description}</p>
    </motion.article>
  );
}
