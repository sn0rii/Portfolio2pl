import React from "react";

import { IoMdWater } from "react-icons/io";
import { FaReact, FaTools } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/NextJsImgGallery.jpg";
import rmtdevImg from "@/public/ProjektPortfolio.jpg";
import wordanalyticsImg from "@/public/ProjektThreads.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "O mnie",
    hash: "#about",
  },
  {
    name: "Projekty",
    hash: "#projects",
  },
  {
    name: "Umiejętności",
    hash: "#skills",
  },
  {
    name: "Doświadczenie",
    hash: "#experience",
  },
  {
    name: "Kontakt",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Monter sieci internetowych",
    location: "Pionki, PL",
    description:
      "Pracowałem przez rok jako monter sieci internetowej  - Naprawa typowych usterek technicznych.",
    icon: React.createElement(FaTools),
    date: "2013 - 2014",
  },
  {
    title: "Operator maszyny do mycia pod ciśnieniem ",
    location: "Edinburgh, GB",
    description:
      "Pracowałem jako operator maszyny ciśnieniowej - doskonaliłem swój angielski i zdobywałem doświadczenie w obsłudze ciężkich maszyn do mycia ciśnieniowego",

    icon: React.createElement(IoMdWater),
    date: "2014 - 2021",
  },
  {
    title: "FUTURE COLLARS bootcamp",
    location: "Pionki, PL",
    description:
      "Ukończyłem bardzo intensywny bootcamp, za który otrzymałem certyfikaty i stworzyłem swoje pierwsze większe projekty.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Projekt",
    description: "Mój pierwszy projekt portfolio stworzony w React.",
    tags: ["React", "TypeScript", "Tailwind", "Payload"],
    imageUrl: rmtdevImg,
    demo: "https://voytecportfolio.netlify.app/",
    code: "https://github.com/sn0rii/Portfolio01",
  },
  {
    title: "Threads Clone",
    description: 'Fullstackowy klon  "threads"  z pełną autoryzacją(clerk).',
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Shadcn-ui",
      "Clerk",
      "MongoDb",
    ],
    imageUrl: wordanalyticsImg,
    demo: "https://voytec-threads.vercel.app/",
    code: "https://github.com/sn0rii/threads",
  },
  {
    title: "Galeria Next JS ",
    description:
      "Finałowy projekt kursu NextJs , zawierający wszystkie głowne funkcje.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: corpcommentImg,
    demo: "https://voytec-img-gallery.vercel.app/",
    code: "https://github.com/sn0rii/img-gallery",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "Sense of Humour",
] as const;
