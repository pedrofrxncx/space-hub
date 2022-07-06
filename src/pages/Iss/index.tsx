import styles from './styles.module.scss';
import axios from 'axios'
import { useQuery } from 'react-query'
import Header from '../../components/Header'
import iss from '../../assets/iss.png'


export default function Iss() {
  const { data, isFetching } = useQuery<Response>('astronauts', async () => {
    const response = await axios.get('//api.open-notify.org/astros.json')

    return response.data
  }, {
    // data refresh rate set to 1 day
    staleTime: 1000 * 86400 
  })

  return (
    <>
      <Header />
      <body className={styles.body}>
        <div className={styles.stars_wrapper}>
          <div className={styles.stars}></div>
          <div className={styles.stars2}></div>
          <div className={styles.stars3}></div>
        </div>
        <h1 className={styles.title}>Check out the <span>ISS</span></h1>
        <section className={styles.about}>
          <p>The International Space Station (ISS) is a modular space station (habitable artificial satellite) in low Earth orbit. It is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada). The ownership and use of the space station is established by intergovernmental treaties and agreements. The station serves as a microgravity and space environment research laboratory in which scientific research is conducted in astrobiology, astronomy, meteorology, physics, and other fields. The ISS is suited for testing the spacecraft systems and equipment required for possible future long-duration missions to the Moon and Mars.</p>
          <img src={iss} alt="" />
        </section>

      </body>
    </>
  )
}