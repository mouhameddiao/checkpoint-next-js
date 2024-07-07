// src/pages/projects.js
import Header from '../components/Header';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/projects');
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
}

const ProjectsPage = ({ projects }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      <h1>Mes Projets</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className={styles.projectItem}>
            <Image src={`/images/${project.image}`} alt={project.name} width={300} height={200} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProjectsPage;
