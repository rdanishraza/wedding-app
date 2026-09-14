"use client";

import Image from "next/image";
import { motion } from "motion/react";

import styles from "@/app/wedding/wedding.module.css";

type CoupleProfileProps = {
  name: string;
  role: string;
  description: string;
  image: string;
  side: "left" | "right";
};

export default function CoupleProfile({
  name,
  role,
  description,
  image,
  side,
}: CoupleProfileProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: side === "left" ? -35 : 35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9 }}
      className={styles.coupleProfile}
    >
      <div className={styles.portraitArch}>
        <div className={styles.portraitInner}>
          <Image
            src={image}
            alt={`${name} portrait`}
            fill
            className={styles.coupleImage}
            sizes="(max-width: 767px) 175px, 180px"
          />
        </div>

        <div className={styles.portraitFlowers}>
          <span>❀</span>
          <span>❧</span>
          <span>✦</span>
        </div>
      </div>

      <div className={styles.profileContent}>
        <h3>{name}</h3>

        <p className={styles.role}>{role}</p>

        <div className={styles.profileDivider}>
          <span />
          <b>◇</b>
          <span />
        </div>

        <p className={styles.profileDescription}>{description}</p>
      </div>
    </motion.article>
  );
}
