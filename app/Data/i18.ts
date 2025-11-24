// i18.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: { translation: { greeting: "Hello I'm", greetingExtra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ornare nisl. Nunc iaculis orci ut elit ullamcorper, vitae tempus enim cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        , talk: "Let's Talk", contact: "contact", checkOut: "Check out my", myRecent: "Check out my", works: "Work"
        , letsWork: "Let's work!"
       }},
      gr: { translation: { greeting: "Γεια, είμαι ο", greetingExtra: "Λορεμ ίψουμ δόλορ σιτ αμέτ, κονσεκτέτυρ αδίπισσινγκ ελίτ, σέδ δό ειουςμόδ τεμπορ ίνσιδιντ ουτ λαμκο.",
        talk: "Ας μιλήσουμε", contact: "Επικοινωνία", checkOut: "Δες επιπλέον", myRecent: "Ανακάλυψε τις ", works: "Δουλειές",
        letsWork: "Ας συνεργαστούμε!"
      } },


      
    },
  });

export default i18n;
//greetingExtra