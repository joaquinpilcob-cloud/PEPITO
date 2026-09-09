/* Maison Anza Parfums — Catálogo de decants 5ml
   Fuente de notas: Fragrantica / marcas oficiales */

const PRODUCTS = [
  {
    id: "khamrah-qahwa",
    num: "01",
    collection: "arabe",
    gender: "unisex",
    brand: "Lattafa",
    name: "Khamrah Qahwa",
    price: 25,
    stock: true,
    es: {
      desc: "Un abrazo cálido de café y especias orientales sobre un corazón de praliné y frutas confitadas, con un fondo dulce y envolvente que recuerda a un souk al atardecer.",
      salida: "Canela, Cardamomo, Jengibre",
      corazon: "Praliné, Frutas confitadas, Flores blancas",
      fondo: "Vainilla, Café, Haba tonka, Benjuí, Almizcle",
      idealPara: "Noches frías, reuniones íntimas, temporada otoño-invierno"
    },
    en: {
      desc: "A warm embrace of coffee and oriental spices over a praline and candied-fruit heart, with a sweet, enveloping base reminiscent of a souk at sunset.",
      salida: "Cinnamon, Cardamom, Ginger",
      corazon: "Praline, Candied fruits, White flowers",
      fondo: "Vanilla, Coffee, Tonka bean, Benzoin, Musk",
      idealPara: "Cold nights, intimate gatherings, fall-winter season"
    }
  },
  {
    id: "bharara-king",
    num: "02",
    collection: "arabe",
    gender: "masculino",
    brand: "Bharara",
    name: "Bharara King",
    price: 30,
    stock: true,
    es: {
      desc: "Una salida cítrica vibrante que da paso a un corazón afrutado tipo tutti frutti, cerrando con un fondo ambarado y almizclado de gran presencia.",
      salida: "Naranja, Bergamota, Limón",
      corazon: "Notas afrutadas (tutti frutti)",
      fondo: "Almizcle blanco, Ámbar, Vainilla",
      idealPara: "Eventos al aire libre, salidas de fin de semana"
    },
    en: {
      desc: "A vibrant citrus opening leads into a tutti-frutti fruity heart, closing with an amber, musky base of great presence.",
      salida: "Orange, Bergamot, Lemon",
      corazon: "Fruity notes (tutti frutti)",
      fondo: "White musk, Amber, Vanilla",
      idealPara: "Outdoor events, weekend outings"
    }
  },
  {
    id: "odyssey-mega",
    num: "03",
    collection: "arabe",
    gender: "masculino",
    brand: "Armaf",
    name: "Odyssey Mega",
    price: 30,
    stock: true,
    es: {
      desc: "Fresco y magnético, mezcla una salida cítrico-mentolada con un corazón afrutado-herbal y un fondo amaderado de larga duración.",
      salida: "Naranja, Limón, Bergamota, Jengibre, Menta",
      corazon: "Piña, Salvia, Enebro, Geranio",
      fondo: "Almizcle, Cedro, Haba tonka, Vetiver",
      idealPara: "Uso diario, oficina, tardes de verano"
    },
    en: {
      desc: "Fresh and magnetic, blending a citrus-menthol opening with a fruity-herbal heart and a long-lasting woody base.",
      salida: "Orange, Lemon, Bergamot, Ginger, Mint",
      corazon: "Pineapple, Sage, Juniper, Geranium",
      fondo: "Musk, Cedar, Tonka bean, Vetiver",
      idealPara: "Everyday wear, office, summer afternoons"
    }
  },
  {
    id: "hawas-malibu",
    num: "04",
    collection: "arabe",
    gender: "unisex",
    brand: "Rasasi",
    name: "Hawas Malibu",
    price: 30,
    stock: true,
    es: {
      desc: "La versión costera del icónico Hawas: una explosión cítrico-tropical que se equilibra con un corazón floral-ambarado y una base cálida.",
      salida: "Piña, Naranja, Toronja",
      corazon: "Raíz de lirio, Ámbar, Lavanda",
      fondo: "Haba tonka, Almizcle, Pachulí, Cachemira",
      idealPara: "Playa, verano, uso diurno"
    },
    en: {
      desc: "The coastal take on the iconic Hawas: a citrus-tropical burst balanced by a floral-amber heart and a warm base.",
      salida: "Pineapple, Orange, Grapefruit",
      corazon: "Iris root, Amber, Lavender",
      fondo: "Tonka bean, Musk, Patchouli, Cashmere wood",
      idealPara: "Beach, summer, daytime wear"
    }
  },
  {
    id: "le-beau-le-parfum",
    num: "05",
    collection: "disenador",
    gender: "masculino",
    brand: "Jean Paul Gaultier",
    name: "Le Beau Le Parfum",
    price: 45,
    stock: true,
    es: {
      desc: "Una salida frutal-especiada que da paso a un corazón de coco y madera, cerrando en un fondo amaderado-ambarado envolvente.",
      salida: "Piña, Iris, Jengibre, Ciprés",
      corazon: "Coco, Notas amaderadas",
      fondo: "Haba tonka, Sándalo, Ámbar, Ámbar gris",
      idealPara: "Noches de otoño-invierno, citas"
    },
    en: {
      desc: "A fruity-spicy opening leads into a coconut and woody heart, closing on an enveloping woody-amber base.",
      salida: "Pineapple, Iris, Ginger, Cypress",
      corazon: "Coconut, Woody notes",
      fondo: "Tonka bean, Sandalwood, Amber, Ambergris",
      idealPara: "Fall-winter nights, dates"
    }
  },
  {
    id: "stronger-with-you-intensely",
    num: "06",
    collection: "disenador",
    gender: "masculino",
    brand: "Emporio Armani",
    name: "Stronger With You Intensely",
    price: 40,
    stock: true,
    es: {
      desc: "Un gourmand especiado y adictivo, con un corazón de tofe y canela sobre un fondo cálido de vainilla y gamuza.",
      salida: "Pimienta rosa, Enebro, Violeta",
      corazon: "Tofe (toffee), Canela, Lavanda, Salvia",
      fondo: "Vainilla, Ámbar, Haba tonka, Gamuza",
      idealPara: "Noches frías, ocasiones formales de invierno"
    },
    en: {
      desc: "An addictive spiced gourmand, with a toffee and cinnamon heart over a warm vanilla and suede base.",
      salida: "Pink pepper, Juniper, Violet",
      corazon: "Toffee, Cinnamon, Lavender, Sage",
      fondo: "Vanilla, Amber, Tonka bean, Suede",
      idealPara: "Cold nights, formal winter occasions"
    }
  },
  {
    id: "reserve-privee",
    num: "07",
    collection: "disenador",
    gender: "masculino",
    brand: "Givenchy (Gentleman EDP Réserve Privée)",
    name: "Réserve Privée",
    price: 45,
    stock: true,
    es: {
      desc: "Elegancia francesa con acorde de whisky: una apertura cítrica ligera que da paso a un corazón polvoso de iris y castaña sobre un fondo licoroso.",
      salida: "Bergamota",
      corazon: "Iris, Castaña",
      fondo: "Whisky, Ámbar, Notas amaderadas",
      idealPara: "Oficina, eventos formales, uso versátil"
    },
    en: {
      desc: "French elegance with a whisky accord: a light citrus opening leads into a powdery iris and chestnut heart over a boozy base.",
      salida: "Bergamot",
      corazon: "Iris, Chestnut",
      fondo: "Whisky, Amber, Woody notes",
      idealPara: "Office, formal events, versatile wear"
    }
  },
  {
    id: "le-male-elixir",
    num: "08",
    collection: "disenador",
    gender: "masculino",
    brand: "Jean Paul Gaultier",
    name: "Le Male Elixir",
    price: 35,
    stock: true,
    es: {
      desc: "La reinterpretación densa y oscura del clásico: gourmand, amielada y con una proyección enorme.",
      salida: "Lavanda, Menta",
      corazon: "Vainilla, Benjuí",
      fondo: "Miel, Tabaco, Haba tonka",
      idealPara: "Noches, invierno, ocasiones donde se busca destacar"
    },
    en: {
      desc: "The dense, dark reinterpretation of the classic: gourmand, honeyed, with huge projection.",
      salida: "Lavender, Mint",
      corazon: "Vanilla, Benzoin",
      fondo: "Honey, Tobacco, Tonka bean",
      idealPara: "Nights, winter, occasions to stand out"
    }
  },
  {
    id: "dylan-blue",
    num: "09",
    collection: "disenador",
    gender: "masculino",
    brand: "Versace",
    name: "Dylan Blue",
    price: 35,
    stock: true,
    es: {
      desc: "Fresco, versátil y con un carácter amaderado-acuático que se ha vuelto un básico contemporáneo.",
      salida: "Bergamota de Calabria, Notas acuáticas, Toronja, Hojas de higuera",
      corazon: "Ambroxan, Pimienta negra, Pachulí, Hojas de violeta, Papiro",
      fondo: "Incienso, Almizcle, Haba tonka, Azafrán",
      idealPara: "Uso diario, oficina, primavera-verano"
    },
    en: {
      desc: "Fresh and versatile, with a woody-aquatic character that has become a contemporary staple.",
      salida: "Calabrian bergamot, Aquatic notes, Grapefruit, Fig leaves",
      corazon: "Ambroxan, Black pepper, Patchouli, Violet leaves, Papyrus",
      fondo: "Incense, Musk, Tonka bean, Saffron",
      idealPara: "Everyday wear, office, spring-summer"
    }
  },
  {
    id: "bleu-de-chanel",
    num: "10",
    collection: "disenador",
    gender: "masculino",
    brand: "Chanel",
    name: "Bleu de Chanel",
    price: 55,
    stock: true,
    es: {
      desc: "En Eau de Parfum, más denso y especiado que la versión EDT: el estándar de la elegancia masculina moderna.",
      salida: "Toronja, Limón, Menta, Bergamota, Pimienta rosa, Cilantro",
      corazon: "Jengibre, Jazmín, Nuez moscada, Melón",
      fondo: "Incienso, Ámbar, Cedro, Sándalo, Pachulí, Ládano",
      idealPara: "Oficina, eventos formales, uso versátil todo el año"
    },
    en: {
      desc: "In Eau de Parfum, denser and spicier than the EDT: the standard of modern masculine elegance.",
      salida: "Grapefruit, Lemon, Mint, Bergamot, Pink pepper, Coriander",
      corazon: "Ginger, Jasmine, Nutmeg, Melon",
      fondo: "Incense, Amber, Cedar, Sandalwood, Patchouli, Labdanum",
      idealPara: "Office, formal events, year-round versatility"
    }
  },
  {
    id: "myslf",
    num: "11",
    collection: "disenador",
    gender: "masculino",
    brand: "Yves Saint Laurent",
    name: "Myslf",
    price: 45,
    stock: true,
    es: {
      desc: "Fresco-floral con carácter, una composición minimalista y moderna dentro de la línea YSL.",
      salida: "Bergamota de Calabria, Bergamota",
      corazon: "Flor del naranjo tunesino",
      fondo: "Ambrofix, Pachulí",
      idealPara: "Uso diario, primavera, salidas casuales"
    },
    en: {
      desc: "Fresh-floral with character, a minimalist, modern composition within the YSL line.",
      salida: "Calabrian bergamot, Bergamot",
      corazon: "Tunisian orange blossom",
      fondo: "Ambrofix, Patchouli",
      idealPara: "Everyday wear, spring, casual outings"
    }
  },
  {
    id: "sauvage-parfum",
    num: "12",
    collection: "disenador",
    gender: "masculino",
    brand: "Dior",
    name: "Sauvage Parfum",
    price: 40,
    stock: true,
    es: {
      desc: "La versión más suave y ambarada de Sauvage, con un fondo dulce que suaviza el carácter fresco-especiado clásico.",
      salida: "Lavanda, Bergamota de Calabria",
      corazon: "Pimienta de Sichuan, Nuez moscada",
      fondo: "Notas ambaradas, Mandarina, Vainilla, Pachulí, Haba tonka, Sándalo",
      idealPara: "Uso diario, versatilidad total"
    },
    en: {
      desc: "The softer, amber version of Sauvage, with a sweet base that mellows the classic fresh-spicy character.",
      salida: "Lavender, Calabrian bergamot",
      corazon: "Sichuan pepper, Nutmeg",
      fondo: "Amber notes, Mandarin, Vanilla, Patchouli, Tonka bean, Sandalwood",
      idealPara: "Everyday wear, total versatility"
    }
  },
  {
    id: "invictus-parfum",
    num: "13",
    collection: "disenador",
    gender: "masculino",
    brand: "Paco Rabanne",
    name: "Invictus Parfum",
    price: 45,
    stock: true,
    es: {
      desc: "Más intenso y amaderado que el EDT original, conservando el carácter marino-limpio con más cuerpo.",
      salida: "Notas marinas, Lavanda, Pimienta rosa",
      corazon: "Jabón, Hojas de violeta, Mirto",
      fondo: "Almizcle, Cachemira, Sándalo",
      idealPara: "Deporte, salidas casuales, uso diario"
    },
    en: {
      desc: "More intense and woody than the original EDT, keeping the clean marine character with more body.",
      salida: "Marine notes, Lavender, Pink pepper",
      corazon: "Soapy notes, Violet leaves, Myrtle",
      fondo: "Musk, Cashmere wood, Sandalwood",
      idealPara: "Sports, casual outings, everyday wear"
    }
  },
  {
    id: "erba-pura",
    num: "14",
    collection: "nicho",
    gender: "unisex",
    brand: "Xerjoff",
    name: "Erba Pura",
    price: 70,
    stock: true,
    es: {
      desc: "Una cesta de frutas mediterráneas y cítricos sicilianos de lujo: dulce, jugosa y radiante, sin caer nunca en lo empalagoso.",
      salida: "Naranja siciliana, Bergamota de Calabria, Limón siciliano",
      corazon: "Notas afrutadas (cesta de frutas mediterráneas)",
      fondo: "Almizcle blanco, Vainilla de Madagascar, Ámbar",
      idealPara: "Citas, eventos diurnos, momentos para destacar"
    },
    en: {
      desc: "A basket of Mediterranean fruits and luxurious Sicilian citrus: sweet, juicy and radiant, never cloying.",
      salida: "Sicilian orange, Calabrian bergamot, Sicilian lemon",
      corazon: "Fruity notes (Mediterranean fruit basket)",
      fondo: "White musk, Madagascar vanilla, Amber",
      idealPara: "Dates, daytime events, moments to stand out"
    }
  },
  {
    id: "summer-hammer",
    num: "15",
    collection: "nicho",
    gender: "unisex",
    brand: "Lorenzo Pazzaglia",
    name: "Summer Hammer",
    price: 85,
    stock: true,
    es: {
      desc: "Una fragancia de culto para quienes buscan algo fuera de lo común: una piña colada tropical con un corazón floral-marino y fondo cremoso de sándalo.",
      salida: "Mango, Piña, Coco, Bergamota, Ron blanco",
      corazon: "Leche de coco, Flores blancas, Notas marinas",
      fondo: "Almizcle, Sándalo, Ámbar, Vetiver",
      idealPara: "Verano, eventos exclusivos, coleccionistas"
    },
    en: {
      desc: "A cult fragrance for those seeking something out of the ordinary: a tropical piña colada with a floral-marine heart and a creamy sandalwood base.",
      salida: "Mango, Pineapple, Coconut, Bergamot, White rum",
      corazon: "Coconut milk, White flowers, Marine notes",
      fondo: "Musk, Sandalwood, Amber, Vetiver",
      idealPara: "Summer, exclusive events, collectors"
    }
  }
];
