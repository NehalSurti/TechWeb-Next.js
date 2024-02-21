import Link from 'next/link';
import React from 'react';
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
        <h2>Not Found</h2>
        <Link href="/">Return Home</Link>
    </div>
  )
}
