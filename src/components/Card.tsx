import styles from "./Card.module.css";

export interface CardProps {
  creationDate: string; // TODO should be date
  description: string;
  imageSrc: string; // TODO should be a Path
  authorName: string;
}

function Card(props: CardProps) {
  // TODO how to I specify the return type ?
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <p> {props.creationDate}</p>
        <h2> {props.description} </h2>
      </header>

      <div className={styles.author}>
        <a className={styles.avatar} href="#">
          <img src={props.imageSrc} />
        </a>
        <svg className={styles.halfcircle} viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>

        <div className={styles.name}>
          <div className={styles.nameprefix}>Author</div>
          {props.authorName}
        </div>
      </div>
    </article>
  );
}

export default Card;
