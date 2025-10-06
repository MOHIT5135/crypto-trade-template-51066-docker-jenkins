import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureTabProps {
  icon: ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  stats?: {
    value: string;
    label: string;
  };
}

export const FeatureTab = ({ icon, title, description, isActive, stats }: FeatureTabProps) => {
  return (
    <motion.div 
      whileHover={{ x: 4 }}
      className={`
        w-full flex items-start gap-4 p-5 rounded-xl
        transition-all duration-300 relative overflow-hidden group
        ${isActive 
          ? 'glass shadow-lg shadow-primary/10' 
          : 'hover:glass-hover'
        }
      `}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/50 rounded-l-xl"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}
      
      <motion.div 
        className={`flex-shrink-0 transition-all duration-300 ${
          isActive ? 'text-primary scale-110' : 'text-muted-foreground group-hover:text-primary/70'
        }`}
        animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className={`font-semibold text-base transition-colors duration-300 ${
            isActive ? 'text-primary' : 'group-hover:text-foreground'
          }`}>
            {title}
          </h3>
          {stats && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
              className="text-right flex-shrink-0"
            >
              <div className="text-xs font-bold text-primary">{stats.value}</div>
              <div className="text-[10px] text-muted-foreground">{stats.label}</div>
            </motion.div>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>
  );
};