"use client";

import styles from "./progress.module.css";
import { motion } from "framer-motion";

interface progressProps {
  percentage: number;
}

export default function Progress({ percentage }: progressProps) {
  return (
    <div className={styles.progress}>
      <div className={styles.slider}>
        <motion.div
          className={styles.percentage}
          initial={{ width: `0%` }}
          animate={{ width: `${percentage}%` }}
          transition={{ type: "spring", stiffness: 5, damping: 5 }}
        ></motion.div>
      </div>
      <div className={styles.numbers}>
        <div>0%</div>
        <div>100%</div>
      </div>
    </div>
  );
}
