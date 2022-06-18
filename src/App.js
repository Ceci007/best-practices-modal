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
      <Modal ref={modalRef}>
        <div className="image-container">
          <img src="/dragonite.png" alt="pokemon draw" />
        </div>
      </Modal>
    </div>
  );
}

export default App;
