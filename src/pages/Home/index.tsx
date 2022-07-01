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
      </body>
    </>
  )
}