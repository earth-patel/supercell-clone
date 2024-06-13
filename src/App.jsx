import Header from "./components/header/header";
import "./index.scss";
import Title from "./components/title/title"
import spirit from "./assets/images/heal_spirit.png";

function App() {
  return (
    <>
      <Header />
      <Title />
      <div className="heal-spirit w-96 absolute aspect-square">
        <img className="" src={spirit} alt="heal_spirit" />
      </div>
    </>
  );
}

export default App;
