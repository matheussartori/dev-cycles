import { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { GetServerSideProps } from 'next'

import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { Menu } from '../components/Menu'

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import styles from '../styles/pages/Timer.module.css'

interface TimerProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Timer(props: TimerProps) {
  useEffect(() => {
    if (!localStorage.getItem('@move-it/user')) {
      Router.push('/')
    }
  }, [])

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Menu />
        <div className={styles.content}>
          <Head>
            <title>Início | DevCycles</title>
          </Head>
          <ExperienceBar />

          <section>
            <CountdownProvider>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </CountdownProvider>
          </section>
        </div>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}