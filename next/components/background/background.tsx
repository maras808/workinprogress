import styles from "./background.module.css";

interface backgroundProps {
  blurRem: number;
}

export default function Background({ blurRem }: backgroundProps) {
  return (
    <img
      className={styles.background}
      style={
        blurRem
          ? {
              filter: `blur(${blurRem}rem)`,
              scale: `calc(100% + ${blurRem * 8}%)`,
            }
          : {}
      }
      src="/background.jpg"
    ></img>
  );
}
