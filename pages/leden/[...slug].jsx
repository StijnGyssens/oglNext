import Layout from "../../components/layout";
import { knex } from "../../components/knex";
import { time } from "../../helpers";
import Link from "next/link";
import slugify from "slugify";

export default function Leden({ company, person, events }) {
  return (
    <Layout>
      <h1>{company[0].name}</h1>
      <div>
        <h2>Adres:</h2>
        <p>
          {company[0].streetname} {company[0].number} {company[0].bus}
        </p>
        <p>
          {company[0].postcode} {company[0].gemeente}
        </p>
      </div>
      {person[0] && (
        <div>
          <h2>Contactpersoon: </h2>
          <p>
            {person[0].fname} {person[0].lname}
          </p>
          <p>
            <a href={`mailto:${person[0].email}`}>{person[0].email}</a>
          </p>
        </div>
      )}

      <div>
        <h2>Events door {company[0].name}</h2>
        <div>
          {events.map(({ EID, title, start, end, description }) => (
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
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const [id] = context.query.slug;
  const com = await knex("company").where("CID", id);
  const company = JSON.parse(JSON.stringify(com));
  const pers = await knex("person").where("CID", id);
  const person = JSON.parse(JSON.stringify(pers));
  const ev = await knex("company_has_events")
    .where("company_CID", id)
    .join("events", "events_EID", "=", "EID");
  const events = JSON.parse(JSON.stringify(ev));
  return {
    props: {
      company,
      person,
      events,
    },
  };
}
