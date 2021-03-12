import Saludo from "./components/Saludo";

function App() {
  return (
    <div className="container mt-5">
      <h1>Props</h1>
      <Saludo person='Jesús'/>
      <Saludo person='Fulanito'/>
      <Saludo person='Maganito'/>
    </div>
  );
}

export default App;
