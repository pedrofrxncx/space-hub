import styles from './styles.module.scss';

import rocket from '../../assets/rocket.svg'
import menu from '../../assets/menu.svg'
import x from '../../assets/x.svg'

import { useState } from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false)
  return (
    <>
      <header>
      <img className={styles.rocket} src={rocket} />
      <strong>SPACE HUB</strong>
      <img onClick={() => {show ? setShow(false) : setShow(true)}} className={styles.menu} src={show ? x : menu} />
    </header>
    {show && 
      <nav>
        <ul>
          <li><Link to="/astronomy-pics">Astronomy Picture</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/iss">ISS</Link></li>
        </ul>
      </nav>
    }
    </>
  )
}