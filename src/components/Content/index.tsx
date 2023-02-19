import styles from './styles.module.scss'

export function Content() {
  return (
    <main className={styles.container}>
      <div className={styles.titleAndTab}>
        <h2>Blocos recomendados</h2>
        <div className={styles.tab}>
          <button className={styles.active}>Lista</button>
          <button>Mapa</button>
        </div>
      </div>
    </main>
  )
}
