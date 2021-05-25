import Layout from "../components/layout.jsx";
import Link from "next/link";
import style from "../styles/index.module.scss";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { knex } from "../components/helpers";
import Image from "next/image";
import slugify from "slugify";

export default function Home({ events, images }) {
  const poster = `/images/${events[0].poster}`;
  return (
    <Layout>
      <section className={style.intro}>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          praesentium nostrum tenetur reiciendis? Culpa corrupti, magnam ducimus
          necessitatibus voluptatibus a facilis eum quidem iste cumque ipsum!
          Dignissimos culpa repellat fuga.
        </p>
      </section>
      <section className={style.pictureMenu}>
        <Link href="/agenda">
          <a>
            <p>Agenda</p> <IoIosArrowDroprightCircle />
          </a>
        </Link>
        <Link href="/nieuws">
          <a>
            <p>Nieuws</p>
            <IoIosArrowDroprightCircle />
          </a>
        </Link>
        <Link href="/leden">
          <a>
            <p>Ledennet</p>
            <IoIosArrowDroprightCircle />
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <p>Contact</p>
            <IoIosArrowDroprightCircle />
          </a>
        </Link>
        <Link href="/lid-worden">
          <a>
            <p>Wordt lid</p>
            <IoIosArrowDroprightCircle />
          </a>
        </Link>
      </section>
      <section className={style.events}>
        <div className={style.next}>
          <div className={style.poster}>
            <Image
              src={poster}
              alt={events[0].title}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <div>
            <h2>{events[0].title}</h2>
            <p>
              {events[0].start} tot {events[0].end}
            </p>
            <p>{events[0].description}</p>
            <Link href={`/events/${events[0].EID}/${slugify(events[0].title)}`}>
              <a>Meer info</a>
            </Link>
          </div>
        </div>

        <div className={style.eventlist}>
          {events.map(({ EID, title, start, end, description }) => (
            <div key={EID}>
              <h2>{title}</h2>
              <p>
                {start} tot {end}
              </p>
              <p>{description}</p>
              <Link href={`/events/${EID}/${slugify(title)}`}>
                <a>Meer info</a>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className={style.socialMedia}>socialmedia</section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const ev = await knex("events")
    .where("start", ">", new Date())
    .orderBy("start");
  const events = JSON.parse(JSON.stringify(ev));
  const images = JSON.parse(
    JSON.stringify(await knex("media").where("mediatype_Id", 4))
  );
  // const test = await knex("events")
  //   // .distinct("EID")
  //   .leftJoin("events_has_media", "events.EID", "events_has_media.events_EID")
  //   .leftJoin(
  //     knex("media")
  //       .select("*")
  //       .where("mediatype_Id", 4)
  //       // .orderBy("weight")
  //       // .limit(1)
  //       .as("x"),
  //     "x.MID",
  //     "events_has_media.media_MID"
  //   )
  //   .toString();
  // /* .where("media.mediatype_Id", 4) */ console.log(test);
  return {
    props: {
      events,
      images,
    },
  };
}
