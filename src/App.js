import './App.css';
import Cita1 from "./components/Cita1";
import { Fragment, useState } from 'react';

function App() {
  const [cita1, setCita1] = useState([]);

  const handlerOnClick1 = () => {
        
  }

  const handlerOnClick2 = () => {
        
  }
  return (
    <Fragment>
      <Cita1 cita1={cita1}/>
      <button onClick={(e) => handlerOnClick1(e)}>Nueva Cita1</button>
      <button onClick={(e)=>handlerOnClick2(e)}>Nueva Cita2</button>
    </Fragment>
  );
}

export default App;
