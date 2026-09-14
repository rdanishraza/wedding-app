"use client";

import { motion } from "motion/react";

import styles from "@/app/wedding/wedding.module.css";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.8,
      }}
      className={styles.sectionHeading}
    >
      <div className={styles.headingOrnament}>❧</div>

      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}

      <div className={styles.headingLine}>
        <span />
        <b>◇</b>
        <span />
      </div>
    </motion.div>
  );
}
