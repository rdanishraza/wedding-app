"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CalendarDays } from "lucide-react";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="wedding-page">
      <Navbar />

      <section className="wedding-hero">
        {/* Background light */}
        <div className="hero-light" />

        {/* Decorative side glows */}
        <div className="side-glow side-glow-left" />
        <div className="side-glow side-glow-right" />

        {/* Main double arch */}
        <div className="wedding-arch wedding-arch-outer" />
        <div className="wedding-arch wedding-arch-inner" />

        {/* Subtle decorative elements */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.3,
            delay: 0.5,
          }}
          className="side-decoration left-decoration"
          aria-hidden="true"
        >
          <span className="leaf">❧</span>
          <span className="flower">❀</span>
          <span className="spark">✦</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.3,
            delay: 0.5,
          }}
          className="side-decoration right-decoration"
          aria-hidden="true"
        >
          <span className="leaf">❧</span>
          <span className="flower">❀</span>
          <span className="spark">✦</span>
        </motion.div>

        {/* Main content */}
        <div className="hero-content">
          {/* top ornament */}
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="hero-top-ornament"
          >
            ◇
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
            }}
            className="hero-eyebrow"
          >
            Together with our families
          </motion.p>

          {/* Groom */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 0.35,
            }}
            className="couple-name"
          >
            Danish Raza
          </motion.h1>

          {/* Heart */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.3,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 170,
              damping: 13,
              delay: 0.75,
            }}
            className="wedding-heart"
          >
            ♥
          </motion.div>

          {/* Bride */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 0.55,
            }}
            className="couple-name bride-name"
          >
            Rubina Khatoon
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
            className="hero-divider"
          >
            <span />
            <i>◇</i>
            <span />
          </motion.div>

          {/* Dates */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.05,
            }}
            className="wedding-date-container"
          >
            <WeddingDate date="16 December" label="Wedding Day" />

            <div className="date-separator" />

            <WeddingDate date="18 December" label="Walima / Reception" />
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.3,
            }}
            className="explore-wrapper"
          >
            <Link href="/wedding" className="explore-button">
              <span>Explore Our Wedding</span>

              <ArrowRight size={21} strokeWidth={1.5} />
            </Link>
          </motion.div>

          {/* lower decorative piece */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1.7,
            }}
            className="lower-ornament"
          >
            <span />

            <b>❧</b>

            <span />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function WeddingDate({ date, label }: { date: string; label: string }) {
  return (
    <div className="wedding-date">
      <CalendarDays className="date-icon" size={27} strokeWidth={1.3} />

      <p className="date-main">{date}</p>

      <p className="date-caption">{label}</p>
    </div>
  );
}
