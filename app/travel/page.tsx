"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CarFront,
  Clock3,
  Heart,
  MapPin,
  Navigation,
  Phone,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import styles from "./travel.module.css";

type JourneyLocation = {
  city: string;
  subtitle: string;
  address: string;
  reportingTime: string;
  departureTime: string;
  transport: string;
  contacts: string;
  phoneNumbers: string[];
  mapUrl?: string;
  image: string;
};

const locations: JourneyLocation[] = [
  {
    city: "Ballia",
    subtitle: "From Royal Home Decor",
    address:
      "Royal Home Decor, Mahboob Manzil, Gadwar Road, Ballia, Parsia, Uttar Pradesh 277001",
    reportingTime: "3:00 PM",
    departureTime: "3:30 - 4:00 PM",
    transport: "Ertiga or any seven seater vehicle",
    contacts: "M Ansari / Asif / Ashu",
    phoneNumbers: ["9411327469", "9616942124", "7983025424"],
    mapUrl:
      "https://www.google.com/maps/place/Royal+Home+Decor+(+PVC+Panel+Shop,+Wallpaper,+Fall+Ceiling,+Interior+Designer)/@25.7564767,84.0688951,12z/data=!4m10!1m2!2m1!1sroyal+home+decor+ballia!3m6!1s0x399265088d2b5b13:0x588191e25e615095!8m2!3d25.7359518!4d84.2854038!15sChdyb3lhbCBob21lIGRlY29yIGJhbGxpYVoZIhdyb3lhbCBob21lIGRlY29yIGJhbGxpYZIBEWludGVyaW9yX2Rlc2lnbmVy4AEA!16s%2Fg%2F11x5qz7_02?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D",
    image: "/travel/ballia-pickup.png",
  },
  {
    city: "Rasra",
    subtitle: "From Soha Clinic",
    address: "Soha Clinic, Maulana Rd, Rasra, Uttar Pradesh 221712",
    reportingTime: "3:00 PM",
    departureTime: "3:30 - 4:00 PM",
    transport: "Ertiga or any seven seater vehicle",
    contacts: "Guddu / Ashu",
    phoneNumbers: ["9616942124"],
    mapUrl:
      "https://www.google.com/maps/place/Soha+clinic/@25.8537325,83.860352,17z/data=!3m1!4b1!4m6!3m5!1s0x39921576bb91631b:0x155f5742101ca411!8m2!3d25.8537325!4d83.8629269!16s%2Fg%2F11s0s2jjks?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D",
    image: "/travel/rasra-pickup.png",
  },
  {
    city: "Nagara",
    subtitle: "Starting Point",
    address: "Location will be shared soon",
    reportingTime: "3:00 PM",
    departureTime: "3:30 - 4:00 PM",
    transport: "Ertiga or any seven seater vehicle",
    contacts: "Ashu",
    phoneNumbers: ["9616942124"],
    image: "/travel/nagara-pickup.png",
  },
];

const RP_PALACE_MAP =
  "https://www.google.com/maps/place/R.P.+PALACE/@25.5949143,83.5862988,17z/data=!3m1!4b1!4m6!3m5!1s0x3991ff90ec588993:0x9e70d1c0f3d473f1!8m2!3d25.5949143!4d83.5888737!16s%2Fg%2F11trxd0kp4?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D";

