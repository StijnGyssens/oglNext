import Layout from '../components/layout.jsx'
import Link from 'next/link'
import style from '../styles/index.module.scss'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

export default function Home() {
  return (
    <Layout>
      <section className={style.intro} >
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium nostrum tenetur reiciendis? Culpa corrupti, magnam ducimus necessitatibus voluptatibus a facilis eum quidem iste cumque ipsum! Dignissimos culpa repellat fuga.</p>
      </section>
      <section className={style.pictureMenu}>
          <Link href="/agenda"><a><p>Agenda</p> <IoIosArrowDroprightCircle/></a></Link>
          <Link href="/nieuws"><a><p>Nieuws</p><IoIosArrowDroprightCircle/></a></Link>
          <Link href="/leden"><a><p>Ledennet</p><IoIosArrowDroprightCircle/></a></Link>
          <Link href="/contact"><a><p>Contact</p><IoIosArrowDroprightCircle/></a></Link>
          <Link href="/lid-worden"><a><p>Wordt lid</p><IoIosArrowDroprightCircle/></a></Link>
      </section>
      <section className={style.events}>
        <div className={style.feature} ></div>
        <div className={style.eventlist} ></div>
      </section>
      <section className={style.socialMedia}>socialmedia</section>
    </Layout>
  )
}
