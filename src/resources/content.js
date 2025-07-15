import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "ACEIS -",
  lastName: "Ilha Solteira",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Promover de maneira sustentável o desenvolvimento econômico e social contínuo dos empreendedores e da cidade de Ilha Solteira.",
  avatar: "/images/logo.png",
  email: "example@gmail.com",
  location: "America/Sao_Paulo",
  languages: ["English", "Portugues"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home2.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Capacitando empreendedores por meio do desenvolvimento sustentável</>,
  featured: {
    display: true,
    title: <>Campanha:<strong className="ml-4">Três Amores</strong></>,
    href: "https://atualiza.aceis.org.br/ADMarquivo/arquivos/pdf/REGULAMENTO_CAMPANHA_TR%C3%8ASAMORES.pdf",
  },
  subline: (
    <>
      Promover de maneira sustentável o desenvolvimento econômico e social contínuo dos empreendedores e da cidade de Ilha Solteira.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Quem Somos",
    description: (
      <>
        <strong>ACEIS</strong> é uma instituição comprometida com o desenvolvimento econômico e social
        sustentável. Desde 2018, apoiamos empreendedores locais através de projetos,
        capacitações e parcerias estratégicas.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Nossas Iniciativas",
    experiences: [
      {
        company: "Campanha Três Amores",
        timeframe: "2024 – Presente",
        role: "Projeto de Impacto Social",
        achievements: [
          <>
            Mobilizamos mais de 300 empreendedores de Ilha Solteira em ações sustentáveis,
            gerando um incremento médio de 15% na renda local.
          </>,
          <>
            Desenvolvemos um guia prático de boas práticas ambientais distribuído em 10
            municípios vizinhos.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Programa Verde + Tech",
        timeframe: "2022 – 2024",
        role: "Inovação Tecnológica",
        achievements: [
          <>
            Implantamos 5 hackathons focados em soluções verdes, com 20 protótipos apresentados
            e 3 startups aceleradas.
          </>,
          <>
            Criamos uma plataforma digital de troca de materiais recicláveis, com mais de
            1.000 usuários ativos.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Parcerias e Certificações",
    institutions: [
      {
        name: "SEBRAE",
        description: <>Curso de Gestão para Pequenos Negócios Sustentáveis.</>,
      },
      {
        name: "Instituto Ethos",
        description: <>Certificação em Responsabilidade Social Empresarial.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Competências Chave",
    skills: [
      {
        title: "Gestão de Projetos",
         description: (
          <>
            Planejamento e execução de programas socioambientais com foco em resultados
            mensuráveis.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Engajamento Comunitário",
        description: (
          <>
            Mobilização de stakeholders e condução de workshops para adoção de práticas
            sustentáveis.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const calendar = {
  path: "/calendar",
  label: "Calendário",
  title: "Calendario de eventos...",
  description: `Veja o calendario de eventos de ${person.name}.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const blog = {
  path: "/blog",
  label: "Fotos",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, calendar };
