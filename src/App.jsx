import Header from "./components/header/header";
import "./index.scss";
import Title from "./components/title/title"
import spirit from "./assets/images/heal_spirit.png";
import Card from "./components/troops/Card";
import giant from "./assets/images/super_giant.jpg";

const obj = {
  background:"#a76940",
  name:"Super Giants",
  image:giant,
  author:"@ui/ ux rusty",
  description:`blacnklsn sbds kbk s s s s d d d d sssssssssssssssss sa ss as as s s
        blacnklsn sbds kbk s s s s d d d d sssssssssssssssss sa ss as as s s
        blacnklsn sbds kbk s s s s d d d d sssssssssssssssss sa ss as as s s`
}
function App() {
  return (
    <>
      <Header />
      <Title />
      <Card troops={obj}/>
      <div className="w-96 absolute aspect-square -top-4 -right-48">
        <img className="" src={spirit} alt="heal_spirit" />
      </div>
    </>
  );
}

export default App;
