import Link from "next/link";
import Image from "next/image";
import styles from "./postcard.module.css";

export default function PostCard () {
    return (
        <div className={styles.postCardWrapper}>
            <div className={styles.ImageBadgeWrapper}>
            <div className={styles.badgeWrapper}>
                <Link className={styles.badgeLink} href="/">Category</Link>
            </div>
            <div className={styles.postCardImageWrapper}>
                <Image className={styles.postCardImage} src="/img/sample-img.jpg" fill={true} alt="Sample Image" />
            </div>
            </div>
            <div className={styles.postCardContentWrapper}>
                <h2 className={styles.postCardHeading}>Matic Robot Vacuum Collects Dust but Not Your Personal Data</h2>
                <p className={styles.postCardText}>The Matic AI-powered robot vac sucks up dust and clean up spills, all without sharing an iota of personal data in the process.</p>
            </div>
        </div>
    )
}