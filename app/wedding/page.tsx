"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";

import styles from "./wedding.module.css";

import SectionHeading from "@/components/SectionHeading";
import CoupleProfile from "@/components/CoupleProfile";
import SpecialDayCard from "@/components/SpecialDayCard";

export default function WeddingPage() {
  return (
    <main className={styles.weddingPage}>
      <Navbar />

      {/* =====================================================
          HERO / MAIN INVITATION
      ====================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroBackground} />

        {/* LEFT DECORATIVE PANEL */}
        <div className={`${styles.sidePanel} ${styles.leftPanel}`}>
          <div className={styles.sideFlowers}>
            <span>❀</span>
            <span>❧</span>
            <span>✦</span>
          </div>

          <p>
            BETTER
            <br />
            TOGETHER
            <br />
            ALWAYS
          </p>

          <div className={styles.sideLine} />
        </div>

        {/* RIGHT DECORATIVE PANEL */}
        <div className={`${styles.sidePanel} ${styles.rightPanel}`}>
          <div className={styles.sideFlowers}>
            <span>❀</span>
            <span>❧</span>
            <span>✦</span>
          </div>

          <p>
            A
            <br />
            BEAUTIFUL
            <br />
            BEGINNING
          </p>

          <div className={styles.sideLine} />
        </div>

        {/* MAIN ARCH */}
        <div className={styles.mainArch} />
        <div className={styles.innerArch} />

        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className={styles.topOrnament}
          >
            ❧
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
            className={styles.heroBlessing}
          >
            WITH THE BLESSINGS OF ALLAH
            <br />
            AND OUR FAMILIES
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
            }}
            className={styles.heroInvitation}
          >
            WE INVITE YOU TO CELEBRATE
            <br />
            THE WEDDING OF
          </motion.p>

          {/* DANISH */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 0.4,
            }}
            className={styles.coupleName}
          >
            Danish Raza
          </motion.h1>

          {/* & */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className={styles.nameSeparator}
          >
            <span />
            <b>&amp;</b>
            <span />
          </motion.div>

          {/* RUBINA */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 0.55,
            }}
            className={styles.coupleName}
          >
            Rubina Khatoon
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
            }}
            className={styles.middleOrnament}
          >
            ❧
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            className={styles.heroTagline}
          >
            TWO HEARTS
            <span>•</span>
            ONE JOURNEY
            <span>•</span>A LIFETIME OF TOGETHERNESS
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          MEET THE COUPLE
      ====================================================== */}

      <section className={`${styles.section} ${styles.coupleSection}`}>
        <SectionHeading
          title="Meet The Couple"
          subtitle="Two lives, one beautiful beginning"
        />

        <div className={styles.coupleGrid}>
          <CoupleProfile
            name="Danish Raza"
            role="Groom"
            side="left"
            image="/wedding/groom.png"
            description="A kind heart, a steady companion, and a beautiful journey ahead."
          />

          <div className={styles.verticalDivider}>
            <span />
            <b>◇</b>
            <span />
          </div>

          <CoupleProfile
            name="Rubina Khatoon"
            role="Bride"
            side="right"
            image="/wedding/bride.png"
            description="A graceful soul, a source of strength, and a blessing in every way."
          />
        </div>
      </section>

      {/* =====================================================
          SPECIAL DAYS
      ====================================================== */}

      <section className={`${styles.section} ${styles.daysSection}`}>
        <SectionHeading
          title="Our Special Days"
          subtitle="Two celebrations, one beautiful beginning"
        />

        <div className={styles.daysGrid}>
          <SpecialDayCard
            date="16 December"
            label="Wedding Day"
            description="Join us as we begin our new chapter with our Nikah and wedding celebration."
          />

          <SpecialDayCard
            date="18 December"
            label="Walima / Reception"
            description="Continue the celebrations with us as we gather for our Walima."
          />
        </div>

        <div className={styles.sideBotanicalLeft}>❧</div>
        <div className={styles.sideBotanicalRight}>❧</div>
      </section>

      {/* =====================================================
          BLESSING
      ====================================================== */}

      <section className={styles.blessingSection}>
        <div className={styles.blessingArchLeft}>
          <span className={styles.lantern}>✦</span>
        </div>

        <div className={styles.blessingArchRight}>
          <span className={styles.lantern}>✦</span>
        </div>

        <SectionHeading title="A Blessing For Our Journey" />

        <motion.blockquote
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.9,
          }}
          className={styles.quranQuote}
        >
          “And We created you in pairs”
        </motion.blockquote>

        <p className={styles.quranReference}>— QUR&apos;AN 78:8 —</p>

        <motion.p
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className={styles.blessingText}
        >
          May Allah place barakah in our union, bless our families,
          <br />
          and keep us together in happiness, Imaan and love.
        </motion.p>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className={styles.finalSection}>
        <div className={styles.finalFlowerLeft}>
          ❀<span>❧</span>
        </div>

        <div className={styles.finalFlowerRight}>
          ❀<span>❧</span>
        </div>

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className={styles.finalMessage}
        >
          YOUR PRESENCE AND BLESSINGS WILL MAKE
          <br />
          OUR CELEBRATION COMPLETE
        </motion.p>

        <div className={styles.finalOrnament}>❧</div>

        <Link href="/schedule" className={styles.scheduleButton}>
          <span>View Wedding Schedule</span>

          <ArrowRight size={19} strokeWidth={1.4} />
        </Link>

        <div className={styles.finalDivider}>
          <span />
          <b>❧</b>
          <span />
        </div>

        <p className={styles.finalName}>DANISH &amp; RUBINA</p>
      </section>
    </main>
  );
}
