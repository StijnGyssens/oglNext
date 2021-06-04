import Layout from "../components/layout.jsx";
import Link from "next/link";
import style from "../styles/index.module.scss";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { knex } from "../components/knex";
import { time } from "../helpers";
import Image from "next/image";
import slugify from "slugify";

export default function Home({ events, images }) {
  const poster = `/images/${events[0].poster}`;
  // const start = new Date(events[0].start);
  // // const startDatum = start.getDate() + "/" + (start.getMonth() + 1) + "/" + start.getFullYear();
  // const startDatum = start.toLocaleString("nl-BE", {
  //   timeZone: "UTC",
  //   dateStyle: "full",
  // });

  return (
    <Layout>
      <section className={style.intro}>
        <h1>OGL Londerzeel</h1>
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
          {events[0].poster && (
            <div className={style.poster}>
              <Image
                src={poster}
                alt={events[0].title}
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          )}
          <div>
            <h2>{events[0].title}</h2>
            <p>
              {time(events[0].start)} tot {time(events[0].end)}
            </p>
            <p>{events[0].description}</p>
            <Link href={`/events/${events[0].EID}/${slugify(events[0].title)}`}>
              <a>Meer info</a>
            </Link>
          </div>
        </div>

        <div className={style.eventlist}>
          {events.slice(0, 5).map(({ EID, title, start, end, description }) => (
            <div key={EID}>
              <h2>{title}</h2>
              <p>
                {time(start)} tot {time(end)}
              </p>
              <p>{description}</p>
              <Link href={`/events/${EID}/${slugify(title)}`}>
                <a>Meer info</a>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className={style.socialMedia}>
        <div></div>
        <div></div>
      </section>
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
