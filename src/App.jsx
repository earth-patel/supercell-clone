import Header from "./components/header/header";
import "./index.scss";
import Title from "./components/title/title"
import spirit from "./assets/images/heal_spirit.png";
import Games from "./components/games/Games";
import Troops from "./components/troops/Troops";
function App() {
  return (
    <>
      <Header />
      <Title />
      <div className="w-96 absolute aspect-square -top-4 -right-48">
        <img className="" src={spirit} alt="heal_spirit" />
      </div>
      <Troops/>
      <Games/>
    </>
  );
}

export default App;
