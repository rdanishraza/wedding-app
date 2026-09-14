"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Wedding",
    href: "/wedding",
  },
  {
    name: "Schedule",
    href: "/schedule",
  },
  {
    name: "Venue",
    href: "/venue",
  },
  {
    name: "Accommodation",
    href: "/accommodation",
  },
  {
    name: "Travel",
    href: "/travel",
  },
  {
    name: "Memories",
    href: "/memories",
  },
  {
    name: "Wishes",
    href: "/wishes",
  },
  {
    name: "Our Beginning",
    href: "/our-beginning",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          DESKTOP / TABLET HEADER
      ====================================================== */}

      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="desktop-wedding-header"
      >
        <div className="desktop-header-inner">
          {/* Small wedding monogram */}
          <Link href="/" className="desktop-brand">
            <span>D</span>
            <i>♥</i>
            <span>R</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="desktop-navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`desktop-nav-link ${
                  isActive(item.href) ? "desktop-nav-link-active" : ""
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE HEADER
      ====================================================== */}

      <div className="mobile-navigation">
        {/* Top-left ornament */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="wedding-corner-ornament"
          aria-hidden="true"
        >
          <span>❀</span>
          <span>❧</span>
        </motion.div>

        {/* Hamburger */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => setOpen(true)}
          className="wedding-menu-button"
          aria-label="Open navigation"
        >
          <Menu size={27} strokeWidth={1.4} />
        </motion.button>
      </div>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="wedding-menu-backdrop"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 170,
                damping: 24,
              }}
              className="wedding-menu-panel"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="wedding-menu-close"
                aria-label="Close navigation"
              >
                <X size={26} strokeWidth={1.4} />
              </button>

              {/* Ornament */}
              <div className="menu-ornament">◇</div>

              {/* Couple */}
              <p className="menu-small-title">
                Danish
                <span> & </span>
                Rubina
              </p>

              {/* Mobile links */}
              <nav className="wedding-nav">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.06 * index,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={
                        isActive(item.href) ? "mobile-nav-link-active" : ""
                      }
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      <span className="nav-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer */}
              <div className="menu-footer">
                <span />
                <p>16 · 12</p>
                <span />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
