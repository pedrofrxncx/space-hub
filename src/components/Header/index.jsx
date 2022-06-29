import styles from './styles.module.scss';

import rocket from '../../assets/rocket.svg'

export default function Header() {
  return (
    <header>
      <img src={rocket} />
      <strong>SPACE HUB</strong>
    </header>
  )
}