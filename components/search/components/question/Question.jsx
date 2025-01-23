import { motion } from "framer-motion";
import SvgFlower from "./SvgFlower";

export default function Question() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md"
    >
      <SvgFlower width={260} heidth={260} />
      <p className="text-gray-700 text-lg">
        ¿Qué estás <strong>buscando</strong>?
      </p>
    </motion.div>
  );
}
