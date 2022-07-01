import styles from './styles.module.scss';
import Header from '../../components/Header';




export default function Home() { 

  return (
    <>
      <Header />
      <body className={styles.body}>
        <div className={styles.stars_wrapper}>
          <div className={styles.stars}></div>
          <div className={styles.stars2}></div>
          <div className={styles.stars3}></div>
        </div>
        <div className={styles.main}>
          <h1>Hello world</h1>
        </div>
        <footer>
          <p>
            Made with ❤️ by  
            <a href="https://github.com/pedrofrxncx">
              {' '}Pedro França
            </a>
          </p>
        </footer>
      </body>
    </>
  )
}