import Layout from "../components/layout.jsx";
import style from "../styles/contact.module.scss";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const Map = dynamic(() => import("../components/map"), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    const data = {
      name,
      mail,
      title,
      message,
    };

    fetch("/api/contact", {
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
          setTitle("");
          setMessage("");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <h1>Contact</h1>
      <section className={style.side}>
        <div>
          <h2>Ondernemers Groep Londerzeel VZW</h2>
          <p>
            <em>Secretariaats- en Facturatie-adres:</em>
            <br />
            <strong>Ondernemers Groep Londerzeel VZW</strong>
            <br />
            p/a Beton Trowel NV <br />
            Nijverheidsstraat 10 <br />
            BE-1840 Londerzeel
            <br />
            <a href="mailto:info@ogl-londerzeel.be">info@ogl-londerzeel.be</a>
            <br />
            <Link href="/">
              <a>https://ogl-londerzeel.herokuapp.com/</a>
            </Link>
            <br />
            Ondernemingsnummer BE 0843 411 238
            <br />
            BNP Paribas Fortis BE89 0016 5940 6985
          </p>
        </div>
        <div>
          <form className={style.contactform}>
            <div>
              <label htmlFor="name">Naam*</label>
              <input
                type="text"
                name="name"
                placeholder="naam"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="mail">Email*</label>
              <input
                type="email"
                name="mail"
                placeholder="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="title">Onderwerp</label>
              <input
                type="text"
                name="title"
                placeholder="Onderwerp"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message">Bericht</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <input
              className={style.submit + " button"}
              type="submit"
              value="send"
              onClick={(e) => handleSubmit(e)}
            />
          </form>
        </div>
      </section>
      <section>
        <Map className={style.map} />
      </section>
    </Layout>
  );
}
