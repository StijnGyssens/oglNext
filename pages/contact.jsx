import Layout from "../components/layout.jsx";
import { useState } from "react";
import style from "../styles/contact.module.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  let email = {};

  const submit = (e) => {
    e.preventDefault();
    email = { name, mail, title, message };
    console.log(email);
    setName("");
    setMail("");
    setTitle("");
    setMessage("");
  };
  return (
    <Layout>
      <section>
        <h1>Contact</h1>
        <form onSubmit={submit} className={style.contactform}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="mail"
            placeholder="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="text"
            name="title"
            placeholder="Onderwerp"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input type="submit" value="send" />
        </form>
      </section>
    </Layout>
  );
}
