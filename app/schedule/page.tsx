"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  MapPin,
  Plane,
  Users,
  Landmark,
  HeartHandshake,
  Camera,
  UtensilsCrossed,
  CarFront,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import styles from "./schedule.module.css";

type DayType = "wedding" | "walima";

type ScheduleEvent = {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const weddingEvents: ScheduleEvent[] = [
  {
    time: "04:00 PM",
    title: "Baarat Rukhsati",
    description: "The Baarat begins its journey for the wedding celebration.",
    icon: <CarFront size={24} strokeWidth={1.35} />,
  },
  {
    time: "06:00 PM",
    title: "Baarat Arrival",
    description: "The Baarat arrives and is warmly welcomed by the families.",
    icon: <Users size={24} strokeWidth={1.35} />,
  },
  {
    time: "07:00 PM",
    title: "Nikah Ceremony",
    description: "The Nikah ceremony begins.",
    icon: <Landmark size={24} strokeWidth={1.35} />,
  },
  {
    time: "08:00 PM",
    title: "Dua & Blessings",
    description: "Prayers and blessings for the newly married couple.",
    icon: <HeartHandshake size={24} strokeWidth={1.35} />,
  },
  {
    time: "08:30 PM",
    title: "Meet the Couple",
    description: "Greetings, photographs and time with family.",
    icon: <Camera size={24} strokeWidth={1.35} />,
  },
  {
    time: "09:30 PM",
    title: "Dinner",
    description: "Dinner is served.",
    icon: <UtensilsCrossed size={24} strokeWidth={1.35} />,
  },
  {
    time: "11:30 PM",
    title: "Rukhsati / Departure",
    description: "The wedding celebration concludes.",
    icon: <CarFront size={24} strokeWidth={1.35} />,
  },
];

const walimaEvents: ScheduleEvent[] = [
  {
    time: "06:00 PM",
    title: "Guest Arrival",
    description: "Guests arrive and are welcomed for the evening celebration.",
    icon: <Users size={24} strokeWidth={1.35} />,
  },
  {
    time: "06:30 PM",
    title: "Welcome & Reception",
    description: "The Walima celebration begins with family and friends.",
    icon: <Sparkles size={24} strokeWidth={1.35} />,
  },
  {
    time: "07:00 PM",
    title: "Bride & Groom Arrival",
    description: "The newly married couple joins the celebration.",
    icon: <HeartHandshake size={24} strokeWidth={1.35} />,
  },
  {
    time: "07:30 PM",
    title: "Meet & Greet",
    description: "Greetings, photographs and beautiful moments together.",
    icon: <Camera size={24} strokeWidth={1.35} />,
  },
  {
    time: "08:00 PM",
    title: "Dinner",
    description: "Dinner is served to our family and friends.",
    icon: <UtensilsCrossed size={24} strokeWidth={1.35} />,
  },
  {
    time: "10:00 PM",
    title: "Celebration Concludes",
    description: "The evening concludes with our love and gratitude.",
    icon: <Sparkles size={24} strokeWidth={1.35} />,
  },
];

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<DayType>("wedding");

  const isWedding = selectedDay === "wedding";

  const events = isWedding ? weddingEvents : walimaEvents;

  return (
    <main className={styles.schedulePage}>
      <Navbar />

      {/* ================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div className={styles.paperTexture} aria-hidden="true" />

      <div
        className={`${styles.architecturePanel} ${styles.leftArchitecture}`}
        aria-hidden="true"
      >
        <div className={styles.architectureArch} />
      </div>

      <div
        className={`${styles.architecturePanel} ${styles.rightArchitecture}`}
        aria-hidden="true"
      >
        <div className={styles.architectureArch} />

        <div className={styles.mosqueIllustration}>
          <div className={styles.mosqueDome} />

          <div className={styles.mosqueBody}>
            <span />
            <span />
            <span />
          </div>

          <div className={`${styles.minaret} ${styles.minaretLeft}`} />

          <div className={`${styles.minaret} ${styles.minaretRight}`} />
        </div>
      </div>

      {/* ================================================
          HANGING LANTERNS
      ================================================= */}

      <div
        className={`${styles.lanternGroup} ${styles.lanternGroupLeft}`}
        aria-hidden="true"
      >
        <div className={`${styles.lantern} ${styles.lanternOne}`}>
          <span className={styles.lanternChain} />
          <div className={styles.lanternTop} />
          <div className={styles.lanternBody}>
            <i />
          </div>
          <div className={styles.lanternBottom} />
        </div>

        <div className={`${styles.lantern} ${styles.lanternTwo}`}>
          <span className={styles.lanternChain} />
          <div className={styles.lanternTop} />
          <div className={styles.lanternBody}>
            <i />
          </div>
          <div className={styles.lanternBottom} />
        </div>
      </div>

      <div
        className={`${styles.lanternGroup} ${styles.lanternGroupRight}`}
        aria-hidden="true"
      >
        <div className={`${styles.lantern} ${styles.lanternOne}`}>
          <span className={styles.lanternChain} />
          <div className={styles.lanternTop} />
          <div className={styles.lanternBody}>
            <i />
          </div>
          <div className={styles.lanternBottom} />
        </div>
      </div>

      {/* ================================================
          BOTANICAL DECORATION
      ================================================= */}

      <BotanicalDecoration className={styles.botanicalTopLeft} />

      <BotanicalDecoration className={styles.botanicalTopRight} mirror />

      <BotanicalDecoration className={styles.botanicalMiddleLeft} />

      <BotanicalDecoration className={styles.botanicalBottomLeft} />

      <BotanicalDecoration className={styles.botanicalBottomRight} mirror />

      {/* ================================================
          PAGE CONTENT
      ================================================= */}

      <div className={styles.pageContent}>
        {/* HERO */}

        <section className={styles.hero}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroOrnament}
          >
            ❧
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className={styles.eyebrow}
          >
            OUR CELEBRATION
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
          >
            Wedding Schedule
          </motion.h1>

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
              duration: 0.8,
              delay: 0.4,
            }}
            className={styles.titleDivider}
          >
            <span />
            <b>◇</b>
            <span />
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
              delay: 0.45,
            }}
            className={styles.heroSubtitle}
          >
            Two beautiful days, one unforgettable beginning.
          </motion.p>
        </section>

        {/* ================================================
            DATE SELECTOR
        ================================================= */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.55,
          }}
          className={styles.dateSelector}
        >
          <button
            type="button"
            onClick={() => setSelectedDay("wedding")}
            className={`${styles.dateButton} ${
              isWedding ? styles.dateButtonActive : ""
            }`}
          >
            <span className={styles.dateIcon}>❧</span>

            <span className={styles.dateButtonText}>
              <strong>16 December</strong>
              <small>Wedding Day</small>
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedDay("walima")}
            className={`${styles.dateButton} ${
              !isWedding ? styles.dateButtonActive : ""
            }`}
          >
            <span className={styles.dateIcon}>♧</span>

            <span className={styles.dateButtonText}>
              <strong>18 December</strong>
              <small>Walima / Reception</small>
            </span>
          </button>
        </motion.section>

        {/* ================================================
            TIMELINE CARD
        ================================================= */}

        <section className={styles.timelineShell}>
          <div className={styles.timelineInnerBorder} />

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.4,
              }}
              className={styles.timelineContent}
            >
              <header className={styles.dayHeading}>
                <div className={styles.dayOrnament}>❧</div>

                <p>{isWedding ? "16 DECEMBER" : "18 DECEMBER"}</p>

                <h2>{isWedding ? "Wedding Day" : "Walima / Reception"}</h2>

                <div className={styles.dayHeadingDivider}>
                  <span />
                  <b>◇</b>
                  <span />
                </div>

                <em>
                  {isWedding
                    ? "A day of faith, family and forever."
                    : "An evening of celebration, gratitude and togetherness."}
                </em>
              </header>

              <div className={styles.timeline}>
                {events.map((event, index) => (
                  <motion.div
                    key={`${selectedDay}-${event.title}`}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className={styles.timelineEvent}
                  >
                    <time>{event.time}</time>

                    <div className={styles.eventIcon}>{event.icon}</div>

                    <div className={styles.timelineMarker}>
                      <span>◇</span>
                    </div>

                    <div className={styles.eventDetails}>
                      <h3>{event.title}</h3>

                      <p>{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ================================================
            GENTLE NOTE
        ================================================= */}

        <motion.section
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
            duration: 0.8,
          }}
          className={styles.gentleNote}
        >
          <div className={styles.noteOrnament}>❧</div>

          <h2>A Gentle Note</h2>

          <div className={styles.noteDivider}>
            <span />
            <b>◇</b>
            <span />
          </div>

          <p>
            We kindly request our guests to arrive a little before the ceremony
            <br />
            so we may begin the celebration together.
          </p>
        </motion.section>

        {/* ================================================
            BUTTONS
        ================================================= */}

        <section className={styles.navigationButtons}>
          <Link
            href="/venue"
            className={`${styles.bottomButton} ${styles.primaryButton}`}
          >
            <MapPin size={19} strokeWidth={1.5} />

            <span>View Venue</span>

            <ArrowRight size={17} strokeWidth={1.5} />
          </Link>

          <Link
            href="/travel"
            className={`${styles.bottomButton} ${styles.secondaryButton}`}
          >
            <Plane size={19} strokeWidth={1.5} />

            <span>Travel Information</span>

            <ArrowRight size={17} strokeWidth={1.5} />
          </Link>
        </section>

        {/* ================================================
            FOOTER MESSAGE
        ================================================= */}

        <footer className={styles.scheduleFooter}>
          <div className={styles.footerOrnament}>❧</div>

          <p>Together in Faith, Forever in Love</p>

          <div className={styles.footerDivider}>
            <span />
            <b>◇</b>
            <span />
          </div>
        </footer>
      </div>
    </main>
  );
}

/* =========================================================
   BOTANICAL DECORATION COMPONENT
========================================================= */

function BotanicalDecoration({
  className,
  mirror = false,
}: {
  className: string;
  mirror?: boolean;
}) {
  return (
    <div
      className={`${styles.botanical} ${className} ${
        mirror ? styles.botanicalMirror : ""
      }`}
      aria-hidden="true"
    >
      <div className={styles.botanicalStem} />

      <span className={`${styles.leaf} ${styles.leafOne}`}>❧</span>

      <span className={`${styles.leaf} ${styles.leafTwo}`}>❧</span>

      <span className={`${styles.leaf} ${styles.leafThree}`}>❧</span>

      <span className={`${styles.flower} ${styles.flowerOne}`}>❀</span>

      <span className={`${styles.flower} ${styles.flowerTwo}`}>✿</span>

      <span className={styles.goldBud}>✦</span>
    </div>
  );
}
