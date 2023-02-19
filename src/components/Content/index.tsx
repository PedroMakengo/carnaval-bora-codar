import styles from './styles.module.scss'

import { MapPin } from 'phosphor-react'

import image01 from '../../assets/image/01-image.svg'
import image02 from '../../assets/image/02-image.svg'
import image03 from '../../assets/image/03-image.svg'
import image04 from '../../assets/image/04-image.svg'
import image05 from '../../assets/image/05-image.svg'
import image06 from '../../assets/image/06-image.svg'
import image07 from '../../assets/image/07-image.svg'
import image08 from '../../assets/image/08-image.svg'
import image09 from '../../assets/image/09-image.svg'

const listCarnaval = [
  {
    id: 1,
    img: image01,
    title: 'O Python do vovô não sobe mais',
    context: '  Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    city: 'São Paulo - SP',
  },
  {
    id: 2,
    img: image02,
    title: 'Todo mundo null',
    context: '  Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    city: 'Florianópolis - SC',
  },
  {
    id: 3,
    img: image03,
    title: 'Hoje dou exception',
    context: '  Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    city: 'Curitiba - PR',
  },
  {
    id: 4,
    img: image04,
    title: 'Manda Node',
    context: '  Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    city: 'Salvador - BA',
  },
  {
    id: 5,
    img: image05,
    title: 'Só no back-end',
    context: '  Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    city: 'São Paulo - SP',
  },
  {
    id: 6,
    img: image06,
    title: 'Esse anel não é de Ruby',
    context: '  Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    city: 'São Paulo - SP',
  },
  {
    id: 7,
    img: image07,
    title: 'Pimenta no C# dos outros é refresco',
    context: '  Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    city: 'Rio de Janeiro - RJ',
  },
  {
    id: 8,
    img: image08,
    title: 'EnCACHE aqui',
    context: '  Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    city: 'Porto Alegre - RS',
  },
  {
    id: 9,
    img: image09,
    title: 'Não valho nada mas JAVA li',
    context: '  Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    city: 'São Paulo - SP',
  },
]

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
      <section className={styles.listArticleCarnaval}>
        {listCarnaval.map((item, index) => (
          <div className={styles.itemCarnaval} key={index}>
            <img src={item.img} alt="" />
            <div className={styles.content}>
              <h3>O Python do vovô não sobe mais</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
              <span>
                <MapPin color="#E45858" /> São Paulo SP
              </span>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
