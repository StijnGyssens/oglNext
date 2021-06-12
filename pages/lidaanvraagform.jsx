import Layout from "../components/layout.jsx";
import { useState } from "react";

export default function Nieuws() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [street, setStreet] = useState("");
  const [huis, setHuis] = useState("");
  const [city, setCity] = useState("");
  const [comp, setComp] = useState("");
  const [post, setPost] = useState("");
  const [nummer, setNummer] = useState("");
  const [tele, setTele] = useState("");
  const [web, setWeb] = useState("");
  const [werk, setWerk] = useState("minder dan 5");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    const data = {
      name,
      mail,
      street,
      huis,
      city,
      comp,
      post,
      nummer,
      tele,
      web,
      werk,
    };

    fetch("/api/form", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response ok!");
          setName("");
          setMail("");
          setStreet("");
          setHuis("");
          setCity("");
          setComp("");
          setPost("");
          setNummer("");
          setTele("");
          setWeb("");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <h1>Aanvraagformulier lidmaatschap</h1>
      <section>
        <p>
          Alvast bedankt voor uw interesse in de Ondernemers Groep Londerzeel.
          <br />
          Mogen wij u vragen onderstaand formulier in te vullen en door te
          sturen aub ?<br />
          Wij contacteren u zo snel mogelijk.
        </p>
      </section>
      <section>
        <form>
          <div>
            <label htmlFor="name">Naam bedrijf of handelszaak</label>
            <input
              type="text"
              name="comp"
              value={comp}
              onChange={(e) => setComp(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Persoonlijke naam</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <fieldset>
              <legend>Adres</legend>
              <input
                type="text"
                name="street"
                placeholder="straat"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <input
                type="text"
                name="huis"
                placeholder="huisnummer"
                value={huis}
                onChange={(e) => setHuis(e.target.value)}
              />
              <input
                type="text"
                name="city"
                placeholder="stad"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                name="post"
                placeholder="postcode"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
            </fieldset>
          </div>
          <div>
            <label htmlFor="nummer">Ondernemingsnummer</label>
            <input
              type="text"
              name="nummer"
              value={nummer}
              onChange={(e) => setNummer(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mail">email</label>
            <input
              type="email"
              name="mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tele">Telefoonnummer</label>
            <input
              type="text"
              name="tele"
              value={tele}
              onChange={(e) => setTele(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="web">Website</label>
            <input
              type="text"
              name="web"
              value={web}
              onChange={(e) => setWeb(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="werk">Aantal werknemers</label>
            <select
              id="werk"
              name="werk"
              onChange={(e) => setWerk(e.target.value)}
            >
              <option value="minder dan 5">minder dan 5</option>
              <option value="van 5 tot 50">van 5 tot 50</option>
              <option value="meer dan 50">meer dan 50</option>
            </select>
          </div>
          <input type="submit" value="send" onClick={(e) => handleSubmit(e)} />
        </form>
      </section>
    </Layout>
  );
}
