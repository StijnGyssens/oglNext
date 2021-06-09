import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.scss";

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
        <p>{title}</p>
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
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
