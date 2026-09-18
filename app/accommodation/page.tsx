"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  CarFront,
  Heart,
  MapPin,
  Navigation,
  Phone,
  Users,
  UserRound,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import styles from "./accommodation.module.css";

const MAP_URL =
  "https://www.google.com/maps/place/Ballia+Guest+House/@25.7564999,84.1487215,17z/data=!3m1!4b1!4m9!3m8!1s0x399265007443c503:0x36db21df19fcfebe!5m2!4m1!1i2!8m2!3d25.7564999!4d84.1512964!16s%2Fg%2F11xcj_l5v5?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D";

const CONTACT_1 = "9616942124";
const CONTACT_2 = "7983025424";

export default function AccommodationPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* Decorative background */}
      <div className={styles.paperTexture} aria-hidden="true" />
      <div className={styles.backgroundArch} aria-hidden="true" />

      <Lantern className={styles.lanternLeft} />
      <Lantern className={styles.lanternRight} />

      <FloralCorner position="topLeft" />
      <FloralCorner position="topRight" />
      <FloralCorner position="bottomLeft" />
      <FloralCorner position="bottomRight" />

      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroInner}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.heroOrnament}>❧</span>

          <p className={styles.eyebrow}>Your Stay With Us</p>

          <h1>A Comfortable Stay</h1>

          <Divider />

          <p className={styles.heroSubtitle}>
            For our loved ones travelling from near and far,
            <br />
            we hope your stay is as warm as our celebration.
          </p>
        </motion.div>

        <div className={`${styles.sideMessage} ${styles.sideMessageLeft}`}>
          <span>More</span>
          <span>Than</span>
          <span>A Stay</span>
          <span>A Warm</span>
          <span>Welcome</span>
          <i>◆</i>
        </div>

        <div className={`${styles.sideMessage} ${styles.sideMessageRight}`}>
          <span>Good</span>
          <span>People</span>
          <span>Make</span>
          <span>Great</span>
          <span>Journeys</span>
          <i>◆</i>
        </div>

        <MughalSkyline />
      </section>

      {/* ACCOMMODATION CARD */}
      <section className={styles.staySection}>
        <motion.div
          className={styles.stayCard}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75 }}
        >
          <div className={styles.imageColumn}>
            <div className={styles.imageArch}>
              <Image
                src="/accommodation/ballia-guest-house.jpg"
                alt="Ballia Guest House"
                fill
                priority
                sizes="(max-width: 800px) 90vw, 42vw"
                className={styles.guestHouseImage}
              />
            </div>

            <p className={styles.imageCaption}>
              A Home Away
              <br />
              From Home
            </p>

            <div className={styles.captionOrnament}>
              <span />
              <b>◆</b>
              <span />
            </div>
          </div>

          <div className={styles.stayInformation}>
            <p className={styles.cardEyebrow}>Groom&apos;s Guest</p>

            <div className={styles.smallDivider}>
              <span />
              <b>◆</b>
              <span />
            </div>

            <h2>Ballia Guest House</h2>

            <div className={styles.address}>
              <MapPin size={27} strokeWidth={1.7} />
              <p>
                k samne, Arya Samaj Road, Sutarpatti,
                <br />
                anna hajare galli, gali main,
                <br />
                Ballia, Uttar Pradesh 277001
              </p>
            </div>

            <div className={styles.infoGrid}>
              <InfoCard
                icon={<MapPin size={25} strokeWidth={1.5} />}
                title="Distance from R.P. Palace"
              >
                <strong>Approx. 80 km</strong>
              </InfoCard>

              <InfoCard
                icon={<CalendarDays size={25} strokeWidth={1.5} />}
                title="Check-in"
              >
                <strong>15th Dec</strong>
                <span>Evening</span>
              </InfoCard>

              <InfoCard
                icon={<CalendarDays size={25} strokeWidth={1.5} />}
                title="Check-out"
              >
                <strong>19th Dec</strong>
                <span>Evening</span>
              </InfoCard>

              <InfoCard
                icon={<UserRound size={25} strokeWidth={1.5} />}
                title="Contact Person"
              >
                <strong>Ashu / Asif</strong>

                <a href={`tel:${CONTACT_1}`}>
                  <Phone size={14} />
                  {CONTACT_1}
                </a>

                <a href={`tel:${CONTACT_2}`}>
                  <Phone size={14} />
                  {CONTACT_2}
                </a>
              </InfoCard>
            </div>

            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.directionsButton}
            >
              <Navigation size={20} strokeWidth={1.6} />
              Get Directions
              <ArrowRight size={20} strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOR OUR GUESTS */}
      <section className={styles.guestSection}>
        <motion.div
          className={styles.guestPanel}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className={styles.sectionEyebrow}>For Our Guests</p>
          <Divider />

          <div className={styles.guestGrid}>
            <GuestItem
              icon={<Users size={29} strokeWidth={1.35} />}
              title="Who Can Stay?"
            >
              This accommodation is arranged
              <br />
              for Groom&apos;s guests.
            </GuestItem>

            <GuestItem
              icon={<BedDouble size={29} strokeWidth={1.35} />}
              title="A Comfortable Stay"
            >
              We hope you have a pleasant
              <br />
              and comfortable stay with us.
            </GuestItem>

            <GuestItem
              icon={<Heart size={29} strokeWidth={1.35} />}
              title="You Are Most Welcome"
            >
              Your presence means a lot to us.
              <br />
              You are most welcome!
            </GuestItem>
          </div>
        </motion.div>
      </section>

      {/* HELP */}
      <section className={styles.helpSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className={styles.sectionEyebrow}>Need Any Help?</p>

          <Divider />

          <p className={styles.helpText}>
            We&apos;re happy to help make your stay comfortable.
            <br />
            Feel free to reach out for any assistance.
          </p>

          <div className={styles.helpButtons}>
            <a href={`tel:${CONTACT_1}`} className={styles.primaryButton}>
              <Phone size={18} strokeWidth={1.6} />
              Contact Us
            </a>

            <Link href="/travel" className={styles.secondaryButton}>
              <CarFront size={19} strokeWidth={1.5} />
              Travel Information
              <ArrowRight size={17} strokeWidth={1.5} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* BOTTOM DECORATION */}
      <section className={styles.bottomSection}>
        <MughalSkyline bottom />

        <div className={styles.finalMessage}>
          <span />
          <p>Different Places, The Same Beautiful Journey</p>
          <span />
        </div>

        <div className={styles.finalDiamond}>◆</div>
      </section>
    </main>
  );
}

