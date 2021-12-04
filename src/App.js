
// import './App.css';
import BotonNuevo from "./componentes/BotonNuevo";
import Buscar from "./componentes/Buscar";
import List from "./componentes/List";
import Item from "./componentes/Item";
import Contador from "./componentes/Contador"


function App() {
  return (
    <div className="App">
     
     <Buscar/>
     <BotonNuevo/>
     <List/>
     <Item/>
     <Contador/>
     
    </div>
  );
}

export default App;
