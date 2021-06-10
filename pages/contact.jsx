import Layout from "../components/layout.jsx";
import style from "../styles/contact.module.scss";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
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
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setMail("");
        setTitle("");
        setMessage("");
      }
    });
  };

  return (
    <Layout>
      <section>
        <h1>Contact</h1>
        <form className={style.contactform}>
          <div>
            <label htmlFor="name">naam</label>
            <input
              type="text"
              name="name"
              placeholder="naam"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mail">email</label>
            <input
              type="email"
              name="mail"
              placeholder="email"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="title">Onderwerp</label>
            <input
              type="text"
              name="title"
              placeholder="Onderwerp"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Bericht</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <input
            className={style.submit}
            type="submit"
            value="send"
            onClick={(e) => handleSubmit(e)}
          />
        </form>
      </section>
    </Layout>
  );
}
