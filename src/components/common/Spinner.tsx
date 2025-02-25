import React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 24,
  color = "text-gray-600",
}) => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      >
        <Loader2 className={`${color}`} size={size} />
      </motion.div>
    </div>
  );
};

export default Spinner;
