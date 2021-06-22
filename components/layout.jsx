import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.scss";
import ScrollToTop from "react-scroll-up";
import { IoIosArrowDropupCircle, IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const title = "OGL Londerzeel";

export default function Layout({ children }) {
  const [show, setShow] = useState("true");
  const handleToggle = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <nav>
        <Link href="/">
          <a>{title}</a>
        </Link>
        <div className={show ? "hide" : "show"}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/agenda">
            <a>Agenda</a>
          </Link>
          <Link href="/nieuws">
            <a>Nieuws</a>
          </Link>
          <Link href="/leden">
            <a>Ledennet</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/lid-worden">
            <a>Wordt lid</a>
          </Link>
          <Link href="/over-ons">
            <a>Over ons</a>
          </Link>
        </div>
        <span className={styles.menu} onClick={handleToggle}>
          <IoIosMenu />
        </span>
      </nav>
      <main>
        {children}
        <ScrollToTop showUnder={100}>
          <div className={styles.back}>
            <IoIosArrowDropupCircle />
          </div>
        </ScrollToTop>
        <div className={styles.media}>
          <a href="" target="_blank">
            <FaLinkedin />
          </a>
          <a href="" target="_blank">
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/Winkelen-in-Londerzeel-OGL-vzw-376243609079641/?ref=hl"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  const show = () => document.querySelector(".navi").classList.toggle(".show");
  return {
    props: {
      show,
    },
  };
}
