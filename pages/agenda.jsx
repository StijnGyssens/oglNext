import Layout from "../components/layout.jsx";
import { knex } from "../components/knex";
import { time } from "../helpers";
import Link from "next/link";
import slugify from "slugify";
import Image from "next/image";

export default function Agenda({ events, terug }) {
  return (
    <Layout>
      <h1>Agenda</h1>
      <h2>toekomstige events</h2>
      <div className="fotoTekst">
        {events.map((event) => (
          <Link href={`/events/${event.EID}/${slugify(event.title)}`}>
            <a>
              <div key={event.EID}>
                <div className="topTekst">
                  <h3>{event.title}</h3>
                  <p>
                    {time(event.start)} tot {time(event.end)}
                  </p>
                </div>
                {event.poster && (
                  <div className="bottomFoto">
                    <Image
                      src={`/images/${event.poster}`}
                      alt={event.title}
                      layout="fill"
                      objectFit="contain"
                      quality={100}
                    />
                  </div>
                )}
              </div>
            </a>
          </Link>
        ))}
      </div>
      <h2>terugblik</h2>
      <div className="fotoTekst">
        {terug.map((t) => (
          <Link href={`/events/${t.EID}/${slugify(t.title)}`}>
            <a>
              <div key={t.EID}>
                <div className="topTekst">
                  <h2>{t.title}</h2>
                  <p>
                    {time(t.start)} tot {time(t.end)}
                  </p>
                </div>
                {t.poster && (
                  <div className="bottomFoto">
                    <Image
                      src={`/images/${t.poster}`}
                      alt={t.title}
                      layout="fill"
                      objectFit="contain"
                      quality={100}
                    />
                  </div>
                )}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const ev = await knex("events")
    .where("start", ">", new Date())
    .orderBy("start");
  const events = JSON.parse(JSON.stringify(ev));
  const te = await knex("events")
    .where("start", "<", new Date())
    .orderBy("start", "desc");
  const terug = JSON.parse(JSON.stringify(te));
  return {
    props: {
      events,
      terug,
    },
  };
}
