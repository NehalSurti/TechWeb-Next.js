import React from "react";
import styles from "./loading.module.css";

export default function loading() {
  return (
    <div className={styles.container}>
      <div>Loading...</div>
    </div>
  );
}
