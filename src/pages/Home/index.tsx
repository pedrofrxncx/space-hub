import styles from './styles.module.scss';
import Header from '../../components/Header';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';
import axios from 'axios'


export default function Home() { 
  const [startDate, setStartDate] = useState(new Date());  
  const [displayData, setDisplayData] = useState({
    text: '',
    url: '',
    alt: ''
  })

  let date = startDate.toISOString().split('T')[0]

  useEffect(() => {
    fetchInfoByDate()
  }, [])
    
  async function fetchInfoByDate(){
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=0SfOrnfS9sHPJRc6JaOfCmtkPri2sczTifeaF3FT&date=${date}`)
    let data = res.data
    return data
  }

  async function requireData() {
    const data = await fetchInfoByDate()
    console.log(data)
    setDisplayData({
      text: data.explanation,
      url: data.url,
      alt: data.title
    })
  }

  return (
    <>
      <Header />

      <div className={styles.content__wrapper}>
        <div className={styles.menu}>
          <h1>Find something cool :)</h1>
            <div> 
              <DatePicker className={styles.date}  selected={startDate} onChange={(date:Date) => setStartDate(date)} />
            </div>
            <button className={styles.btn} onClick={() => requireData()}>TRY</button>
        </div>

        <div className={styles.main__content}>
          {/* {isFetching && <p>Loading...</p>} */}
          <p>{displayData.text}</p>
          <img src={displayData.url} alt={displayData.alt} />
        </div>
      </div>

    </>
  )
}