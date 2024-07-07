// src/pages/about.js
import Header from '../components/Header';
import styles from '../styles/About.module.css';

const AboutPage = () => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      <h1>About Me</h1>
      <p>This is the about page with some detailed information about me.</p>
    </div>
  </div>
);

export default AboutPage;