export default function TravelPage() {
  return (
    <main className={styles.page}>
      <Navbar />

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
          className={styles.heroContent}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.heroOrnament}>❧</span>

          <p className={styles.eyebrow}>Our Journey</p>

          <h1>The Baarat Journey</h1>

          <Divider />

          <p className={styles.heroSubtitle}>
            Three beginnings. One destination.
            <br />
            One beautiful celebration ahead.
          </p>
        </motion.div>

        <div className={`${styles.sideMessage} ${styles.sideLeft}`}>
          <span>Distant</span>
          <span>Roads</span>
          <span>Bring</span>
          <span>Us Closer</span>
          <span>Together</span>
          <i>◆</i>
        </div>

        <div className={`${styles.sideMessage} ${styles.sideRight}`}>
          <span>Different</span>
          <span>Places</span>
          <span>Same</span>
          <span>Happiness</span>
          <span>Ahead</span>
          <i>◆</i>
        </div>

        <MughalSkyline />
      </section>

      {/* PICKUP POINTS */}
      <section className={styles.locationsSection}>
        <div className={styles.locationGrid}>
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
            >
              <LocationCard location={location} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* BAARAT ROUTES */}
      <section className={styles.routeSection}>
        <div className={styles.routeScene}>
          <svg
            className={styles.journeyRoads}
            viewBox="0 0 1200 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* BALLIA → R.P. PALACE */}
            <path
              className={styles.roadBorder}
              d="M120 20 C150 130 270 175 370 255 C455 325 525 370 600 440"
            />
            <path
              className={styles.roadSurface}
              d="M120 20 C150 130 270 175 370 255 C455 325 525 370 600 440"
            />
            <path
              className={styles.roadCenterLine}
              d="M120 20 C150 130 270 175 370 255 C455 325 525 370 600 440"
            />

            {/* RASRA → R.P. PALACE */}
            <path
              className={styles.roadBorder}
              d="M600 20 C590 130 610 245 600 440"
            />
            <path
              className={styles.roadSurface}
              d="M600 20 C590 130 610 245 600 440"
            />
            <path
              className={styles.roadCenterLine}
              d="M600 20 C590 130 610 245 600 440"
            />

            {/* NAGARA → R.P. PALACE */}
            <path
              className={styles.roadBorder}
              d="M1080 20 C1050 130 930 175 830 255 C745 325 675 370 600 440"
            />
            <path
              className={styles.roadSurface}
              d="M1080 20 C1050 130 930 175 830 255 C745 325 675 370 600 440"
            />
            <path
              className={styles.roadCenterLine}
              d="M1080 20 C1050 130 930 175 830 255 C745 325 675 370 600 440"
            />
          </svg>

          <div className={`${styles.routeLabel} ${styles.balliaLabel}`}>
            Ballia
          </div>

          <div className={`${styles.routeLabel} ${styles.rasraLabel}`}>
            Rasra
          </div>

          <div className={`${styles.routeLabel} ${styles.nagaraLabel}`}>
            Nagara
          </div>

          {/* BAARAT CARS */}
          <div className={`${styles.baaratCar} ${styles.carLeft}`}>
            <Image
              src="/travel/baarat-car.png"
              alt=""
              fill
              sizes="150px"
              className={styles.carImage}
            />
          </div>

          <div className={`${styles.baaratCar} ${styles.carCenter}`}>
            <Image
              src="/travel/baarat-car.png"
              alt=""
              fill
              sizes="150px"
              className={styles.carImage}
            />
          </div>

          <div className={`${styles.baaratCar} ${styles.carRight}`}>
            <Image
              src="/travel/baarat-car.png"
              alt=""
              fill
              sizes="150px"
              className={styles.carImage}
            />
          </div>

          <div className={styles.routeFlowersLeft} aria-hidden="true">
            ❀ ❧ ✿
          </div>

          <div className={styles.routeFlowersRight} aria-hidden="true">
            ✿ ❧ ❀
          </div>

          {/* DESTINATION */}
          <motion.div
            className={styles.destination}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.palaceImageWrapper}>
              <Image
                src="/travel/rp-palace.png"
                alt="R.P. Palace, Ghazipur"
                fill
                sizes="(max-width: 767px) 320px, 500px"
                className={styles.palaceImage}
              />
            </div>

            <div className={styles.palaceSign}>
              <strong>R.P. Palace</strong>
              <span>Ghazipur</span>
            </div>

            <div className={styles.arrivalCard}>
              <Clock3 size={31} strokeWidth={1.3} />

              <div>
                <p>Expected Arrival</p>
                <strong>6:00 - 6:30 PM</strong>
                <span>R.P. Palace, Ghazipur</span>
              </div>
            </div>

            <a
              href={RP_PALACE_MAP}
              target="_blank"
              rel="noreferrer"
              className={styles.destinationMap}
            >
              <Navigation size={16} />
              View Wedding Venue
            </a>
          </motion.div>
        </div>
      </section>

      {/* JOURNEY NOTES */}
      <section className={styles.notesSection}>
        <motion.div
          className={styles.notesPanel}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <JourneyNote
            icon={<CarFront size={27} strokeWidth={1.35} />}
            title="Direct Journey"
          >
            All three groups will travel directly to R.P. Palace, Ghazipur.
          </JourneyNote>

          <JourneyNote
            icon={<Users size={27} strokeWidth={1.35} />}
            title="Possible Meeting Point"
          >
            There will be a meeting point, but the exact location will be shared
            soon.
          </JourneyNote>

          <JourneyNote
            icon={<Clock3 size={27} strokeWidth={1.35} />}
            title="Important Note"
          >
            Baarat will depart sharply between 3:30 to 4:00 PM. Please arrive on
            time.
          </JourneyNote>

          <JourneyNote
            icon={<Heart size={27} strokeWidth={1.35} />}
            title="Travel Together"
          >
            Let&apos;s make this journey memorable, filled with joy, friendship
            and family.
          </JourneyNote>
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
          <p className={styles.sectionHeading}>Need Any Help?</p>

          <Divider />

          <p className={styles.helpText}>
            Feel free to reach out to the family for any travel-related
            assistance.
          </p>

          <div className={styles.helpActions}>
            <a href="tel:9616942124" className={styles.primaryButton}>
              <Phone size={18} strokeWidth={1.5} />
              Contact Family
            </a>

            <Link href="/venue" className={styles.secondaryButton}>
              <MapPin size={18} strokeWidth={1.5} />
              View Venue
              <ArrowRight size={17} strokeWidth={1.5} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* BOTTOM */}
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

