import Maincontent from "./components/Maincontent";
import Sidebar from "./components/sidebar";
import "./styles/components/app.sass";

function App() {
  return (
    <div id="portifolio">
      <h1> Fernando Moreira </h1>
      <Sidebar />
      <Maincontent />
    </div>
  );
}

export default App;
