import Saludo from "./components/Saludo";
import Comentario from "./components/Comentario";

function App() {
  return (
    <div className="container mt-5">
      <h1>Props</h1>
      <Saludo person='Jesús'/>
      <Saludo person='Fulanito'/>
      <Saludo person='Manganito'/>
      <hr/>
      <h3>Caja de comentarios</h3>
      <Comentario 
        img='https://picsum.photos/100'
        person='Jesús'
        text='Cras sit amet nibh libero, in gravida nulla.'
      />
      <Comentario 
        img='https://picsum.photos/100'
        person='Fulanito'
        text='Cras sit amet nibh libero, in gravida nulla.'
      />
      <Comentario 
        img='https://picsum.photos/100'
        person='Manganito'
        text='Cras sit amet nibh libero, in gravida nulla.'
      />
    </div>
  );
}

export default App;
