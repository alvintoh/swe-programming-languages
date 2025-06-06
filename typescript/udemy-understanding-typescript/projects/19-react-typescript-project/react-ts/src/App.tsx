import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>My Course Goals</h1>
      </Header>
    </main>
  );
}

export default App;
