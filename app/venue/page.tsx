"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  ArrowRight,
  BedDouble,
  CarFront,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
  Plane,
  Users,
  UtensilsCrossed,
  Accessibility,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import styles from "./venue.module.css";

type VenueKey = "wedding" | "walima";

type Venue = {
  key: VenueKey;
  date: string;
  occasion: string;
  name: string;
  address: string;
  cityState: string;
  phoneDisplay: string;
  mapUrl: string;
  image: string;
  imageAlt: string;
  sideMessage: string[];
  imageCaption: string;
};

const venues: Venue[] = [
  {
    key: "wedding",
    date: "16 December",
    occasion: "Wedding Venue",
    name: "R.P. PALACE",
    address: "Rauza, Alampatti, Ghazipur, Uttar Pradesh 233002",
    cityState: "Ghazipur / Uttar Pradesh",
    phoneDisplay: "9616942124 / 9411327469 / 7983025424",
    mapUrl:
      "https://www.google.com/maps/place/R.P.+PALACE/@25.5949143,83.5862988,17z/data=!3m1!4b1!4m6!3m5!1s0x3991ff90ec588993:0x9e70d1c0f3d473f1!8m2!3d25.5949143!4d83.5888737!16s%2Fg%2F11trxd0kp4?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
    image: "/venue/rp-palace.png",
    imageAlt: "R.P. Palace wedding venue",
    sideMessage: ["Where", "Love Brings", "People", "Together"],
    imageCaption: "A Day of Faith, Family and Forever",
  },

  {
    key: "walima",
    date: "18 December",
    occasion: "Walima / Reception",
    name: "Tejas Palace",
    address:
      "Road, near Hanuman Ji Mandir, Pauharipur, Garwar, Ballia, Uttar Pradesh 277001",
    cityState: "Ballia / Uttar Pradesh",
    phoneDisplay: "9616942124 / 9411327469 / 7983025424",
    mapUrl:
      "https://www.google.com/maps/place/Tejas+palace/@25.8661652,83.9249131,12z/data=!4m10!1m2!2m1!1sThe+tejas+marriage+hall+ballia!3m6!1s0x3992658806999e0f:0x23f6a91cb1aabcb4!8m2!3d25.7613042!4d84.1351351!15sCh5UaGUgdGVqYXMgbWFycmlhZ2UgaGFsbCBiYWxsaWFaICIedGhlIHRlamFzIG1hcnJpYWdlIGhhbGwgYmFsbGlhkgEMYmFucXVldF9oYWxs4AEA!16s%2Fg%2F11pkcj8bmy?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
    image: "/venue/tejas-palace.png",
    imageAlt: "Tejas Palace reception venue",
    sideMessage: ["An Evening", "Of", "Celebration", "And", "Gratitude"],
    imageCaption: "An Evening to Cherish Together",
  },
];

