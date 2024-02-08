import React from "react";
import Links from "./links/Links";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
      TechWeb
      </Link>
      <div>
        <Links></Links>
      </div>
    </div>
  );
}
