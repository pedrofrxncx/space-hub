import styles from './styles.module.scss';
import axios from 'axios'
import { useQuery } from 'react-query'
import Header from '../../components/Header'

type Astronaut = {
  name: string;
  craft: string;
}

type Response = {
  people: Astronaut[];
}

export default function InSpace() {
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
        <h1 className={styles.title}>See who's in <span>space</span> right now</h1>
        <div className={styles.lists_container}>
          <ul className={styles.list}>
            <p>ISS</p>
            { isFetching 
                ?
                <p>Carregando...</p>
                :
                data?.people.map(astronaut => {
                if (astronaut.craft === 'ISS') { return (<p>{astronaut.name}</p>)}          
                })
            
            }
          </ul>

          <ul className={styles.list}>
            <p>Tiangong</p>
            { isFetching 
                ?
                  <p>Carregando...</p>
                :
                  data?.people.map(astronaut => {
                  if (astronaut.craft === 'Tiangong') { return (<p>{astronaut.name}</p>)}          
                  })     
            }
          </ul>
        </div>
      </body>
    </>
  )
}