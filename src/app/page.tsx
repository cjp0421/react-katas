import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/about">About</Link>
      <Link href="/kata-one">Kata One</Link>
      <h1>Homepage</h1>
      <div>
        <h2>This is the homepage.</h2>
      </div>

    </main>
  )
}
