import Background from "@/components/background/background";
import styles from "./page.module.css";
import WidthWrapper from "@/components/widthwrapper/widthwrapper";
import Display from "@/components/display/display";
import Progress from "@/components/progress/progress";

export default function Home() {
  return (
    <main className={styles.main}>
      <WidthWrapper>
        <div className={styles.content}>
          <Display></Display>
          <Progress percentage={10}></Progress>
        </div>
      </WidthWrapper>
      <Background blurRem={0.6}></Background>
    </main>
  );
}
