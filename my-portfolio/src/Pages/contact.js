// src/pages/contact.js
import Header from '../components/Header';
import styles from '../styles/Contact.module.css';

const ContactPage = () => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      <h1>Contact Me</h1>
      <p>This is the contact page with contact form or details.</p>
    </div>
  </div>
);

export default ContactPage;
