import React from 'react';
import styles from './projects.module.css';
import Carousel from '@/components/Carousel';

export default function Projects() {
  return (
    <section id={styles.projects}>
      <h2 className={styles.header2}>Projects</h2>
      <Carousel />
    </section>
  );
}
