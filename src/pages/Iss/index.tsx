import styles from './styles.module.scss';
import axios from 'axios'
import { useQuery } from 'react-query'
import Header from '../../components/Header'
import iss from '../../assets/iss.png'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

interface Response {
  latitude: number 
  longitude: number
  velocity: number
  altitude: number
}

interface DisplayData {
  lat: string | undefined
  lng: string | undefined
  velocity: string | undefined
  altitude: string | undefined
}

// type Center = {
//   lat: number | undefined,
//   lng: number | undefined
// }

export default function Iss() {
  const { data, isFetching } = useQuery<Response>('astronauts', async () => {
    const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544')

    return response.data
  }, {
    refetchInterval: 1001 //ms
  })

  const displayData: DisplayData = {
    lat: data?.latitude.toString(),
    lng: data?.longitude.toString(),
    velocity: data?.velocity.toString(),
    altitude: data?.altitude.toString(),
  }

  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: 'AIzaSyBm5Yoyml5QSjjQJ7XtgaWptGTRd5wCQCU'
  // })

  // const containerStyle = {
  //   width: '400px',
  //   height: '400px',
  // }

  // const center: Center = {
  //   lat: displayData.lat,
  //   lng: displayData.lng
  // }

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

        <div className={styles.displayInfo}>
          <span>Lat: {displayData.lat}</span>
          <span>Long: {displayData.lng}</span>
          <span>Alt: {displayData.altitude} km</span>
          <span className={styles.last}>Speed: {displayData.velocity} km/h</span>
        </div>

        {/* <div className={styles.map_wrapper}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >

            </GoogleMap>  
          )
          :
            <></>
          }
        </div> */}
      </body>
    </>
  )
}