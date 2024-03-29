import styles from './styles.module.scss';
import Header from '../../components/Header';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import axios from 'axios'


export default function AstronomyPic() { 
  const [startDate, setStartDate] = useState(new Date());  
  const [displayData, setDisplayData] = useState({
    text: '',
    url: '',
    alt: ''
  })
  const [show, setShow] = useState(false)
  const [showModal, setShowModal] = useState(true)

  let date = startDate.toISOString().split('T')[0]
    
  async function fetchInfoByDate(){
    try {
      const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=0SfOrnfS9sHPJRc6JaOfCmtkPri2sczTifeaF3FT&date=${date}`)
    let data = res.data
    return data
    } catch (error) {
      alert('You must pick a past date.')
    }
  }

  async function requireData() {
    const data = await fetchInfoByDate()
    console.log(data)
    setDisplayData({
      text: data.explanation,
      url: data.url,
      alt: data.title
    })
    setShow(true)
  }

  async function handleDate() {
    // console.log('oi')

    const data = await fetchInfoByDate()
    console.log(data)
  }



  return (
    <>
      <Header />

      <div className={styles.content__wrapper}>
        <div className={styles.menu}>
          <h1>Pick a date!</h1>

              <DatePicker className={styles.date}  selected={startDate} onChange={(date:Date) => setStartDate(date)} />

            <button className={styles.btn} onClick={() => requireData()}>TRY</button>
        </div>

        { show && (
          <div className={styles.main__content}>
            <p>{displayData.text}</p>
            <div className={styles.img__container}>
              <img src={displayData.url} alt={displayData.alt} loading="lazy" />
            </div>
          </div>
        )}
      </div>

    </>
  )
}