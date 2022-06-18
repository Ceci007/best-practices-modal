import { useRef } from "react";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const modalRef = useRef();

  return (
    <div className="container">
      <button className="btn-primary" onClick={() => modalRef.current.open()}>
        Open Modal
      </button>
      <Modal className="flex-container" ref={modalRef}>
        <div className="image-container">
          <img src="/dragonite.png" alt="pokemon draw" />
        </div>
        <h3 className="title">Dragonite, the dragon type</h3>
        <p className="text">
          Dragonite is a Dragon/Flying type Pokémon introduced in Generation 1.
          It is known as the Dragon Pokémon.
        </p>
      </Modal>
    </div>
  );
}

export default App;