/* ------------------------------------------------
   LOCATION CARD
------------------------------------------------ */

function LocationCard({ location }: { location: JourneyLocation }) {
  return (
    <article className={styles.locationCard}>
      <div className={styles.cardCrown} />

      <h2>{location.city}</h2>

      <p className={styles.locationSubtitle}>{location.subtitle}</p>

      <div className={styles.pickupImageWrapper}>
        <Image
          src={location.image}
          alt={`${location.city} Baarat pickup point`}
          fill
          sizes="(max-width: 767px) 90vw, 33vw"
          className={styles.pickupImage}
        />
      </div>

      <div className={styles.locationDetails}>
        <DetailRow icon={<MapPin size={21} strokeWidth={1.6} />}>
          {location.address}
        </DetailRow>

        <DetailRow icon={<Clock3 size={21} strokeWidth={1.6} />}>
          <span className={styles.detailLabel}>Reporting Time:</span>{" "}
          {location.reportingTime}
        </DetailRow>

        <DetailRow icon={<Clock3 size={21} strokeWidth={1.6} />}>
          <span className={styles.detailLabel}>Departure Time:</span>

          <strong>{location.departureTime}</strong>
        </DetailRow>

        <DetailRow icon={<CarFront size={21} strokeWidth={1.6} />}>
          <span className={styles.detailLabel}>Transport:</span>{" "}
          {location.transport}
        </DetailRow>

        <DetailRow icon={<Users size={21} strokeWidth={1.6} />}>
          <span className={styles.detailLabel}>Contact:</span>{" "}
          {location.contacts}
        </DetailRow>

        <DetailRow icon={<Phone size={21} strokeWidth={1.6} />}>
          <div className={styles.phoneList}>
            {location.phoneNumbers.map((phone) => (
              <a key={phone} href={`tel:${phone}`}>
                {phone}
              </a>
            ))}
          </div>
        </DetailRow>
      </div>

      {location.mapUrl ? (
        <a
          href={location.mapUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.mapButton}
        >
          <MapPin size={17} strokeWidth={1.6} />
          View on Google Maps
          <ArrowRight size={17} strokeWidth={1.5} />
        </a>
      ) : (
        <div className={styles.mapButtonDisabled}>
          <MapPin size={17} strokeWidth={1.6} />
          Location Coming Soon
        </div>
      )}
    </article>
  );
}

function DetailRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.detailRow}>
      <div className={styles.detailIcon}>{icon}</div>
      <div>{children}</div>
    </div>
  );
}

function JourneyNote({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.journeyNote}>
      <div className={styles.noteIcon}>{icon}</div>
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
      <div className={styles.lanternCap} />

      <div className={styles.lanternBody}>
        <i />
        <i />
        <i />
      </div>

      <div className={styles.lanternTip} />
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
      <span className={styles.bigLeaf}>❧</span>
      <span className={styles.secondLeaf}>❧</span>
      <span className={styles.bigFlower}>✿</span>
      <span className={styles.smallFlower}>❀</span>
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
      </div>

      <div className={styles.smallDome} />

      <div className={styles.centralPalace}>
        <div className={styles.centralDome} />

        <div className={styles.centralBase}>
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className={styles.smallDome} />

      <div className={styles.minaret}>
        <span />
      </div>
    </div>
  );
}
