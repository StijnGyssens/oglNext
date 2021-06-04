import Layout from "../components/layout.jsx";
import { knex } from "../components/knex";
import Image from "next/image";
import style from "../styles/leden.module.scss";
import Link from "next/link";
import slugify from "slugify";

export default function Leden({ company }) {
  return (
    <Layout>
      <h1>Leden</h1>
      <div className="fotoTekst">
        {company.map((comp) => (
          <Link href={`/leden/${comp.CID}/${slugify(comp.name)}`}>
            <a>
              <div key={comp.CID}>
                <div className="topTekst">
                  <p>{comp.name}</p>
                </div>
                {comp.logo && (
                  <div className="bottomFoto">
                    <Image
                      src={`/images/${comp.logo}`}
                      alt={comp.name}
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
  const com = await knex("company");
  const company = JSON.parse(JSON.stringify(com));
  return {
    props: {
      company,
    },
  };
}
