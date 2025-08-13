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
    // Comprador section
    "comprador.titulo": "Fruta colombiana premium para tu mercado",
    "comprador.subtitulo":
      "Complete el formulario y nos pondremos en contacto para ofrecerle los mejores productos colombianos.",
    "comprador.beneficio1": "Calidad certificada internacionalmente",
    "comprador.beneficio2": "Logística integral puerta a puerta",
    "comprador.beneficio3": "Flexibilidad en volúmenes y frecuencias",

    // Formulario
    "formulario.titulo": "Contacto para Comercializadores",
    "formulario.nombre": "Nombre *",
    "formulario.error_nombre": "Por favor ingrese solo letras y espacios.",
    "formulario.apellido": "Apellido *",
    "formulario.error_apellido": "Por favor ingrese solo letras y espacios.",
    "formulario.empresa": "Empresa",
    "formulario.email": "Correo Electrónico *",
    "formulario.error_email":
      "Por favor ingrese un correo electrónico válido (ejemplo: usuario@dominio.com).",
    "formulario.telefono": "Número de Teléfono *",
    "formulario.error_telefono":
      "Por favor ingrese un número de teléfono válido (solo números, 7-15 dígitos).",
    "formulario.ciudad": "Ciudad *",
    "formulario.error_ciudad": "Por favor ingrese un nombre de ciudad válido.",
    "formulario.pais": "País *",
    "formulario.seleccione_pais": "Seleccione un país",
    "formulario.error_pais": "Por favor seleccione un país.",
    "formulario.productos_interes": "¿Qué productos le interesan? *",
    "formulario.seleccion_maxima": "Selecciona máximo 2 productos principales:",
    "formulario.especificar_productos":
      "Especifica qué otros productos te interesan:",
    "formulario.ejemplo_productos": "Ej: Mango, Piña, Guanábana...",
    "formulario.error_productos":
      "Por favor especifica qué otros productos te interesan.",
    "formulario.error_seleccion_productos":
      "Por favor seleccione al menos un producto (máximo 2).",
    "formulario.requerimientos": "Requerimientos específicos",
    "formulario.ejemplo_requerimientos":
      "Ej: Cantidad estimada, frecuencia de envío, certificaciones requeridas, etc.",
    "formulario.acepto": "Acepto la",
    "formulario.politica_privacidad": "Política de Privacidad",
    "formulario.autorizo": "y autorizo el tratamiento de mis datos.",
    "formulario.error_terminos": "Debe aceptar los términos para continuar.",
    "formulario.enviar_solicitud": "Enviar Solicitud",

    // Productos
    "productos.limon": "Limón Tahití",
    "productos.aguacate": "Aguacate Hass",
    "productos.otros": "Otros productos",

    // Beneficios
    "beneficios.titulo": "Por qué elegirnos como proveedor",
    "beneficios.certificaciones": "Certificaciones Internacionales",
    "beneficios.certificaciones_desc": "USDA, FDA y Union Europea",
    "beneficios.logistica": "Logística Confiable",
    "beneficios.logistica_desc":
      "Envíos marítimos y aéreos con trazabilidad completa.",
    "beneficios.disponibilidad": "Disponibilidad Todo el Año",
    "beneficios.disponibilidad_desc":
      "Gracias a nuestras múltiples zonas de cultivo.",

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
    // Comprador section
    "comprador.titulo": "Premium Colombian fruits for your market",
    "comprador.subtitulo":
      "Fill out the form and we will contact you to offer the best Colombian products.",
    "comprador.beneficio1": "Internationally certified quality",
    "comprador.beneficio2": "Complete door-to-door logistics",
    "comprador.beneficio3": "Flexibility in volumes and frequencies",

    // Formulario
    "formulario.titulo": "Contact for Commercial Partners",
    "formulario.nombre": "Name *",
    "formulario.error_nombre": "Please enter letters and spaces only.",
    "formulario.apellido": "Last Name *",
    "formulario.error_apellido": "Please enter letters and spaces only.",
    "formulario.empresa": "Company",
    "formulario.email": "Email *",
    "formulario.error_email":
      "Please enter a valid email address (example: user@domain.com).",
    "formulario.telefono": "Phone Number *",
    "formulario.error_telefono":
      "Please enter a valid phone number (numbers only, 7-15 digits).",
    "formulario.ciudad": "City *",
    "formulario.error_ciudad": "Please enter a valid city name.",
    "formulario.pais": "Country *",
    "formulario.seleccione_pais": "Select a country",
    "formulario.error_pais": "Please select a country.",
    "formulario.productos_interes": "What products are you interested in? *",
    "formulario.seleccion_maxima": "Select maximum 2 main products:",
    "formulario.especificar_productos":
      "Specify other products you are interested in:",
    "formulario.ejemplo_productos": "Ex: Mango, Pineapple, Soursop...",
    "formulario.error_productos":
      "Please specify other products you are interested in.",
    "formulario.error_seleccion_productos":
      "Please select at least one product (maximum 2).",
    "formulario.requerimientos": "Specific requirements",
    "formulario.ejemplo_requerimientos":
      "Ex: Estimated quantity, shipping frequency, required certifications, etc.",
    "formulario.acepto": "I accept the",
    "formulario.politica_privacidad": "Privacy Policy",
    "formulario.autorizo": "and authorize the processing of my data.",
    "formulario.error_terminos": "You must accept the terms to continue.",
    "formulario.enviar_solicitud": "Submit Request",

    // Productos
    "productos.limon": "Tahiti Lime",
    "productos.aguacate": "Hass Avocado",
    "productos.otros": "Other products",

    // Beneficios
    "beneficios.titulo": "Why choose us as your supplier",
    "beneficios.certificaciones": "International Certifications",
    "beneficios.certificaciones_desc": "USDA, FDA and European Union",
    "beneficios.logistica": "Reliable Logistics",
    "beneficios.logistica_desc":
      "Sea and air shipments with complete traceability.",
    "beneficios.disponibilidad": "Year-Round Availability",
    "beneficios.disponibilidad_desc": "Thanks to our multiple growing areas.",

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
    // Comprador section
    "comprador.titulo": "Fruits colombiens premium pour votre marché",
    "comprador.subtitulo":
      "Remplissez le formulaire et nous vous contacterons pour vous proposer les meilleurs produits colombiens.",
    "comprador.beneficio1": "Qualité certifiée internationalement",
    "comprador.beneficio2": "Logistique intégrée porte à porte",
    "comprador.beneficio3": "Flexibilité en volumes et fréquences",

    // Formulario
    "formulario.titulo": "Contact pour les Commerciaux",
    "formulario.nombre": "Nom *",
    "formulario.error_nombre":
      "Veuillez n'entrer que des lettres et des espaces.",
    "formulario.apellido": "Prénom *",
    "formulario.error_apellido":
      "Veuillez n'entrer que des lettres et des espaces.",
    "formulario.empresa": "Entreprise",
    "formulario.email": "Email *",
    "formulario.error_email":
      "Veuillez entrer une adresse email valide (exemple: utilisateur@domaine.com).",
    "formulario.telefono": "Numéro de téléphone *",
    "formulario.error_telefono":
      "Veuillez entrer un numéro de téléphone valide (chiffres uniquement, 7-15 chiffres).",
    "formulario.ciudad": "Ville *",
    "formulario.error_ciudad": "Veuillez entrer un nom de ville valide.",
    "formulario.pais": "Pays *",
    "formulario.seleccione_pais": "Sélectionnez un pays",
    "formulario.error_pais": "Veuillez sélectionner un pays.",
    "formulario.productos_interes": "Quels produits vous intéressent? *",
    "formulario.seleccion_maxima":
      "Sélectionnez maximum 2 produits principaux:",
    "formulario.especificar_productos":
      "Précisez les autres produits qui vous intéressent:",
    "formulario.ejemplo_productos": "Ex: Mangue, Ananas, Corossol...",
    "formulario.error_productos":
      "Veuillez préciser les autres produits qui vous intéressent.",
    "formulario.error_seleccion_productos":
      "Veuillez sélectionner au moins un produit (maximum 2).",
    "formulario.requerimientos": "Exigences spécifiques",
    "formulario.ejemplo_requerimientos":
      "Ex: Quantité estimée, fréquence d'expédition, certifications requises, etc.",
    "formulario.acepto": "J'accepte la",
    "formulario.politica_privacidad": "Politique de Confidentialité",
    "formulario.autorizo": "et j'autorise le traitement de mes données.",
    "formulario.error_terminos":
      "Vous devez accepter les conditions pour continuer.",
    "formulario.enviar_solicitud": "Envoyer la Demande",

    // Productos
    "productos.limon": "Citron vert Tahiti",
    "productos.aguacate": "Avocat Hass",
    "productos.otros": "Autres produits",

    // Beneficios
    "beneficios.titulo": "Pourquoi nous choisir comme fournisseur",
    "beneficios.certificaciones": "Certifications Internationales",
    "beneficios.certificaciones_desc": "USDA, FDA et Union Européenne",
    "beneficios.logistica": "Logistique Fiable",
    "beneficios.logistica_desc":
      "Expéditions maritimes et aériennes avec traçabilité complète.",
    "beneficios.disponibilidad": "Disponibilité Toute l'Année",
    "beneficios.disponibilidad_desc": "Grâce à nos multiples zones de culture.",

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

    // Navigazione
    "nav.inicio": "Home",
    "nav.nosotros": "Chi siamo",
    "nav.productos": "Prodotti",
    "nav.procesos": "Processi",
    "nav.contacto": "Contatto",
    "nav.precios": "Prezzi settimanali",

    // Comprador section
    "comprador.titulo": "Frutta colombiana premium per il tuo mercato",
    "comprador.subtitulo":
      "Compila il modulo e ti contatteremo per offrirti i migliori prodotti colombiani.",
    "comprador.beneficio1": "Qualità certificata a livello internazionale",
    "comprador.beneficio2": "Logistica integrata porta a porta",
    "comprador.beneficio3": "Flessibilità in volumi e frequenze",

    // Formulario
    "formulario.titulo": "Contatto per Commerciali",
    "formulario.nombre": "Nome *",
    "formulario.error_nombre": "Inserisci solo lettere e spazi.",
    "formulario.apellido": "Cognome *",
    "formulario.error_apellido": "Inserisci solo lettere e spazi.",
    "formulario.empresa": "Azienda",
    "formulario.email": "Email *",
    "formulario.error_email":
      "Inserisci un indirizzo email valido (esempio: utente@dominio.com).",
    "formulario.telefono": "Numero di telefono *",
    "formulario.error_telefono":
      "Inserisci un numero di telefono valido (solo numeri, 7-15 cifre).",
    "formulario.ciudad": "Città *",
    "formulario.error_ciudad": "Inserisci un nome di città valido.",
    "formulario.pais": "Paese *",
    "formulario.seleccione_pais": "Seleziona un paese",
    "formulario.error_pais": "Seleziona un paese.",
    "formulario.productos_interes": "Quali prodotti ti interessano? *",
    "formulario.seleccion_maxima": "Seleziona massimo 2 prodotti principali:",
    "formulario.especificar_productos":
      "Specifica altri prodotti di tuo interesse:",
    "formulario.ejemplo_productos": "Es: Mango, Ananas, Guanábana...",
    "formulario.error_productos": "Specifica altri prodotti di tuo interesse.",
    "formulario.error_seleccion_productos":
      "Seleziona almeno un prodotto (massimo 2).",
    "formulario.requerimientos": "Requisiti specifici",
    "formulario.ejemplo_requerimientos":
      "Es: Quantità stimata, frequenza di spedizione, certificazioni richieste, ecc.",
    "formulario.acepto": "Accetto la",
    "formulario.politica_privacidad": "Privacy Policy",
    "formulario.autorizo": "e autorizzo il trattamento dei miei dati.",
    "formulario.error_terminos": "Devi accettare i termini per continuare.",
    "formulario.enviar_solicitud": "Invia Richiesta",

    // Productos
    "productos.limon": "Lime Tahiti",
    "productos.aguacate": "Avocado Hass",
    "productos.otros": "Altri prodotti",

    // Beneficios
    "beneficios.titulo": "Perché sceglierci come fornitore",
    "beneficios.certificaciones": "Certificazioni Internazionali",
    "beneficios.certificazioni_desc": "USDA, FDA e Unione Europea",
    "beneficios.logistica": "Logistica Affidabile",
    "beneficios.logistica_desc":
      "Spedizioni marittime e aeree con tracciabilità completa.",
    "beneficios.disponibilidad": "Disponibilità Tutto l'Anno",
    "beneficios.disponibilidad_desc":
      "Grazie alle nostre molteplici zone di coltivazione.",

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