export default function VenuePage() {
  const [selectedVenue, setSelectedVenue] = useState<VenueKey>("wedding");

  const activeVenue =
    venues.find((venue) => venue.key === selectedVenue) ?? venues[0];

  return (
    <main className={styles.venuePage}>
      <Navbar />

      {/* Background texture */}
      <div className={styles.paperTexture} aria-hidden="true" />

      {/* Decorative architecture */}
      <div
        className={`${styles.backgroundArch} ${styles.backgroundArchLeft}`}
        aria-hidden="true"
      />

      <div
        className={`${styles.backgroundArch} ${styles.backgroundArchRight}`}
        aria-hidden="true"
      />

      {/* Taj / mosque inspired background */}
      <div className={styles.tajDecoration} aria-hidden="true">
        <div className={styles.tajMainDome} />

        <div className={styles.tajBuilding}>
          <span />
          <span />
          <span />
        </div>

        <div className={`${styles.tajMinaret} ${styles.tajMinaretLeft}`} />

        <div className={`${styles.tajMinaret} ${styles.tajMinaretRight}`} />
      </div>

      {/* Lanterns */}
      <Lantern className={styles.lanternLeftOne} />

      <Lantern className={styles.lanternLeftTwo} small />

      <Lantern className={styles.lanternRight} />

      {/* Floral decorations */}
      <FloralDecoration className={styles.flowerTopLeft} />

      <FloralDecoration className={styles.flowerTopRight} mirror />

      <FloralDecoration className={styles.flowerMiddleLeft} />

      <FloralDecoration className={styles.flowerMiddleRight} mirror />

      <FloralDecoration className={styles.flowerBottomLeft} />

      <FloralDecoration className={styles.flowerBottomRight} mirror />

      <div className={styles.pageContent}>
        {/* =============================================
            HERO
        ============================================== */}

        <section className={styles.hero}>
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className={styles.heroOrnament}
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
              delay: 0.1,
            }}
            className={styles.eyebrow}
          >
            WHERE WE CELEBRATE
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
            Our Venues
          </motion.h1>

          <Divider />

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.4,
            }}
            className={styles.heroSubtitle}
          >
            The places where our beautiful beginning
            <br />
            will be celebrated.
          </motion.p>

          <div className={styles.heroSideMessage} aria-hidden="true">
            <span>Different</span>
            <span>Places,</span>
            <span>The Same</span>
            <span>Beautiful</span>
            <span>Journey</span>

            <i>◇</i>
          </div>
        </section>

        {/* =============================================
            WEDDING VENUE
        ============================================== */}

        <VenueSection venue={venues[0]} layout="image-left" />

        {/* =============================================
            WALIMA VENUE
        ============================================== */}

        <VenueSection venue={venues[1]} layout="image-right" />

        {/* =============================================
            GETTING THERE
        ============================================== */}

        <section className={styles.directionsSection}>
          <div className={styles.directionsHeader}>
            <div className={styles.directionsIntro}>
              <div className={styles.smallOrnament}>❧</div>

              <p className={styles.directionsEyebrow}>FIND YOUR WAY</p>

              <h2>Getting There</h2>

              <p className={styles.directionsDescription}>
                Select a venue to view its location and get directions.
              </p>
            </div>

            <div className={styles.mapArea}>
              {/* Venue selector */}

              <div className={styles.mapTabs}>
                {venues.map((venue) => (
                  <button
                    key={venue.key}
                    type="button"
                    onClick={() => setSelectedVenue(venue.key)}
                    className={`${styles.mapTab} ${
                      selectedVenue === venue.key ? styles.mapTabActive : ""
                    }`}
                  >
                    <strong>{venue.date}</strong>

                    <span>{venue.name}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVenue.key}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className={styles.mapCard}
                >
                  <div className={styles.fakeMap}>
                    <div className={styles.mapRoadOne} />

                    <div className={styles.mapRoadTwo} />

                    <div className={styles.mapRoadThree} />

                    <div className={styles.mapWater} />

                    <div className={styles.mapLocationCard}>
                      <strong>{activeVenue.name}</strong>

                      <span>{activeVenue.address}</span>
                    </div>

                    <div className={styles.mapMarker}>
                      <MapPin size={28} fill="currentColor" strokeWidth={1.2} />

                      <span>{activeVenue.name}</span>
                    </div>

                    <span className={`${styles.mapCity} ${styles.mapCityOne}`}>
                      {activeVenue.key === "wedding" ? "Ghazipur" : "Ballia"}
                    </span>

                    <span className={`${styles.mapCity} ${styles.mapCityTwo}`}>
                      {activeVenue.key === "wedding" ? "Alampatti" : "Garwar"}
                    </span>
                  </div>

                  <a
                    href={activeVenue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.getDirectionsButton}
                  >
                    <Navigation size={18} strokeWidth={1.4} />
                    Get Directions
                    <ExternalLink size={15} strokeWidth={1.4} />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* =============================================
              BEFORE YOU ARRIVE
          ============================================== */}

          <div className={styles.arrivalInfo}>
            <div className={styles.arrivalHeading}>
              <p>BEFORE YOU ARRIVE</p>

              <span>A few helpful details for a comfortable experience.</span>
            </div>

            <div className={styles.amenities}>
              <Amenity
                icon={<CarFront size={26} strokeWidth={1.25} />}
                label="Parking"
                sublabel="Available"
              />

              <Amenity
                icon={<Accessibility size={26} strokeWidth={1.25} />}
                label="Wheelchair"
                sublabel="Accessible"
              />

              <Amenity
                icon={<MapPin size={26} strokeWidth={1.25} />}
                label="Easy"
                sublabel="Navigation"
              />

              <Amenity
                icon={<Users size={26} strokeWidth={1.25} />}
                label="Spacious"
                sublabel="Seating"
              />

              <Amenity
                icon={<UtensilsCrossed size={26} strokeWidth={1.25} />}
                label="Dinner"
                sublabel="Celebration"
              />
            </div>
          </div>
        </section>

        {/* =============================================
            FINAL CTA
        ============================================== */}

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
          className={styles.finalSection}
        >
          <div className={styles.finalOrnament}>❧</div>

          <h2>We Can&apos;t Wait to Welcome You</h2>

          <p>Your presence will make these places even more special.</p>

          <div className={styles.finalButtons}>
            <Link
              href="/accommodation"
              className={`${styles.finalButton} ${styles.finalButtonPrimary}`}
            >
              <BedDouble size={20} strokeWidth={1.4} />

              <span>Accommodation</span>

              <ArrowRight size={17} strokeWidth={1.4} />
            </Link>

            <Link
              href="/travel"
              className={`${styles.finalButton} ${styles.finalButtonSecondary}`}
            >
              <Plane size={20} strokeWidth={1.4} />

              <span>Travel Information</span>

              <ArrowRight size={17} strokeWidth={1.4} />
            </Link>
          </div>

          <div className={styles.finalDivider}>
            <span />
            <b>◇</b>
            <span />
          </div>

          <small>Together in Faith, Forever in Love</small>
        </motion.section>
      </div>
    </main>
  );
}

