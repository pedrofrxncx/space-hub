import styles from './styles.module.scss';
import Header from '../../components/Header';

import rocket from '../../assets/rocket.png'
import react_query from '../../assets/react_query.svg'
import react from '../../assets/react.svg'
import sass from '../../assets/sass.svg'
import ts from '../../assets/typescript.svg'

import { useState } from 'react'

export default function Home() { 
  const [down, goDown] = useState(false)
  const [up, goUp] = useState(false)
  const [hide, setHide] = useState(false)
  return (
    <>
      <Header />
      <body className={styles.body}>
        <div className={styles.main}>
          <div className={up ? `${styles.explicative} ${styles.hide_2}` : styles.explicative}>
            <h1>Welcome to <span>Space Hub</span></h1>
            <div>
              <p>This website was created with:</p>

              <ul>
                <li>
                  <a 
                    href="https://reactjs.org/" 
                    target="_blank">
                    <img src={react} alt="" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.typescriptlang.org/" 
                    target="_blank">
                    <img src={ts} alt="" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://react-query.tanstack.com/" 
                    target="_blank">
                    <img src={react_query} alt="" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://sass-lang.com/" 
                    target="_blank">
                    <img src={sass} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={hide ? `${styles.rocket} ${styles.hide}` : styles.rocket}>
           <img className={up ? styles.up : ''} src={rocket} alt="" />
           <div 
            onClick={
              () => {goDown(true); goUp(true); setHide(true)}
            } 
            className={down 
              ? 
                `${styles.launch_button} ${styles.down}` 
              : 
                styles.launch_button}
              >
                <span>LAUNCH</span>
              </div>
          </div>
        </div>
        <footer>
          <p>
            Made with ❤️ by  
            <a href="https://github.com/pedrofrxncx">
              {' '}Pedro França
            </a>
          </p>
        </footer>
        <div className={styles.stars_wrapper}>
            <div className={styles.stars}></div>
            <div className={styles.stars2}></div>
            <div className={styles.stars3}></div>
          </div>
      </body>
    </>
  )
}