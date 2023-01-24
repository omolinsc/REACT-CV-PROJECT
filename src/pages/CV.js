import image from '../assets/images/profile.jpeg';

export const CV = {
    hero: {
      firstName: "Oriol",
      secondName: "Molins Casanovas",
      adress: "Calle Mayor 24",
      city: "25100 - Almacelles (LLEIDA)",
      email: "omolinsc@gmail.com",
      birthDate: "26/04/1985",
      phone: "(+34) 666 555 444",
      image: <img src={image} alt="profilePhoto"/>,
    //   image: "https://avatars.githubusercontent.com/u/119105915?v=4",
      gitHub: "https://github.com/omolinsc",
      linkedIn: "https://www.linkedin.com/in/oriol-molins-casanovas-29412b123/",
      aboutMe: [
        {
          info: "Junior Full Stack Developer In Progress en UPGRADE HUB.",
        },
        {
          info: "Entusiasta de las nuevas tecnologias y de la programación.",
        },
        {
          info: "Jugador amateur de Pádel, jugando casi a diario.",
        },
        {
          info: "Aficionado al dibujo, el miniaturismo y la lectura.",
        },
      ],
    },
    education: [
      {
        name: "ESO y Bachiller Tecnológico",
        start: "1998",
        date: "2004",
        where: "I.E.S. Canigó (Almacelles)",
      },
      {
        name: "CFGS de Administración y Finanzas",
        start: "2012",
        date: "2014",
        where: "Colégio Episcopal (Lleida)",
      },
      {
        name: "Full Stack Developer Bootcamp",
        start: "2022",
        date: "2023",
        where: "Upgrade Hub (Madrid)",
      },
    ],
    experience: [
      {
        name: "Jefe de Almacén y Logística",
        date: "04/2016 – 02/2018",
        where: "CUPASA",
        description:
          "Gestión de entradas/salidas de mercancía (fitosanitarios y semillas de cereal), gestión de albaranaje y organización logística de las entregas y recepciones de productos.",
      },
      {
        name: "Comercial Técnico",
        date: "02/2018 – 02/2019",
        where: "Prefabricados OJEFER, S.L.",
        description:
          "Elaboración de presupuestos y planos en DraftSight, presentación de la documentación a los clientes y captación de ellos a puerta fría por las regiones sobretodo de Catalunya y Aragón",
      },
    ],
    languages: [
        {
            language: "English",
            wrlevel: "9",
            splevel: "9",
        },
        {
            language: "Español",
            wrlevel: "15",
            splevel: "15",
        },
        {
            language: "Catalán",
            wrlevel: "15",
            splevel: "15",
        },
    ],
    otherLanguages: [
        {
            language: "HTML",
            wrlevel: "12",
        },
        {
            language: "SCSS",
            wrlevel: "10",
        },
        {
            language: "JavaScript",
            wrlevel: "12",
        },
        {
            language: "C/C++",
            wrlevel: "7",
        },
        {
            language: "REACT",
            wrlevel: "10",
        },
        {
            language: "php",
            wrlevel: "5",
        },
    ],
    tools: [
        {
            language: "GitHub",
            wrlevel: "12",
        },
        {
            language: "Windows",
            wrlevel: "10",
        },
        {
            language: "Office",
            wrlevel: "15",
        },
        {
            language: "MongoDB",
            wrlevel: "8",
        },
        {
            language: "Visual Studio Code",
            wrlevel: "13",
        },
        {
            language: "Postman",
            wrlevel: "10",
        },
        {
            language: "DraftSight",
            wrlevel: "10",
        },
        {
            language: "Photoshop",
            wrlevel: "8",
        },
        {
            language: "Illustrator",
            wrlevel: "7",
        },
    ],
    habilities: [
      "Permiso B de Conducir",
      "Pair Programming",
      "Diseño Gráfico",
      "Empatía",
      "Redes Sociales",
      "Creatividad",
      "Paciencia",
      "Efectividad",
    ],
  };