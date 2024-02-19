import PostCard from "../PostCard/PostCard";
import PostCardCentered from '../PostCard/PostCardCentered';
import styles from "./featuredlayout.module.css";

export default function FeaturedLayout() {
    return (
        <div className={styles.featuredLayoutWrapper}>
            <div className={styles.featuredColOne}>
                <PostCard />
                <PostCard />
            </div>
            <div className={styles.featuredColTwo}>
                <PostCardCentered/>
            </div>
            <div className={styles.featuredColThree}>
                <PostCard />
                <PostCard />
            </div>

        </div>
    )
}