/* -------------------------------------------
   SMALL PAGE COMPONENTS
------------------------------------------- */

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoIcon}>{icon}</div>

      <div>
        <p>{title}</p>
        <div className={styles.infoValue}>{children}</div>
      </div>
    </div>
  );
}

function GuestItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.guestItem}>
      <div className={styles.guestIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className={styles.divider} aria-hidden="true">
      <span />
      <b>◆</b>
      <span />
    </div>
  );
}

function Lantern({ className }: { className?: string }) {
  return (
    <div className={`${styles.lantern} ${className ?? ""}`} aria-hidden="true">
      <div className={styles.lanternChain} />
      <div className={styles.lanternTop} />
      <div className={styles.lanternBody}>
        <i />
        <i />
        <i />
      </div>
      <div className={styles.lanternBottom} />
    </div>
  );
}

function FloralCorner({
  position,
}: {
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}) {
  return (
    <div
      className={`${styles.floralCorner} ${styles[position]}`}
      aria-hidden="true"
    >
      <span className={styles.leaf}>❧</span>
      <span className={styles.flower}>✿</span>
      <span className={styles.smallFlower}>❀</span>
      <span className={styles.leafTwo}>❧</span>
    </div>
  );
}

function MughalSkyline({ bottom = false }: { bottom?: boolean }) {
  return (
    <div
      className={`${styles.skyline} ${bottom ? styles.skylineBottom : ""}`}
      aria-hidden="true"
    >
      <div className={styles.minaret}>
        <span />
        <i />
      </div>

      <div className={styles.smallDome} />

      <div className={styles.mainBuilding}>
        <div className={styles.mainDome} />
        <div className={styles.buildingBase}>
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className={styles.smallDome} />

      <div className={styles.minaret}>
        <span />
        <i />
      </div>
    </div>
  );
}
