import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import { MagnifyingGlass, MapPin, CaretDown } from 'phosphor-react'
import styles from './styles.module.scss'

export function Hero() {
  const { width, height } = useWindowSize()
  return (
    <section className={styles.hero}>
      <Confetti
        width={width}
        height={height}
        tweenDuration={1000}
        numberOfPieces={400}
        recycle={false}
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <span>Find your block</span>
          <h1>
            Encontre os <span>melhores blocos</span> de carnaval de 2023
          </h1>
        </header>

        <form className={styles.form}>
          <div className={styles.fieldInput}>
            <MagnifyingGlass size={24} color="#e45858" weight="thin" />
            <input type="text" placeholder="Pesquise por nome" />
          </div>
          <div className={styles.fieldInput}>
            <MapPin size={24} color="#e45858" weight="thin" />
            <input
              type="text"
              placeholder="Selecione uma cidade"
              list="task-cidades"
            />
            <CaretDown
              size={24}
              color="#858793"
              weight="thin"
              className={styles.down}
            />
          </div>
          <datalist id="task-cidades">
            <option value="Luanda" />
            <option value="Benguela" />
            <option value="Malange" />
            <option value="Uíge" />
            <option value="Cabinda" />
          </datalist>
          <button type="submit" className={styles.buttonSubmit}>
            <span>Buscar agora</span>
            <MagnifyingGlass size={24} color="#fff" weight="thin" />
          </button>
        </form>
      </div>
    </section>
  )
}
