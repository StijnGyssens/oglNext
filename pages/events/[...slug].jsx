import Image from "next/image";
import Layout from "../../components/layout";
import { knex } from "../../components/helpers";

export default function Events({ event, fotos }) {
  return (
    <Layout>
      {event[0].poster && (
        <Image
          src={`/images/${event[0].poster}`}
          alt={event[0].title}
          width={event[0].width}
          height={event[0].height}
          quality={100}
        />
      )}
      <h1>{event[0].title}</h1>
      <p>
        {event[0].start} tot {event[0].end}
      </p>
      <p>{event[0].description}</p>
      <h2>Foto's</h2>
      <div className="gallery">
        {fotos.map((foto) => (
          <div key={foto.MID}>
            <Image
              src={`/images/${foto.path}`}
              alt={foto.alt}
              width={foto.width}
              height={foto.height}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const [id] = context.query.slug;
  const ev = await knex("events").where("EID", id);
  const event = JSON.parse(JSON.stringify(ev));
  const fo = await knex("events_has_media")
    .where("events_EID", id)
    .join("media", "media_MID", "=", "MID");
  const fotos = JSON.parse(JSON.stringify(fo)).filter(
    (foto) => foto.mediatype_Id === 4
  );
  return {
    props: {
      event,
      fotos,
    },
  };
}
