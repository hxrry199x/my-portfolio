import { motion } from "framer-motion";

function About() {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
      <p>I am a Frontend Developer with nearly 1 year of focused experience building modern, responsive web applications using Angular and React. With almost 5 years of overall professional experience in software development, including working as a Fullstack Developer, I bring a well-rounded technical background and a strong understanding of both frontend and backend systems.</p>

      <p>In my previous Fullstack role, I worked extensively on maintaining and enhancing enterprise applications — modifying existing features, improving documentation-related workflows, and developing new modules to meet evolving business requirements. This experience strengthened my ability to understand complex systems, write clean and maintainable code, and collaborate effectively with cross-functional teams.</p>

      <p>As a frontend developer, I focus on creating intuitive user interfaces, optimizing performance, and ensuring responsive, accessible design across devices. My fullstack background allows me to better understand API integrations, system architecture, and how frontend decisions impact backend performance.</p>

      <p>I am passionate about continuous learning, writing scalable code, and building user-centric digital experiences that deliver real business value.</p>
      </motion.p>
    </section>
  );
}

export default About;
