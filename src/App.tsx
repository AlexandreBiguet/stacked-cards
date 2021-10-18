import CardList from "./components/CardList";
import { CardProps } from "./components/Card";
import batmanLogo from "./assets/batman.jpg";

var CARDS_DATA: CardProps[] = [
  {
    creationDate: "10/10/2021",
    description: "a first description",
    authorName: "The batman",
    imageSrc: batmanLogo,
  },
  {
    creationDate: "1/1/1",
    description: "a second description",
    authorName: "the batman",
    imageSrc: batmanLogo,
  },
  {
    creationDate: "10/10/2021",
    description: "a first description",
    authorName: "The batman",
    imageSrc: batmanLogo,
  },
  {
    creationDate: "1/1/1",
    description: "a second description",
    authorName: "the batman",
    imageSrc: batmanLogo,
  },
  {
    creationDate: "10/10/2021",
    description: "a first description",
    authorName: "The batman",
    imageSrc: batmanLogo,
  },
  {
    creationDate: "1/1/1",
    description: "a second description",
    authorName: "the batman",
    imageSrc: batmanLogo,
  },
];

function App() {
  return <CardList cards={CARDS_DATA} />;
}

export default App;
