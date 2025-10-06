import { motion } from "framer-motion";

interface FeatureContentProps {
  image: string;
  title: string;
}

export const FeatureContent = ({ image, title }: FeatureContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full flex items-center justify-center"
    >
      <motion.div 
        className="glass rounded-xl overflow-hidden w-full relative group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/5" />
        
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-contain relative z-10"
          initial={{ filter: "brightness(0.9)" }}
          animate={{ filter: "brightness(1)" }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            boxShadow: "inset 0 0 20px rgba(var(--primary), 0.1)"
          }}
          animate={{
            boxShadow: [
              "inset 0 0 20px rgba(var(--primary), 0.1)",
              "inset 0 0 30px rgba(var(--primary), 0.2)",
              "inset 0 0 20px rgba(var(--primary), 0.1)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};