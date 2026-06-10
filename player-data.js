/*
  Player Recruitment Template Data
  --------------------------------
  Edit this file to create a player recruitment profile. The HTML, CSS and app.js
  files are intentionally generic and read all editable player content from here.

  This template is intentionally generic by default. Replace the clean placeholder
  labels below with real player details when you are ready. Leave optional
  arrays/strings empty to automatically hide those sections/buttons.
*/

window.PLAYER_DATA = {
  meta: {
    siteTitle: "Player Recruitment Profile | Football CV Template",
    defaultLanguage: "en",
    onlineProfileUrl: ""
  },

  heroBackground: "assets/photos/hero-background.jpg",

  player: {
    name: "Player Name",
    position: {
      en: "Main Position",
      fr: "Poste principal",
      es: "Posición principal"
    },
    roles: {
      en: ["Player Role", "Secondary Role"],
      fr: ["Rôle du joueur", "Rôle secondaire"],
      es: ["Rol del jugador", "Rol secundario"]
    },
    foot: {
      en: "Preferred Foot",
      fr: "Pied préférentiel",
      es: "Pie preferido"
    },
    height: "Height",
    weight: "Weight",
    dateOfBirth: "",
    nationality: {
      en: "Nationality",
      fr: "Nationalité",
      es: "Nacionalidad"
    },
    currentClub: "Current Club",
    previousCollege: "",
    availability: {
      en: "Availability",
      fr: "Disponibilité",
      es: "Disponibilidad"
    },
    location: "Location",
    contact: {
      phone: "",
      whatsapp: "",
      email: "",
      onlineProfileUrl: ""
    }
  },

  content: {
    heroHeadline: {
      en: "Recruitment Profile",
      fr: "Profil de recrutement",
      es: "Perfil de reclutamiento"
    },
    recruitmentSummary: {
      en: "Recruitment Summary",
      fr: "Résumé recrutement",
      es: "Resumen de reclutamiento"
    },
    careerSummary: {
      en: "Career Summary",
      fr: "Résumé du parcours",
      es: "Resumen de trayectoria"
    },
    strengths: {
      en: ["Key Strengths"],
      fr: ["Points forts clés"],
      es: ["Fortalezas clave"]
    },
    playingStyle: {
      en: "Playing Style",
      fr: "Style de jeu",
      es: "Estilo de juego"
    },
    academicsEligibility: {
      en: "",
      fr: "",
      es: ""
    }
  },

  media: {
    videos: [],
    cvPdfs: [],
    photos: []
  }
};
