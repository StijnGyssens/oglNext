import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.scss";
import ScrollToTop from "react-scroll-up";
import { IoIosArrowDropupCircle } from "react-icons/io";

const title = "OGL Londerzeel";

export default function Layout({ children }) {
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
        <div>
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
      </nav>
      <main>
        {children}
        <ScrollToTop showUnder={100}>
          <div className={styles.back}>
            <IoIosArrowDropupCircle />
          </div>
        </ScrollToTop>
      </main>
      <footer></footer>
    </div>
  );
}
