// Objeto con todas las traducciones
const translations = {
  es: {
    // Navigation
    "nav.inicio": "Inicio",
    "nav.nosotros": "Nosotros",
    "nav.productos": "Productos",
    "nav.procesos": "Procesos",
    "nav.contacto": "Contacto",
    "nav.precios": "Precio semanal",

    "price.title": "Precios de la Semana",
    "price.subtitle":
      "Consulte los precios actualizados de nuestros productos de exportación",
    "price.contact_button": "Contáctenos para más información",
    // Footer
    "footer.descripcion": "Exportando calidad desde Colombia al mundo.",
    "footer.contacto.titulo": "Contacto",
    "footer.contacto.direccion":
      "Calle Atardeceres de Jaibaná, Vereda Cerritos, 660007 Pereira",
    "footer.enlaces.titulo": "Enlaces Rápidos",
    "footer.enlaces.item1": "Nosotros",
    "footer.enlaces.item2": "Productos",
    "footer.enlaces.item3": "Precios Semanales",
    "footer.enlaces.item4": "Procesos",
    "footer.enlaces.item5": "Contacto",
    "footer.copyright": "© 2023 Expofruto. Todos los derechos reservados.",
    "footer.legal.item1": "Política de Privacidad",
    "footer.legal.item2": "Términos y Condiciones",
  },
  en: {
    // Meta tags
    "meta.description":
      "Expofruto - Exporting quality from Colombia to the world. Specialized in Tahiti lime and Hass avocado.",
    "meta.og.title": "Expofruto - Colombian fruit exports",
    "meta.og.description":
      "Exporting quality from Colombia to the world. Specialized in Tahiti lime and Hass avocado.",

    // Navigation
    "nav.inicio": "Home",
    "nav.nosotros": "About Us",
    "nav.productos": "Products",
    "nav.procesos": "Processes",
    "nav.contacto": "Contact",
    "nav.precios": "Weekly Prices",

    "price.title": "Weekly Prices",
    "price.subtitle": "Check the updated prices of our export products",
    "price.contact_button": "Contact us for more information",

    // Footer
    "footer.descripcion": "Exporting quality from Colombia to the world.",
    "footer.contacto.titulo": "Contact",
    "footer.contacto.direccion":
      "Calle Atardeceres de Jaibaná, Vereda Cerritos, 660007 Pereira",
    "footer.enlaces.titulo": "Quick Links",
    "footer.enlaces.item1": "About Us",
    "footer.enlaces.item2": "Products",
    "footer.enlaces.item3": "Weekly Prices",
    "footer.enlaces.item4": "Processes",
    "footer.enlaces.item5": "Contact",
    "footer.copyright": "© 2023 Expofruto. All rights reserved.",
    "footer.legal.item1": "Privacy Policy",
    "footer.legal.item2": "Terms and Conditions",
  },

  fr: {
    // Balises meta
    "meta.description":
      "Expofruto - Exportation de qualité depuis la Colombie vers le monde. Spécialisés dans la lime Tahiti et l'avocat Hass.",
    "meta.og.title": "Expofruto - Exportations de fruits colombiens",
    "meta.og.description":
      "Exportation de qualité depuis la Colombie vers le monde. Spécialisés dans la lime Tahiti et l'avocat Hass.",

    // Navigation
    "nav.inicio": "Accueil",
    "nav.nosotros": "À propos",
    "nav.productos": "Produits",
    "nav.procesos": "Processus",
    "nav.contacto": "Contact",
    "nav.precios": "Prix hebdomadaires",

    "price.title": "Prix de la Semaine",
    "price.subtitle":
      "Consultez les prix actualisés de nos produits d'exportation",
    "price.contact_button": "Contactez-nous pour plus d'informations",

    // Pied de page
    "footer.descripcion":
      "Exportation de qualité depuis la Colombie vers le monde.",
    "footer.contacto.titulo": "Contact",
    "footer.contacto.direccion":
      "Calle Atardeceres de Jaibaná, Vereda Cerritos, 660007 Pereira",
    "footer.enlaces.titulo": "Liens Rapides",
    "footer.enlaces.item1": "À propos",
    "footer.enlaces.item2": "Produits",
    "footer.enlaces.item3": "Prix hebdomadaires",
    "footer.enlaces.item4": "Processus",
    "footer.enlaces.item5": "Contact",
    "footer.copyright": "© 2023 Expofruto. Tous droits réservés.",
    "footer.legal.item1": "Politique de Confidentialité",
    "footer.legal.item2": "Conditions Générales",
  },
  it: {
    // Meta tag
    "meta.description":
      "Expofruto - Esportiamo qualità dalla Colombia al mondo. Specializzati in lime Tahiti e avocado Hass.",
    "meta.og.title": "Expofruto - Esportazioni di frutta colombiana",
    "meta.og.description":
      "Esportiamo qualità dalla Colombia al mondo. Specializzati in lime Tahiti e avocado Hass.",

    "price.title": "Prezzi della Settimana",
    "price.subtitle":
      "Consulta i prezzi aggiornati dei nostri prodotti di esportazione",
    "price.contact_button": "Contattaci per maggiori informazioni",

    // Navigazione
    "nav.inicio": "Home",
    "nav.nosotros": "Chi siamo",
    "nav.productos": "Prodotti",
    "nav.procesos": "Processi",
    "nav.contacto": "Contatto",
    "nav.precios": "Prezzi settimanali",

    // Footer
    "footer.descripcion": "Esportiamo qualità dalla Colombia al mondo.",
    "footer.contacto.titulo": "Contatto",
    "footer.contacto.direccion":
      "Calle Atardeceres de Jaibaná, Vereda Cerritos, 660007 Pereira",
    "footer.enlaces.titulo": "Link rapidi",
    "footer.enlaces.item1": "Chi siamo",
    "footer.enlaces.item2": "Prodotti",
    "footer.enlaces.item3": "Prezzi settimanali",
    "footer.enlaces.item4": "Processi",
    "footer.enlaces.item5": "Contatto",
    "footer.copyright": "© 2023 Expofruto. Tutti i diritti riservati.",
    "footer.legal.item1": "Privacy Policy",
    "footer.legal.item2": "Termini e Condizioni",
  },
};

// Función para cambiar el idioma
function changeLanguage(lang) {
  // Cambiar el atributo lang del html
  document.documentElement.lang = lang;

  // Obtener todos los elementos con data-i18n
  const elements = document.querySelectorAll("[data-i18n]");

  // Actualizar cada elemento
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Actualizar el texto del botón de idioma
  const langButton = document.querySelector(".language-dropdown");
  if (langButton) {
    langButton.innerHTML = `<img src="img/${getFlagImage(
      lang
    )}" alt="${lang}" class="flag-icon"> ${lang.toUpperCase()}`;
  }

  // Guardar preferencia en localStorage
  localStorage.setItem("preferredLanguage", lang);
}

// Función para obtener la imagen de la bandera según el idioma
function getFlagImage(lang) {
  const flags = {
    es: "colombia.png",
    en: "euu.png",
    fr: "francia.png",
    it: "italia.webp",
  };
  return flags[lang] || "colombia.png";
}

// Evento al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  // Configurar eventos para los botones de idioma
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.getAttribute("data-lang");
      changeLanguage(lang);
    });
  });

  // Cargar idioma preferido o usar el predeterminado
  const savedLang = localStorage.getItem("preferredLanguage") || "es";
  changeLanguage(savedLang);
});
