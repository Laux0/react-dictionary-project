import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <main>
        <Dictionary />
      </main>
      <footer>
        This project was coded by Laura Rahmati and is open-sourced on
        <a
          href="https://github.com/Laux0/react-dictionary-project"
          target="_blank"
          rel="noreferrer"
          className="Footer-link"
        >
          {" "}
          Github.
        </a>
      </footer>
    </div>
  );
}
