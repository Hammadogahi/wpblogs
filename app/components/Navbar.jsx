import Link from "next/link";
import styles from './navbar.module.css';

export default function Navbar () {
    return (<nav className={styles.navbar}>
        <div>The WPWizardry</div>
        <div className="navigation">
            <Link href="/" className={styles.navlinks}>Home</Link>
            <Link href="#"  className={styles.navlinks}>Themes</Link>
            <Link href="#"  className={styles.navlinks}>Plugins</Link>
            <Link href="#"  className={styles.navlinks}>How To</Link>
            <Link href="#"  className={styles.navlinks}>Reviews</Link>
        </div>
    </nav>)
}