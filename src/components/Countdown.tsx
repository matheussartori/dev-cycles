import { useContext } from 'react'

import styles from '../styles/components/Countdown.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineClose } from 'react-icons/ai'
import { CountdownContext } from '../contexts/CountdownContext'

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>

      </div>

      { hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Cycle ended
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                Abandon cycle <AiOutlineClose />
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Start a cycle <img src="/icons/start.svg" alt="Start a cycle" />
                </button>
              )}
          </>
        )}


    </div>
  )
}