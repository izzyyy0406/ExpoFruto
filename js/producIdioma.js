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

    // Productos
    "products.hero.title": "Nuestros Productos",
    "products.hero.subtitle":
      "Exportamos la mejor calidad desde el corazón de Colombia",
    "products.limon.title": "Limón Tahití",
    "products.aguacate.title": "Aguacate Hass",
    "products.buttons.benefits": "Ver Beneficios",
    "products.buttons.recipes": "Ver Recetas",

    // Beneficios
    "benefits.title": "Beneficios y Propiedades",
    "benefits.subtitle":
      "Descubre todo lo que nuestros productos pueden ofrecerte",
    "benefits.nutrition.title": "Propiedades Nutricionales",
    "benefits.health.title": "Beneficios para la Salud",
    "benefits.culinary.title": "Usos Culinarios",
    "benefits.beauty.title": "Usos en Belleza",

    "benefits.limon.nutrition":
      "Alto contenido de vitamina C, antioxidantes y minerales esenciales.",
    "benefits.limon.health":
      "Refuerza el sistema inmunológico, mejora la digestión y ayuda a la absorción de hierro.",
    "benefits.limon.culinary":
      "Ideal para bebidas, aderezos, postres y como realzador de sabores.",
    "benefits.limon.beauty":
      "Excelente para aclarar la piel, tratar el acné y fortalecer las uñas. También se usa en mascarillas capilares para dar brillo al cabello.",

    "benefits.aguacate.nutrition":
      "Rico en grasas saludables, fibra, vitaminas E, C, B6 y potasio.",
    "benefits.aguacate.health":
      "Mejora la salud cardiovascular, reduce el colesterol y promueve la salud de la piel.",
    "benefits.aguacate.culinary":
      "Perfecto para guacamole, ensaladas, tostadas y como sustituto saludable de grasas.",
    "benefits.aguacate.beauty":
      "Ideal para mascarillas faciales hidratantes, tratamientos capilares profundos y como exfoliante natural mezclado con azúcar.",

    // Recetas
    "recipes.title": "Recetas con Nuestros Productos",
    "recipes.guacamole.title": "Guacamole Tradicional",
    "recipes.limonada.title": "Limonada Colombiana",
    "recipes.ensalada.title": "Ensalada con Aguacate",
    "recipes.postre.title": "Postre de Limón",
    "recipes.ingredients": "Ingredientes:",
    "recipes.preparation": "Preparación:",
    "recipes.tips": "Tips:",

    // Guacamole
    "recipes.guacamole.ingredients.1": "2 aguacates Hass maduros",
    "recipes.guacamole.ingredients.2": "1 tomate mediano picado",
    "recipes.guacamole.ingredients.3": "1/4 cebolla picada",
    "recipes.guacamole.ingredients.4": "Jugo de 1 limón Tahití",
    "recipes.guacamole.ingredients.5": "Sal y pimienta al gusto",
    "recipes.guacamole.ingredients.6": "Cilantro fresco picado",
    "recipes.guacamole.steps.1":
      "Corta los aguacates por la mitad, retira el hueso y saca la pulpa.",
    "recipes.guacamole.steps.2":
      "En un tazón, machaca la pulpa con un tenedor hasta obtener la textura deseada.",
    "recipes.guacamole.steps.3": "Añade el tomate, cebolla y cilantro picados.",
    "recipes.guacamole.steps.4":
      "Agrega el jugo de limón, sal y pimienta al gusto.",
    "recipes.guacamole.steps.5": "Mezcla suavemente todos los ingredientes.",
    "recipes.guacamole.steps.6":
      "Sirve inmediatamente con totopos o como acompañamiento.",
    "recipes.guacamole.tips":
      "Para evitar que el guacamole se oxide, guarda un hueso del aguacate en el centro y cubre con plástico adherente.",

    // Limonada
    "recipes.limonada.ingredients.1": "6 limones Tahití",
    "recipes.limonada.ingredients.2": "1 taza de azúcar (o al gusto)",
    "recipes.limonada.ingredients.3": "6 tazas de agua fría",
    "recipes.limonada.ingredients.4": "Hielo al gusto",
    "recipes.limonada.ingredients.5": "Hojas de hierbabuena (opcional)",
    "recipes.limonada.steps.1":
      "Lava bien los limones y córtalos por la mitad.",
    "recipes.limonada.steps.2":
      "Exprime los limones para obtener su jugo, eliminando las semillas.",
    "recipes.limonada.steps.3":
      "En una jarra grande, disuelve el azúcar en una taza de agua tibia.",
    "recipes.limonada.steps.4":
      "Añade el jugo de limón y el resto del agua fría.",
    "recipes.limonada.steps.5":
      "Revuelve bien y prueba para ajustar el dulzor.",
    "recipes.limonada.steps.6":
      "Sirve en vasos con hielo y decora con hojas de hierbabuena.",
    "recipes.limonada.tips":
      "Para una versión más refrescante, puedes licuar la cáscara de un limón (bien lavada) con un poco de agua y colar antes de mezclar.",

    // Ensalada
    "recipes.ensalada.ingredients.1": "1 aguacate Hass maduro",
    "recipes.ensalada.ingredients.2": "2 tazas de mezcla de lechugas",
    "recipes.ensalada.ingredients.3": "1 tomate mediano",
    "recipes.ensalada.ingredients.4": "1/4 cebolla morada",
    "recipes.ensalada.ingredients.5": "1/2 pepino",
    "recipes.ensalada.ingredients.6": "Jugo de 1 limón Tahití",
    "recipes.ensalada.ingredients.7": "2 cucharadas de aceite de oliva",
    "recipes.ensalada.ingredients.8": "Sal y pimienta al gusto",
    "recipes.ensalada.steps.1": "Lava y desinfecta todas las verduras.",
    "recipes.ensalada.steps.2":
      "Corta el tomate en gajos, la cebolla en julianas y el pepino en rodajas.",
    "recipes.ensalada.steps.3":
      "En un tazón grande, mezcla las lechugas con el tomate, cebolla y pepino.",
    "recipes.ensalada.steps.4":
      "Pela y corta el aguacate en cubos, rocíalo con un poco de jugo de limón para evitar que se oxide.",
    "recipes.ensalada.steps.5": "Agrega el aguacate a la ensalada.",
    "recipes.ensalada.steps.6":
      "Prepara el aderezo mezclando el resto del jugo de limón con el aceite de oliva, sal y pimienta.",
    "recipes.ensalada.steps.7":
      "Vierte el aderezo sobre la ensalada y sirve inmediatamente.",
    "recipes.ensalada.tips":
      "Puedes añadir queso feta o nueces para darle un toque extra de sabor y textura.",

    // Postre
    "recipes.postre.ingredients.1":
      "1 taza de jugo de limón Tahití (4-5 limones)",
    "recipes.postre.ingredients.2": "1 lata de leche condensada",
    "recipes.postre.ingredients.3": "1 lata de crema de leche",
    "recipes.postre.ingredients.4": "1 paquete de galletas maría",
    "recipes.postre.ingredients.5": "1/2 taza de agua",
    "recipes.postre.ingredients.6": "Ralladura de 1 limón para decorar",
    "recipes.postre.steps.1":
      "En la licuadora, mezcla el jugo de limón, la leche condensada y la crema de leche hasta obtener una mezcla homogénea.",
    "recipes.postre.steps.2":
      "En un molde rectangular, coloca una capa de galletas maría humedecidas ligeramente con agua.",
    "recipes.postre.steps.3":
      "Vierte una parte de la mezcla de limón sobre las galletas.",
    "recipes.postre.steps.4":
      "Repite las capas hasta terminar con una capa de crema de limón.",
    "recipes.postre.steps.5":
      "Refrigera por al menos 4 horas o preferiblemente toda la noche.",
    "recipes.postre.steps.6": "Antes de servir, decora con ralladura de limón.",
    "recipes.postre.tips":
      "Para un toque especial, puedes agregar un poco de coco rallado entre las capas.",

    // Precios
    "prices.title": "Disponibilidad y Precios",
    "prices.subtitle":
      "Contáctenos para conocer sobre disponibilidad, precios y condiciones de exportación.",
    "prices.button": "Solicitar Información",

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

    // Productos
    "products.hero.title": "Our Products",
    "products.hero.subtitle":
      "Exporting the best quality from the heart of Colombia",
    "products.limon.title": "Tahiti Lime",
    "products.aguacate.title": "Hass Avocado",
    "products.buttons.benefits": "View Benefits",
    "products.buttons.recipes": "View Recipes",

    // Beneficios
    "benefits.title": "Benefits and Properties",
    "benefits.subtitle": "Discover everything our products can offer you",
    "benefits.nutrition.title": "Nutritional Properties",
    "benefits.health.title": "Health Benefits",
    "benefits.culinary.title": "Culinary Uses",
    "benefits.beauty.title": "Beauty Uses",

    "benefits.limon.nutrition":
      "High in vitamin C, antioxidants and essential minerals.",
    "benefits.limon.health":
      "Strengthens the immune system, improves digestion and aids iron absorption.",
    "benefits.limon.culinary":
      "Ideal for drinks, dressings, desserts and as a flavor enhancer.",
    "benefits.limon.beauty":
      "Excellent for lightening skin, treating acne and strengthening nails. Also used in hair masks to add shine.",

    "benefits.aguacate.nutrition":
      "Rich in healthy fats, fiber, vitamins E, C, B6 and potassium.",
    "benefits.aguacate.health":
      "Improves cardiovascular health, reduces cholesterol and promotes skin health.",
    "benefits.aguacate.culinary":
      "Perfect for guacamole, salads, toasts and as a healthy fat substitute.",
    "benefits.aguacate.beauty":
      "Ideal for hydrating facial masks, deep hair treatments and as a natural scrub when mixed with sugar.",

    // Recetas
    "recipes.title": "Recipes with Our Products",
    "recipes.guacamole.title": "Traditional Guacamole",
    "recipes.limonada.title": "Colombian Lemonade",
    "recipes.ensalada.title": "Avocado Salad",
    "recipes.postre.title": "Lemon Dessert",
    "recipes.ingredients": "Ingredients:",
    "recipes.preparation": "Preparation:",
    "recipes.tips": "Tips:",

    // Guacamole
    "recipes.guacamole.ingredients.1": "2 ripe Hass avocados",
    "recipes.guacamole.ingredients.2": "1 medium chopped tomato",
    "recipes.guacamole.ingredients.3": "1/4 chopped onion",
    "recipes.guacamole.ingredients.4": "Juice of 1 Tahiti lime",
    "recipes.guacamole.ingredients.5": "Salt and pepper to taste",
    "recipes.guacamole.ingredients.6": "Fresh chopped cilantro",
    "recipes.guacamole.steps.1":
      "Cut the avocados in half, remove the pit and scoop out the flesh.",
    "recipes.guacamole.steps.2":
      "In a bowl, mash the flesh with a fork to desired consistency.",
    "recipes.guacamole.steps.3": "Add chopped tomato, onion and cilantro.",
    "recipes.guacamole.steps.4": "Add lime juice, salt and pepper to taste.",
    "recipes.guacamole.steps.5": "Gently mix all ingredients.",
    "recipes.guacamole.steps.6": "Serve immediately with chips or as a side.",
    "recipes.guacamole.tips":
      "To prevent guacamole from oxidizing, keep an avocado pit in the center and cover with plastic wrap.",

    // Limonada
    "recipes.limonada.ingredients.1": "6 Tahiti limes",
    "recipes.limonada.ingredients.2": "1 cup sugar (or to taste)",
    "recipes.limonada.ingredients.3": "6 cups cold water",
    "recipes.limonada.ingredients.4": "Ice to taste",
    "recipes.limonada.ingredients.5": "Mint leaves (optional)",
    "recipes.limonada.steps.1": "Wash limes well and cut them in half.",
    "recipes.limonada.steps.2":
      "Squeeze the limes to get the juice, removing seeds.",
    "recipes.limonada.steps.3":
      "In a large pitcher, dissolve sugar in one cup of warm water.",
    "recipes.limonada.steps.4": "Add lime juice and remaining cold water.",
    "recipes.limonada.steps.5": "Stir well and taste to adjust sweetness.",
    "recipes.limonada.steps.6":
      "Serve in glasses with ice and garnish with mint leaves.",
    "recipes.limonada.tips":
      "For a more refreshing version, you can blend one lime peel (well washed) with some water and strain before mixing.",

    // Ensalada
    "recipes.ensalada.ingredients.1": "1 ripe Hass avocado",
    "recipes.ensalada.ingredients.2": "2 cups mixed greens",
    "recipes.ensalada.ingredients.3": "1 medium tomato",
    "recipes.ensalada.ingredients.4": "1/4 red onion",
    "recipes.ensalada.ingredients.5": "1/2 cucumber",
    "recipes.ensalada.ingredients.6": "Juice of 1 Tahiti lime",
    "recipes.ensalada.ingredients.7": "2 tablespoons olive oil",
    "recipes.ensalada.ingredients.8": "Salt and pepper to taste",
    "recipes.ensalada.steps.1": "Wash and disinfect all vegetables.",
    "recipes.ensalada.steps.2":
      "Cut tomato into wedges, onion into thin slices and cucumber into rounds.",
    "recipes.ensalada.steps.3":
      "In a large bowl, mix greens with tomato, onion and cucumber.",
    "recipes.ensalada.steps.4":
      "Peel and dice avocado, sprinkle with some lime juice to prevent oxidation.",
    "recipes.ensalada.steps.5": "Add avocado to salad.",
    "recipes.ensalada.steps.6":
      "Prepare dressing by mixing remaining lime juice with olive oil, salt and pepper.",
    "recipes.ensalada.steps.7":
      "Pour dressing over salad and serve immediately.",
    "recipes.ensalada.tips":
      "You can add feta cheese or nuts for extra flavor and texture.",

    // Postre
    "recipes.postre.ingredients.1": "1 cup Tahiti lime juice (4-5 limes)",
    "recipes.postre.ingredients.2": "1 can condensed milk",
    "recipes.postre.ingredients.3": "1 can cream",
    "recipes.postre.ingredients.4": "1 package Maria cookies",
    "recipes.postre.ingredients.5": "1/2 cup water",
    "recipes.postre.ingredients.6": "Zest of 1 lime for garnish",
    "recipes.postre.steps.1":
      "In a blender, mix lime juice, condensed milk and cream until homogeneous.",
    "recipes.postre.steps.2":
      "In a rectangular mold, place a layer of Maria cookies slightly moistened with water.",
    "recipes.postre.steps.3": "Pour some lime mixture over cookies.",
    "recipes.postre.steps.4": "Repeat layers ending with lime cream layer.",
    "recipes.postre.steps.5":
      "Refrigerate for at least 4 hours or preferably overnight.",
    "recipes.postre.steps.6": "Before serving, garnish with lime zest.",
    "recipes.postre.tips":
      "For a special touch, you can add some grated coconut between layers.",

    // Precios
    "prices.title": "Availability and Prices",
    "prices.subtitle":
      "Contact us for information about availability, prices and export conditions.",
    "prices.button": "Request Information",

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

    // Productos
    "products.hero.title": "Nos Produits",
    "products.hero.subtitle":
      "Exportant la meilleure qualité depuis le cœur de la Colombie",
    "products.limon.title": "Citron Vert Tahiti",
    "products.aguacate.title": "Avocat Hass",
    "products.buttons.benefits": "Voir les Avantages",
    "products.buttons.recipes": "Voir les Recettes",

    // Beneficios
    "benefits.title": "Avantages et Propriétés",
    "benefits.subtitle":
      "Découvrez tout ce que nos produits peuvent vous offrir",
    "benefits.nutrition.title": "Propriétés Nutritionnelles",
    "benefits.health.title": "Bienfaits pour la Santé",
    "benefits.culinary.title": "Utilisations Culinaires",
    "benefits.beauty.title": "Utilisations en Beauté",

    "benefits.limon.nutrition":
      "Riche en vitamine C, antioxydants et minéraux essentiels.",
    "benefits.limon.health":
      "Renforce le système immunitaire, améliore la digestion et aide à l'absorption du fer.",
    "benefits.limon.culinary":
      "Idéal pour les boissons, les vinaigrettes, les desserts et comme exhausteur de goût.",
    "benefits.limon.beauty":
      "Excellent pour éclaircir la peau, traiter l'acné et renforcer les ongles. Utilisé aussi dans les masques capillaires pour donner de la brillance.",

    "benefits.aguacate.nutrition":
      "Riche en graisses saines, fibres, vitamines E, C, B6 et potassium.",
    "benefits.aguacate.health":
      "Améliore la santé cardiovasculaire, réduit le cholestérol et favorise la santé de la peau.",
    "benefits.aguacate.culinary":
      "Parfait pour le guacamole, les salades, les toasts et comme substitut sain aux graisses.",
    "benefits.aguacate.beauty":
      "Idéal pour les masques hydratants, les soins capillaires profonds et comme gommage naturel mélangé à du sucre.",

    // Recetas
    "recipes.title": "Recettes avec Nos Produits",
    "recipes.guacamole.title": "Guacamole Traditionnel",
    "recipes.limonada.title": "Limonade Colombienne",
    "recipes.ensalada.title": "Salade à l'Avocat",
    "recipes.postre.title": "Dessert au Citron Vert",
    "recipes.ingredients": "Ingrédients:",
    "recipes.preparation": "Préparation:",
    "recipes.tips": "Astuces:",

    // Guacamole
    "recipes.guacamole.ingredients.1": "2 avocats Hass mûrs",
    "recipes.guacamole.ingredients.2": "1 tomate moyenne hachée",
    "recipes.guacamole.ingredients.3": "1/4 oignon haché",
    "recipes.guacamole.ingredients.4": "Jus d'1 citron vert Tahiti",
    "recipes.guacamole.ingredients.5": "Sel et poivre au goût",
    "recipes.guacamole.ingredients.6": "Coriandre fraîche hachée",
    "recipes.guacamole.steps.1":
      "Coupez les avocats en deux, retirez le noyau et prélevez la chair.",
    "recipes.guacamole.steps.2":
      "Dans un bol, écrasez la chair à la fourchette jusqu'à la texture désirée.",
    "recipes.guacamole.steps.3":
      "Ajoutez la tomate, l'oignon et la coriandre hachés.",
    "recipes.guacamole.steps.4":
      "Ajoutez le jus de citron vert, sel et poivre au goût.",
    "recipes.guacamole.steps.5": "Mélangez doucement tous les ingrédients.",
    "recipes.guacamole.steps.6":
      "Servez immédiatement avec des chips ou comme accompagnement.",
    "recipes.guacamole.tips":
      "Pour éviter que le guacamole ne s'oxyde, gardez un noyau d'avocat au centre et couvrez de film alimentaire.",

    // Limonada
    "recipes.limonada.ingredients.1": "6 citrons verts Tahiti",
    "recipes.limonada.ingredients.2": "1 tasse de sucre (ou au goût)",
    "recipes.limonada.ingredients.3": "6 tasses d'eau froide",
    "recipes.limonada.ingredients.4": "Glaçons au goût",
    "recipes.limonada.ingredients.5": "Feuilles de menthe (optionnel)",
    "recipes.limonada.steps.1":
      "Lavez bien les citrons verts et coupez-les en deux.",
    "recipes.limonada.steps.2":
      "Pressez les citrons verts pour obtenir leur jus, en éliminant les pépins.",
    "recipes.limonada.steps.3":
      "Dans une grande carafe, dissolvez le sucre dans une tasse d'eau tiède.",
    "recipes.limonada.steps.4":
      "Ajoutez le jus de citron vert et le reste de l'eau froide.",
    "recipes.limonada.steps.5": "Remuez bien et goûtez pour ajuster le sucre.",
    "recipes.limonada.steps.6":
      "Servez dans des verres avec des glaçons et décorez avec des feuilles de menthe.",
    "recipes.limonada.tips":
      "Pour une version plus rafraîchissante, vous pouvez mixer la peau d'un citron vert (bien lavée) avec un peu d'eau et filtrer avant de mélanger.",

    // Ensalada
    "recipes.ensalada.ingredients.1": "1 avocat Hass mûr",
    "recipes.ensalada.ingredients.2": "2 tasses de mélange de salades",
    "recipes.ensalada.ingredients.3": "1 tomate moyenne",
    "recipes.ensalada.ingredients.4": "1/4 oignon rouge",
    "recipes.ensalada.ingredients.5": "1/2 concombre",
    "recipes.ensalada.ingredients.6": "Jus d'1 citron vert Tahiti",
    "recipes.ensalada.ingredients.7": "2 cuillères à soupe d'huile d'olive",
    "recipes.ensalada.ingredients.8": "Sel et poivre au goût",
    "recipes.ensalada.steps.1": "Lavez et désinfectez tous les légumes.",
    "recipes.ensalada.steps.2":
      "Coupez la tomate en quartiers, l'oignon en lamelles et le concombre en rondelles.",
    "recipes.ensalada.steps.3":
      "Dans un grand saladier, mélangez les salades avec la tomate, l'oignon et le concombre.",
    "recipes.ensalada.steps.4":
      "Épluchez et coupez l'avocat en cubes, arrosez d'un peu de jus de citron vert pour éviter l'oxydation.",
    "recipes.ensalada.steps.5": "Ajoutez l'avocat à la salade.",
    "recipes.ensalada.steps.6":
      "Préparez la vinaigrette en mélangeant le reste du jus de citron vert avec l'huile d'olive, sel et poivre.",
    "recipes.ensalada.steps.7":
      "Versez la vinaigrette sur la salade et servez immédiatement.",
    "recipes.ensalada.tips":
      "Vous pouvez ajouter du fromage feta ou des noix pour un goût et une texture supplémentaires.",

    // Postre
    "recipes.postre.ingredients.1":
      "1 tasse de jus de citron vert Tahiti (4-5 citrons)",
    "recipes.postre.ingredients.2": "1 boîte de lait concentré sucré",
    "recipes.postre.ingredients.3": "1 boîte de crème",
    "recipes.postre.ingredients.4": "1 paquet de biscuits Maria",
    "recipes.postre.ingredients.5": "1/2 tasse d'eau",
    "recipes.postre.ingredients.6": "Zeste d'1 citron vert pour décorer",
    "recipes.postre.steps.1":
      "Dans un mixeur, mélangez le jus de citron vert, le lait concentré et la crème jusqu'à homogénéité.",
    "recipes.postre.steps.2":
      "Dans un moule rectangulaire, placez une couche de biscuits Maria légèrement humidifiés avec de l'eau.",
    "recipes.postre.steps.3":
      "Versez une partie de la préparation au citron vert sur les biscuits.",
    "recipes.postre.steps.4":
      "Répétez les couches en terminant par une couche de crème au citron vert.",
    "recipes.postre.steps.5":
      "Réfrigérez pendant au moins 4 heures ou de préférence toute la nuit.",
    "recipes.postre.steps.6":
      "Avant de servir, décorez avec le zeste de citron vert.",
    "recipes.postre.tips":
      "Pour une touche spéciale, vous pouvez ajouter un peu de noix de coco râpée entre les couches.",

    // Precios
    "prices.title": "Disponibilité et Prix",
    "prices.subtitle":
      "Contactez-nous pour connaître la disponibilité, les prix et les conditions d'exportation.",
    "prices.button": "Demander des Informations",

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

    // Productos
    "products.hero.title": "I Nostri Prodotti",
    "products.hero.subtitle":
      "Esportiamo la migliore qualità dal cuore della Colombia",
    "products.limon.title": "Lime Tahiti",
    "products.aguacate.title": "Avocado Hass",
    "products.buttons.benefits": "Vedi Benefici",
    "products.buttons.recipes": "Vedi Ricette",

    // Beneficios
    "benefits.title": "Benefici e Proprietà",
    "benefits.subtitle":
      "Scopri tutto ciò che i nostri prodotti possono offrirti",
    "benefits.nutrition.title": "Proprietà Nutrizionali",
    "benefits.health.title": "Benefici per la Salute",
    "benefits.culinary.title": "Usi Culinari",
    "benefits.beauty.title": "Usi in Bellezza",

    "benefits.limon.nutrition":
      "Alto contenuto di vitamina C, antiossidanti e minerali essenziali.",
    "benefits.limon.health":
      "Rafforza il sistema immunitario, migliora la digestione e aiuta l'assorbimento del ferro.",
    "benefits.limon.culinary":
      "Ideale per bevande, condimenti, dessert e come esaltatore di sapori.",
    "benefits.limon.beauty":
      "Eccellente per schiarire la pelle, trattare l'acne e rinforzare le unghie. Usato anche nelle maschere per capelli per dare lucentezza.",

    "benefits.aguacate.nutrition":
      "Ricco di grassi sani, fibre, vitamine E, C, B6 e potassio.",
    "benefits.aguacate.health":
      "Migliora la salute cardiovascolare, riduce il colesterolo e promuove la salute della pelle.",
    "benefits.aguacate.culinary":
      "Perfetto per guacamole, insalate, toast e come sostituto sano dei grassi.",
    "benefits.aguacate.beauty":
      "Ideale per maschere idratanti, trattamenti profondi per capelli e come scrub naturale mescolato con zucchero.",

    // Recetas
    "recipes.title": "Ricette con i Nostri Prodotti",
    "recipes.guacamole.title": "Guacamole Tradizionale",
    "recipes.limonada.title": "Limonata Colombiana",
    "recipes.ensalada.title": "Insalata con Avocado",
    "recipes.postre.title": "Dolce al Lime",
    "recipes.ingredients": "Ingredienti:",
    "recipes.preparation": "Preparazione:",
    "recipes.tips": "Consigli:",

    // Guacamole
    "recipes.guacamole.ingredients.1": "2 avocado Hass maturi",
    "recipes.guacamole.ingredients.2": "1 pomodoro medio tritato",
    "recipes.guacamole.ingredients.3": "1/4 cipolla tritata",
    "recipes.guacamole.ingredients.4": "Succo di 1 lime Tahiti",
    "recipes.guacamole.ingredients.5": "Sale e pepe q.b.",
    "recipes.guacamole.ingredients.6": "Coriandolo fresco tritato",
    "recipes.guacamole.steps.1":
      "Tagliate gli avocado a metà, rimuovete il nocciolo e scavate la polpa.",
    "recipes.guacamole.steps.2":
      "In una ciotola, schiacciate la polpa con una forchetta fino alla consistenza desiderata.",
    "recipes.guacamole.steps.3":
      "Aggiungete pomodoro, cipolla e coriandolo tritati.",
    "recipes.guacamole.steps.4": "Aggiungete succo di lime, sale e pepe q.b.",
    "recipes.guacamole.steps.5":
      "Mescolate delicatamente tutti gli ingredienti.",
    "recipes.guacamole.steps.6":
      "Servite immediatamente con nachos o come contorno.",
    "recipes.guacamole.tips":
      "Per evitare che il guacamole si ossidi, tenete un nocciolo di avocado al centro e coprite con pellicola.",

    // Limonada
    "recipes.limonada.ingredients.1": "6 lime Tahiti",
    "recipes.limonada.ingredients.2": "1 tazza di zucchero (o q.b.)",
    "recipes.limonada.ingredients.3": "6 tazze di acqua fredda",
    "recipes.limonada.ingredients.4": "Ghiaccio q.b.",
    "recipes.limonada.ingredients.5": "Foglie di menta (opzionale)",
    "recipes.limonada.steps.1": "Lavate bene i lime e tagliateli a metà.",
    "recipes.limonada.steps.2":
      "Spremete i lime per ottenere il succo, eliminando i semi.",
    "recipes.limonada.steps.3":
      "In una brocca grande, sciogliete lo zucchero in una tazza di acqua tiepida.",
    "recipes.limonada.steps.4":
      "Aggiungete il succo di lime e il resto dell'acqua fredda.",
    "recipes.limonada.steps.5":
      "Mescolate bene e assaggiate per regolare la dolcezza.",
    "recipes.limonada.steps.6":
      "Servite in bicchieri con ghiaccio e guarnite con foglie di menta.",
    "recipes.limonada.tips":
      "Per una versione più rinfrescante, potete frullare la buccia di un lime (ben lavata) con un po' d'acqua e filtrare prima di mescolare.",

    // Ensalada
    "recipes.ensalada.ingredients.1": "1 avocado Hass maturo",
    "recipes.ensalada.ingredients.2": "2 tazze di misto di insalate",
    "recipes.ensalada.ingredients.3": "1 pomodoro medio",
    "recipes.ensalada.ingredients.4": "1/4 cipolla rossa",
    "recipes.ensalada.ingredients.5": "1/2 cetriolo",
    "recipes.ensalada.ingredients.6": "Succo di 1 lime Tahiti",
    "recipes.ensalada.ingredients.7": "2 cucchiai di olio d'oliva",
    "recipes.ensalada.ingredients.8": "Sale e pepe q.b.",
    "recipes.ensalada.steps.1": "Lavate e disinfettate tutte le verdure.",
    "recipes.ensalada.steps.2":
      "Tagliate il pomodoro a spicchi, la cipolla a fettine sottili e il cetriolo a rondelle.",
    "recipes.ensalada.steps.3":
      "In una ciotola grande, mescolate le insalate con pomodoro, cipolla e cetriolo.",
    "recipes.ensalada.steps.4":
      "Pelate e tagliate l'avocado a cubetti, spruzzate con un po' di succo di lime per evitare l'ossidazione.",
    "recipes.ensalada.steps.5": "Aggiungete l'avocado all'insalata.",
    "recipes.ensalada.steps.6":
      "Preparate il condimento mescolando il resto del succo di lime con olio d'oliva, sale e pepe.",
    "recipes.ensalada.steps.7":
      "Versate il condimento sull'insalata e servite immediatamente.",
    "recipes.ensalada.tips":
      "Potete aggiungere formaggio feta o noci per un tocco extra di sapore e consistenza.",

    // Dolce
    "recipes.postre.ingredients.1":
      "1 tazza di succo di lime Tahiti (4-5 lime)",
    "recipes.postre.ingredients.2": "1 lattina di latte condensato zuccherato",
    "recipes.postre.ingredients.3": "1 lattina di panna",
    "recipes.postre.ingredients.4": "1 confezione di biscotti Maria",
    "recipes.postre.ingredients.5": "1/2 tazza d'acqua",
    "recipes.postre.ingredients.6": "Scorza di 1 lime per decorare",
    "recipes.postre.steps.1":
      "In un frullatore, mescolare il succo di lime, il latte condensato e la panna fino a ottenere un composto omogeneo.",
    "recipes.postre.steps.2":
      "In una teglia rettangolare, disporre uno strato di biscotti Maria leggermente inumiditi con acqua.",
    "recipes.postre.steps.3": "Versare parte della crema al lime sui biscotti.",
    "recipes.postre.steps.4":
      "Ripetere gli strati, terminando con uno strato di crema al lime.",
    "recipes.postre.steps.5":
      "Mettere in frigorifero per almeno 4 ore o preferibilmente tutta la notte.",
    "recipes.postre.steps.6":
      "Prima di servire, decorare con la scorza di lime.",
    "recipes.postre.tips":
      "Per un tocco speciale, si può aggiungere un po' di cocco grattugiato tra gli strati.",

    // Prezzi
    "prices.title": "Disponibilità e Prezzi",
    "prices.subtitle":
      "Contattaci per conoscere la disponibilità, i prezzi e le condizioni di esportazione.",
    "prices.button": "Richiedi Informazioni",
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
document.addEventListener("DOMContentLoaded", function () {
  // Inicializa dropdowns de Bootstrap
  const dropdownElements = document.querySelectorAll(".dropdown-toggle");
  dropdownElements.forEach((el) => {
    new bootstrap.Dropdown(el);
  });

  // Configura eventos para los botones de idioma
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.getAttribute("data-lang");
      changeLanguage(lang);

      // Cierra el dropdown después de seleccionar
      const dropdown = bootstrap.Dropdown.getInstance(
        button.closest(".dropdown-toggle")
      );
      dropdown.hide();
    });
  });

  // Cargar idioma preferido
  const savedLang = localStorage.getItem("preferredLanguage") || "es";
  changeLanguage(savedLang);
});

function changeLanguage(lang) {
  // Actualiza el atributo lang del html
  document.documentElement.lang = lang;

  // Actualiza elementos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];

      // Para placeholders
      if (element.hasAttribute("placeholder")) {
        element.setAttribute("placeholder", translations[lang][key]);
      }
    }
  });

  // Actualiza el botón de idioma
  const langButton = document.querySelector(".language-dropdown");
  if (langButton) {
    langButton.innerHTML = `<img src="img/${getFlagImage(
      lang
    )}" alt="${lang}" class="flag-icon"> ${lang.toUpperCase()}`;
  }

  // Guarda preferencia
  localStorage.setItem("preferredLanguage", lang);
}

function getFlagImage(lang) {
  const flags = {
    es: "colombia.png",
    en: "euu.png",
    fr: "francia.png",
    it: "italia.webp",
  };
  return flags[lang] || "colombia.png";
}
