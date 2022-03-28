import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { StakingAndRewardProvider } from "../context/StakingAndRewardContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <StakingAndRewardProvider>
      <div className={styles.container}>
        <Head>
          <title>My Blockgames Token</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <footer className={styles.footer}>
          <a
            href="https://blockgames.gg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <h1 className={styles.logo}>Blockgames</h1>
          </a>
        </footer>
      </div>
    </StakingAndRewardProvider>
  );
}
