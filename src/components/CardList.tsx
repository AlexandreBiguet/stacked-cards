import { FC } from "react";
import { CardProps } from "./Card";
import Card from "./Card";

import styles from "./CardList.module.css";

interface CardListProps {
  cards: CardProps[];
}

const CardList: FC<CardListProps> = (props) => {
  return (
    <section className={styles.list}>
      {props.cards.map((card) => {
        return (
          <Card
            creationDate={card.creationDate}
            authorName={card.authorName}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        );
      })}
    </section>
  );
};

export default CardList;
