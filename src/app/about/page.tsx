import Link from "next/link";
import styles from './../page.module.css'

export default function About() {
    return (
        <>
            <div className={styles.main}>
                <Link href="/">Home</Link>
                <h1>About</h1>
                <h2>This page tells you about the project.</h2>
            </div>

        </>
    )
}