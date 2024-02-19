import Link from "next/link";
import Image from "next/image";
import styles from "./singlepost.module.css";

export default function Page() {
    return (
        <div className={styles.singlePostWrapper}>
            <div className={styles.singlePostIntro}>
                <div className={styles.badgeWrapper}>
                    <Link className={styles.badgeItem} href="/">Category Name</Link>
                </div>
                <div className={styles.titlWrapper}>
                    <h1 className={styles.title}>
                    The Néad Lounge by Orior Commits to the Sit
                    </h1>
                </div>
                <div className={styles.decorativeLineWrapper}>
                    <div className={styles.decorativeLine}>
                        <Image className={styles.lineSvg} src="/line.svg" width={16.395} height={20.284} alt="Decorative Line" />
                    </div>
                </div>
                <div className={styles.dateAndAuthor}>
                    <p className={styles.dateAuthorText}>02.16.24 <span className={styles.divider}>|</span> By <Link href="/" className={styles.authorLink}>Joseph Sgambati III</Link></p>
                </div>
            </div>
        </div>
    )
}