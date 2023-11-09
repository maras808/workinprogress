import { montserrat } from "@/fonts/fonts";
import styles from "./display.module.css";

export default function Display() {
  return (
    <div className={styles.display}>
      <div className={styles.big}>strona w budowie</div>
      <div className={`${styles.small} ${montserrat.className}`}>
        niedługo ruszamy!
      </div>
    </div>
  );
}
