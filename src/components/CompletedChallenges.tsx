import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Challenges completed</span>
      <span>{String(challengesCompleted).padStart(2, '0')}</span>
    </div>
  )
}