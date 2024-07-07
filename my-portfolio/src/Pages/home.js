// src/pages/index.js
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const HomePage = () => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      <h1>Welcome to My Portfolio</h1>
      <Image src="/images/profile.jpg" alt="Profile Picture" width={150} height={150} className={styles.profilePic} />
    </div>
  </div>
);

export default HomePage;
