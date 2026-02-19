import { motion } from "framer-motion";

function LanguageCard({ title, description }) {
  return (
    <motion.div
      className="language-card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <button>View Programming Languages</button>
    </motion.div>
  );
}

export default LanguageCard;
