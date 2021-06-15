import Layout from "../components/layout.jsx";
import { knex } from "../components/knex";
import Image from "next/image";
import style from "../styles/leden.module.scss";
import Link from "next/link";
import slugify from "slugify";
import { useState } from "react";

export default function Leden({ company }) {
  const [search, setSearch] = useState("");
  const compa = company.filter((comp) =>
    comp.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Layout>
      <h1>Leden</h1>
      <section className={style.container}>
        <input
          type="text"
          id="myInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
        />
        <div className="fotoTekst">
          {compa.map((comp) => (
            <Link
              href={`/leden/${comp.CID}/${slugify(comp.name)}`}
              key={comp.CID}
            >
              <a>
                <div>
                  <div className="topTekst">
                    <p>{comp.name}</p>
                  </div>
                  {comp.logo && (
                    <div className="bottomFoto">
                      <Image
                        src={`/images/leden/${comp.logo}`}
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
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const com = await knex("company").orderBy("name");
  const company = JSON.parse(JSON.stringify(com));
  return {
    props: {
      company,
    },
  };
}
