import { useState, useEffect } from "react"
import Router from 'next/router'

import { useAuth } from "../hooks/useAuth"

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const [login, setLogin] = useState('')

  const { user, signIn } = useAuth()

  useEffect(() => {
    if (localStorage.getItem('@move-it/user')) {
      Router.push('/timer')
    }
  }, [])

  return (
    <div className={styles.container}>
      <aside />
      <section>
        <img src="/logo.svg" alt="Move.it" />

        <h1>Welcome</h1>

        <div>
          <img src="/icons/github.svg" alt="GitHub login" />
          <p>Sign in with GitHub to start</p>
        </div>

        <footer>
          <input
            type="text"
            value={login}
            onChange={event => setLogin(event.target.value)}
            placeholder="Enter your username"
          />
          <button className={login.length && styles.buttonWithContent} onClick={() => signIn(login)}>
            <img src="/icons/arrow-right.svg" alt="Sign in" />
          </button>
        </footer>
      </section>
    </div>
  )
}