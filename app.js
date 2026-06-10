(function () {
  "use strict";

  let DATA = null;
  const SUPPORTED_LANGUAGES = ["en", "fr", "es"];

  const labels = {
    en: {
      navProfile: "Profile",
      navCareer: "Career",
      navMedia: "Video",
      navContact: "Contact",
      languageLabel: "Language",
      eyebrow: "Recruitment CV",
      profileEyebrow: "Profile",
      profileTitle: "Recruitment summary",
      careerEyebrow: "Career",
      careerTitle: "Career summary",
      styleEyebrow: "Style",
      styleTitle: "Playing style",
      strengthsEyebrow: "Strengths",
      strengthsTitle: "Key strengths",
      academicEyebrow: "Academics",
      academicTitle: "Academic / eligibility",
      mediaEyebrow: "Media",
      mediaTitle: "Video, CV and photos",
      contactEyebrow: "Contact",
      contactTitle: "Recruitment contact",
      contactText: "Use the available links below to request video, CV details or arrange a conversation.",
      footerText: "Reusable recruitment website template",
      position: "Position",
      roles: "Roles",
      foot: "Foot",
      height: "Height",
      weight: "Weight",
      dateOfBirth: "Date of birth",
      nationality: "Nationality",
      currentClub: "Current club",
      previousCollege: "Previous college",
      availability: "Availability",
      location: "Location",
      watchVideo: "Watch video",
      downloadCv: "Download CV",
      profileLink: "Online profile",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      cv: "CV PDF",
      photo: "Photo",
      open: "Open",
      noContact: "Contact Information",
      templateNote: "Edit player-data.js to create a new player profile."
    },
    fr: {
      navProfile: "Profil",
      navCareer: "Parcours",
      navMedia: "Vidéo",
      navContact: "Contact",
      languageLabel: "Langue",
      eyebrow: "CV recrutement",
      profileEyebrow: "Profil",
      profileTitle: "Résumé recrutement",
      careerEyebrow: "Parcours",
      careerTitle: "Résumé du parcours",
      styleEyebrow: "Style",
      styleTitle: "Style de jeu",
      strengthsEyebrow: "Points forts",
      strengthsTitle: "Points forts clés",
      academicEyebrow: "Académique",
      academicTitle: "Académique / éligibilité",
      mediaEyebrow: "Médias",
      mediaTitle: "Vidéo, CV et photos",
      contactEyebrow: "Contact",
      contactTitle: "Contact recrutement",
      contactText: "Utilisez les liens disponibles ci-dessous pour demander une vidéo, un CV ou organiser un échange.",
      footerText: "Modèle de site de recrutement réutilisable",
      position: "Poste",
      roles: "Rôles",
      foot: "Pied",
      height: "Taille",
      weight: "Poids",
      dateOfBirth: "Date de naissance",
      nationality: "Nationalité",
      currentClub: "Club actuel",
      previousCollege: "College précédent",
      availability: "Disponibilité",
      location: "Localisation",
      watchVideo: "Voir la vidéo",
      downloadCv: "Télécharger le CV",
      profileLink: "Profil en ligne",
      email: "Email",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      cv: "CV PDF",
      photo: "Photo",
      open: "Ouvrir",
      noContact: "Coordonnées",
      templateNote: "Modifiez player-data.js pour créer un nouveau profil joueur."
    },
    es: {
      navProfile: "Perfil",
      navCareer: "Trayectoria",
      navMedia: "Vídeo",
      navContact: "Contacto",
      languageLabel: "Idioma",
      eyebrow: "CV reclutamiento",
      profileEyebrow: "Perfil",
      profileTitle: "Resumen de reclutamiento",
      careerEyebrow: "Trayectoria",
      careerTitle: "Resumen de trayectoria",
      styleEyebrow: "Estilo",
      styleTitle: "Estilo de juego",
      strengthsEyebrow: "Fortalezas",
      strengthsTitle: "Fortalezas clave",
      academicEyebrow: "Académico",
      academicTitle: "Académico / elegibilidad",
      mediaEyebrow: "Medios",
      mediaTitle: "Vídeo, CV y fotos",
      contactEyebrow: "Contacto",
      contactTitle: "Contacto de reclutamiento",
      contactText: "Utilice los enlaces disponibles para solicitar vídeo, CV o coordinar una conversación.",
      footerText: "Plantilla reutilizable de reclutamiento",
      position: "Posición",
      roles: "Roles",
      foot: "Pie",
      height: "Altura",
      weight: "Peso",
      dateOfBirth: "Fecha de nacimiento",
      nationality: "Nacionalidad",
      currentClub: "Club actual",
      previousCollege: "Universidad anterior",
      availability: "Disponibilidad",
      location: "Ubicación",
      watchVideo: "Ver vídeo",
      downloadCv: "Descargar CV",
      profileLink: "Perfil online",
      email: "Email",
      phone: "Teléfono",
      whatsapp: "WhatsApp",
      cv: "CV PDF",
      photo: "Foto",
      open: "Abrir",
      noContact: "Información de contacto",
      templateNote: "Edite player-data.js para crear un nuevo perfil de jugador."
    }
  };

  const languageSelector = document.getElementById("languageSelector");

  function hasPlayerData() {
    return Boolean(DATA && DATA.player);
  }

  function pathValue(path) {
    return path.split(".").reduce((value, key) => (value && value[key] !== undefined ? value[key] : undefined), DATA);
  }

  function localized(value, lang) {
    if (!value) return "";
    if (typeof value === "string") return value;
    if (Array.isArray(value)) return value;
    return value[lang] || value.en || value.fr || value.es || "";
  }

  function hasValue(value) {
    if (value === null || value === undefined) return false;
    if (typeof value === "string") return value.trim().length > 0;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === "object") return Object.values(value).some(hasValue);
    return true;
  }

  function setText(selector, text) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = text || "";
    });
  }

  function initials(name) {
    return String(name || "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("");
  }

  function formatDate(dateString, lang) {
    if (!dateString) return "";
    const date = new Date(`${dateString}T00:00:00`);
    if (Number.isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat(lang, { year: "numeric", month: "short", day: "numeric" }).format(date);
  }

  function safeLink(url) {
    if (!url) return "";
    const trimmed = String(url).trim();
    if (/^(https?:|mailto:|tel:|assets\/|\.\/|\/)/i.test(trimmed)) return trimmed;
    return "";
  }

  function cssUrl(value) {
    return `url("${String(value).replace(/"/g, "%22")}")`;
  }

  function renderHeroBackground() {
    const hero = document.querySelector("[data-section='hero']");
    const backgroundUrl = safeLink(DATA && (DATA.heroBackground || (DATA.media && DATA.media.heroBackground)));

    if (!hero) return;
    hero.classList.remove("has-hero-background");
    hero.style.removeProperty("--hero-background-image");

    if (!backgroundUrl) return;

    const image = new Image();
    image.onload = () => {
      hero.style.setProperty("--hero-background-image", cssUrl(backgroundUrl));
      hero.classList.add("has-hero-background");
    };
    image.onerror = () => {
      hero.classList.remove("has-hero-background");
      hero.style.removeProperty("--hero-background-image");
    };
    image.src = backgroundUrl;
  }

  function videoEmbedUrl(url) {
    if (!url) return "";
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtube.com")) {
        const id = parsed.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : "";
      }
      if (parsed.hostname.includes("youtu.be")) {
        const id = parsed.pathname.split("/").filter(Boolean)[0];
        return id ? `https://www.youtube.com/embed/${id}` : "";
      }
      if (parsed.hostname.includes("vimeo.com")) {
        const id = parsed.pathname.split("/").filter(Boolean)[0];
        return id ? `https://player.vimeo.com/video/${id}` : "";
      }
    } catch (error) {
      return "";
    }
    return "";
  }

  function makeButton(text, href, className) {
    const link = document.createElement("a");
    link.className = `btn ${className || ""}`.trim();
    link.href = href;
    link.textContent = text;
    if (/^https?:/i.test(href)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    return link;
  }

  function renderTranslations(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = labels[lang][key] || labels.en[key] || "";
    });
    if (!hasPlayerData()) return;

    document.querySelectorAll("[data-bind-i18n]").forEach((element) => {
      const value = localized(pathValue(element.getAttribute("data-bind-i18n")), lang);
      element.textContent = Array.isArray(value) ? value.join(", ") : value;
    });
  }

  function renderStaticBindings(lang) {
    const player = DATA.player || {};
    const name = player.name || "Player Name";
    const title = DATA.meta && DATA.meta.siteTitle ? DATA.meta.siteTitle : `${name} | Football Recruitment CV`;

    document.title = title;
    setText("[data-bind='name']", name);
    document.querySelectorAll("[data-initials]").forEach((element) => {
      element.textContent = initials(name);
      element.setAttribute("aria-label", name);
    });

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", `${name} - ${localized(player.position, lang)} recruitment CV.`);
    }
  }

  function renderSnapshot(lang) {
    const player = DATA.player || {};
    const snapshot = document.getElementById("snapshotList");
    const rows = [
      [labels[lang].position, localized(player.position, lang)],
      [labels[lang].foot, localized(player.foot, lang)],
      [labels[lang].height, player.height],
      [labels[lang].weight, player.weight],
      [labels[lang].dateOfBirth, formatDate(player.dateOfBirth, lang)],
      [labels[lang].nationality, localized(player.nationality, lang)],
      [labels[lang].currentClub, player.currentClub],
      [labels[lang].previousCollege, player.previousCollege],
      [labels[lang].location, player.location],
      [labels[lang].availability, localized(player.availability, lang)]
    ].filter((row) => hasValue(row[1]));

    snapshot.innerHTML = "";
    rows.forEach(([label, value]) => {
      const wrapper = document.createElement("div");
      wrapper.className = "snapshot-item";
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      wrapper.append(dt, dd);
      snapshot.appendChild(wrapper);
    });
  }

  function renderRolesAndStrengths(lang) {
    const roles = localized(pathValue("player.roles"), lang);
    const strengths = localized(pathValue("content.strengths"), lang);
    const roleTags = document.getElementById("roleTags");
    const strengthsList = document.getElementById("strengthsList");

    roleTags.innerHTML = "";
    (Array.isArray(roles) ? roles : []).forEach((role) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = role;
      roleTags.appendChild(tag);
    });

    strengthsList.innerHTML = "";
    (Array.isArray(strengths) ? strengths : []).forEach((strength) => {
      const item = document.createElement("li");
      item.textContent = strength;
      strengthsList.appendChild(item);
    });
  }

  function renderActions(lang) {
    const actions = document.getElementById("heroActions");
    const contact = (DATA.player && DATA.player.contact) || {};
    const firstVideo = DATA.media && DATA.media.videos && DATA.media.videos[0];
    const firstCv = DATA.media && DATA.media.cvPdfs && DATA.media.cvPdfs[0];
    const profileUrl = safeLink(contact.onlineProfileUrl || (DATA.meta && DATA.meta.onlineProfileUrl));

    actions.innerHTML = "";
    if (firstVideo && safeLink(firstVideo.url)) actions.appendChild(makeButton(labels[lang].watchVideo, "#media", "primary"));
    if (firstCv && safeLink(firstCv.url)) actions.appendChild(makeButton(labels[lang].downloadCv, firstCv.url, ""));
    if (profileUrl) actions.appendChild(makeButton(labels[lang].profileLink, profileUrl, ""));
    if (contact.email) actions.appendChild(makeButton(labels[lang].email, `mailto:${contact.email}`, ""));
  }

  function renderMedia(lang) {
    const grid = document.getElementById("mediaGrid");
    const media = DATA.media || {};
    grid.innerHTML = "";

    (media.videos || []).filter((video) => safeLink(video.url)).forEach((video) => {
      const card = document.createElement("article");
      card.className = "media-card video-card";
      const embed = videoEmbedUrl(video.url);
      if (embed) {
        const iframe = document.createElement("iframe");
        iframe.className = "video-frame";
        iframe.src = embed;
        iframe.title = video.title || labels[lang].watchVideo;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        card.appendChild(iframe);
      }
      const body = document.createElement("div");
      body.className = "media-card-body";
      const heading = document.createElement("h3");
      heading.textContent = video.title || labels[lang].watchVideo;
      body.appendChild(heading);
      body.appendChild(makeButton(labels[lang].open, video.url, embed ? "" : "primary"));
      card.appendChild(body);
      grid.appendChild(card);
    });

    (media.cvPdfs || []).filter((cv) => safeLink(cv.url)).forEach((cv) => {
      const card = document.createElement("article");
      card.className = "media-card";
      const body = document.createElement("div");
      body.className = "media-card-body";
      const heading = document.createElement("h3");
      heading.textContent = cv.title || labels[lang].cv;
      body.append(heading, makeButton(labels[lang].downloadCv, cv.url, "primary"));
      card.appendChild(body);
      grid.appendChild(card);
    });

    (media.photos || []).filter((photo) => safeLink(photo.url)).forEach((photo) => {
      const card = document.createElement("article");
      card.className = "media-card photo-card";
      const img = document.createElement("img");
      img.src = photo.url;
      img.alt = photo.alt || `${DATA.player && DATA.player.name ? DATA.player.name : labels[lang].photo} ${labels[lang].photo}`;
      const body = document.createElement("div");
      body.className = "media-card-body";
      const heading = document.createElement("h3");
      heading.textContent = photo.title || labels[lang].photo;
      body.appendChild(heading);
      card.append(img, body);
      grid.appendChild(card);
    });

    document.querySelector("[data-section='media']").hidden = grid.children.length === 0;
  }

  function renderContact(lang) {
    const contactCard = document.getElementById("contactCard");
    const contact = (DATA.player && DATA.player.contact) || {};
    const methods = [
      [labels[lang].email, contact.email, contact.email ? `mailto:${contact.email}` : ""],
      [labels[lang].phone, contact.phone, contact.phone ? `tel:${contact.phone.replace(/\s+/g, "")}` : ""],
      [labels[lang].whatsapp, contact.whatsapp, contact.whatsapp ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}` : ""],
      [labels[lang].profileLink, contact.onlineProfileUrl || (DATA.meta && DATA.meta.onlineProfileUrl), safeLink(contact.onlineProfileUrl || (DATA.meta && DATA.meta.onlineProfileUrl))]
    ].filter((method) => hasValue(method[1]) && safeLink(method[2]));

    contactCard.innerHTML = "";
    const list = document.createElement("div");
    list.className = "contact-methods";

    if (methods.length === 0) {
      const fallback = document.createElement("p");
      fallback.textContent = labels[lang].noContact;
      contactCard.appendChild(fallback);
      return;
    }

    methods.forEach(([label, value, href]) => {
      const row = document.createElement("div");
      row.className = "contact-method";
      const labelNode = document.createElement("span");
      labelNode.textContent = label;
      const link = document.createElement("a");
      link.href = href;
      link.textContent = value;
      if (/^https?:/i.test(href)) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      row.append(labelNode, link);
      list.appendChild(row);
    });
    contactCard.appendChild(list);
  }

  function hideEmptySections() {
    document.querySelectorAll("[data-field]").forEach((section) => {
      section.hidden = !hasValue(pathValue(section.getAttribute("data-field")));
    });

    const profileSection = document.querySelector("[data-section='profile']");
    profileSection.hidden = !hasValue(pathValue("content.recruitmentSummary")) && !hasValue(pathValue("player.roles"));

    const careerSection = document.querySelector("[data-section='career']");
    if (careerSection) {
      const visibleCards = Array.from(careerSection.querySelectorAll("[data-field]")).some((card) => !card.hidden);
      careerSection.hidden = !visibleCards;
    }
  }

  function render(lang) {
    renderTranslations(lang);
    renderStaticBindings(lang);
    renderHeroBackground();
    renderSnapshot(lang);
    renderRolesAndStrengths(lang);
    renderActions(lang);
    renderMedia(lang);
    renderContact(lang);
    hideEmptySections();
  }

  function initialLanguage() {
    const configured = DATA && DATA.meta && DATA.meta.defaultLanguage;
    const saved = window.localStorage.getItem("playerRecruitmentLanguage");
    const browser = navigator.language ? navigator.language.slice(0, 2).toLowerCase() : "";
    return [saved, configured, browser, "en"].find((lang) => SUPPORTED_LANGUAGES.includes(lang)) || "en";
  }

  document.addEventListener("DOMContentLoaded", () => {
    DATA = window.PLAYER_DATA || null;
    const lang = initialLanguage();

    if (languageSelector) {
      languageSelector.value = lang;
    }

    if (hasPlayerData()) {
      render(lang);
    } else {
      renderTranslations(lang);
      document.documentElement.classList.add("static-fallback");
      console.warn("PLAYER_DATA was not found. Leaving the static example content visible.");
    }

    if (languageSelector) {
      languageSelector.addEventListener("change", (event) => {
        const nextLang = event.target.value;
        window.localStorage.setItem("playerRecruitmentLanguage", nextLang);
        if (hasPlayerData()) {
          render(nextLang);
        } else {
          renderTranslations(nextLang);
        }
      });
    }
  });
}());