/* =====================================================
   VENUE SECTION
===================================================== */

function VenueSection({
  venue,
  layout,
}: {
  venue: Venue;
  layout: "image-left" | "image-right";
}) {
  const imageLeft = layout === "image-left";

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
      }}
      className={`${styles.venueSection} ${
        imageLeft ? styles.venueImageLeft : styles.venueImageRight
      }`}
    >
      <div className={styles.venueImageColumn}>
        <div className={styles.venueImageArch}>
          <div className={styles.imageArchBorder}>
            <Image
              src={venue.image}
              alt={venue.imageAlt}
              fill
              priority={venue.key === "wedding"}
              sizes="(max-width: 767px) 92vw, 430px"
              className={styles.venueImage}
            />
          </div>
        </div>

        <p className={styles.imageCaption}>{venue.imageCaption}</p>
      </div>

      <div className={styles.venueInformation}>
        <p className={styles.venueDate}>{venue.date}</p>

        <Divider />

        <h2>{venue.occasion}</h2>

        <div className={styles.venueName}>
          <MapPin size={26} strokeWidth={1.4} />

          <h3>{venue.name}</h3>
        </div>

        <div className={styles.address}>
          <p>{venue.address}</p>

          <span>{venue.cityState}</span>
        </div>

        <div className={styles.phone}>
          <Phone size={20} strokeWidth={1.4} />

          <span>{venue.phoneDisplay}</span>
        </div>

        <a
          href={venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapsButton}
        >
          <MapPin size={19} strokeWidth={1.5} />

          <span>Open in Google Maps</span>

          <ArrowRight size={17} strokeWidth={1.4} />
        </a>
      </div>

      <div className={styles.venueSideQuote}>
        {venue.sideMessage.map((line) => (
          <span key={line}>{line}</span>
        ))}

        <i>◇</i>
      </div>
    </motion.section>
  );
}

/* =====================================================
   AMENITY
===================================================== */

function Amenity({
  icon,
  label,
  sublabel,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
}) {
  return (
    <div className={styles.amenity}>
      {icon}

      <strong>{label}</strong>

      <span>{sublabel}</span>
    </div>
  );
}

/* =====================================================
   DIVIDER
===================================================== */

function Divider() {
  return (
    <div className={styles.divider}>
      <span />
      <b>◇</b>
      <span />
    </div>
  );
}

/* =====================================================
   LANTERN
===================================================== */

function Lantern({
  className,
  small = false,
}: {
  className: string;
  small?: boolean;
}) {
  return (
    <div
      className={`${styles.lantern} ${className} ${
        small ? styles.smallLantern : ""
      }`}
      aria-hidden="true"
    >
      <span className={styles.lanternChain} />

      <div className={styles.lanternCrown} />

      <div className={styles.lanternBody}>
        <i />
      </div>

      <div className={styles.lanternBase} />

      <span className={styles.lanternTail} />
    </div>
  );
}

/* =====================================================
   FLORAL DECORATION
===================================================== */

function FloralDecoration({
  className,
  mirror = false,
}: {
  className: string;
  mirror?: boolean;
}) {
  return (
    <div
      className={`${styles.floral} ${className} ${
        mirror ? styles.floralMirror : ""
      }`}
      aria-hidden="true"
    >
      <span className={`${styles.floralLeaf} ${styles.leafOne}`}>❧</span>

      <span className={`${styles.floralLeaf} ${styles.leafTwo}`}>❧</span>

      <span className={`${styles.floralLeaf} ${styles.leafThree}`}>❧</span>

      <span className={`${styles.floralFlower} ${styles.flowerOne}`}>❀</span>

      <span className={`${styles.floralFlower} ${styles.flowerTwo}`}>✿</span>

      <span className={styles.floralBud}>✦</span>
    </div>
  );
}
