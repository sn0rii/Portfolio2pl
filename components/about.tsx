"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("O mnie", 0.8);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>O mnie</SectionHeading>
      <p className="mb-3">
        Po powrocie do kraju postanowiłem realizować swoją pasję do{" "}
        <span className="font-medium">programowania</span>. Ukończyłem
        intensywny bootcamp i nauczyłem się tam{" "}
        <span className="font-medium"> web developmentu</span>.{" "}
        <span className="italic">Moją ulubioną częścią programowania</span> jest
        rozwiązywanie problemów. <span className="underline">Kocham</span> to
        uczucie, że w końcu znalazłem rozwiązanie problemu. Mój podstawowy
        zestaw narzędzi to{" "}
        <span className="font-medium">
          Javascript, React, Next.js, and MongoDB
        </span>
        . Znam również TypeScript i Prismę. Cały czas jestem otwarty na nauke
        nowych technologii. Obecnie szukam{" "}
        <span className="font-medium">pracy na pozycji</span> frontend
        developera.
      </p>
      <p>
        <span className="italic">Prywatnie, </span> Poza programowaniem spędzam
        wolny czas,{" "}
        <span className="font-medium">trenując i piekąc różne ciasta </span>
        co dla wielu osób może być sprzecznością.
      </p>
    </motion.section>
  );
}
