import Link from "next/link";
import Layout from "../components/layout.jsx";

export default function LidWorden() {
  return (
    <Layout>
      <h1>Lid worden van OGL Londerzeel</h1>
      <h2>Wie kan lid worden?</h2>
      <p>
        Om lid te worden van OGL VZW dient u in principe een onderneming,
        handelaar of beoefenaar van een vrij beroep te zijn, gevestigd in de
        gemeente LONDERZEEL
      </p>
      <p>
        U kan echter ook "aangesloten lid" van de vzw worden als
        niet-Londerzeelse onderneming, handelaar of beoefenaar van een vrij
        beroep en zelfs als privépersoon die geen onderneming, handelaar of
        beoefenaar van een vrij beroep is. In dat geval bent u evenwel niet
        stemgerechtigd en dient u ook de reden van uw kandidaat-lidmaatschap op
        te geven.
      </p>
      <h2>Wat kost een lidmaatschap?</h2>
      <p>
        (alle lidgelden op jaarbasis)
        <ul>
          <li>€ 115 Voor privépersonen zonder ondernemingsnummer</li>
          <li>
            € 180 Voor beoefenaars van vrije beroepen, handelaars en bedrijven
            met minder dan 5 werknemers
          </li>
          <li>
            € 275 Voor beoefenaars van vrije beroepen, handelaars en bedrijven
            met een personeelsbestand van 5 tot 50 werknemers
          </li>
          <li>
            € 395 Voor beoefenaars van vrije beroepen, handelaars en bedrijven
            met meer dan 50 werknemers
          </li>
        </ul>
      </p>
      <h2>Wat is het voordeel?</h2>
      <ul>
        <li>
          U krijgt een stem in het Londerzeelse industriële en commerciële
          gebeuren
        </li>
        <li>
          U krijgt op regelmatige basis updates omtrent alles wat ondernemen in
          Londerzeel aanbelangt
        </li>
        <li>U wordt op de hoogte gehouden van de Londerzeelse actualiteit</li>
        <li>
          U krijgt toegang tot een uitgebreid netwerk van regionale ondernemers
        </li>
        <li>
          U wordt op regelmatige basis uitgenodigd op informatieve en
          recreatieve OGL-activiteiten
        </li>
        <li>vul zelf aan wat u van ons verwacht...</li>
      </ul>
      <h2>Hoe word ik lid?</h2>
      <p>
        Dat is heel eenvoudig!
        <br />U hoeft enkel de aanvraag tot lidmaatschap in te vullen via
        onderstaande link.
        <br />
        Na behandeling van uw aanvraag krijgt u een factuur doorgestuurd, die u
        liefst zo snel mogelijk voldoet...
        <br />
        Daarna krijgt u ook een login-paswoord waarmee u kan inloggen op de
        exclusieve ledenpagina's.
      </p>
      <Link href="/lidaanvraagform">
        <a>Aanvraag tot lidmaatschap</a>
      </Link>
    </Layout>
  );
}
