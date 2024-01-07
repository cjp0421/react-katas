import Link from "next/link";
import styles from './../page.module.css'

export default function KataOne() {
    return (
        <>
            <div className={styles.main}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <h1>Kata One: Tic-Tac-Toe</h1>
                <h2>This page is dedicated to the Tic-Tac-Toe Kata.</h2>
            </div>

        </>
    )
}