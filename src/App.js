import './App.css';
import Cita1 from "./components/Cita1";
import { Fragment, useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Boton = styled.button`
  background-color: green;
  padding: 10px;
  text-align: center;
  width: 50%;
  margin: 0 auto;
`

function App() {
  const [cita1, setCita1] = useState([]);

  useEffect(() => { handlerOnClick1() }, []);

  const handlerOnClick1 = () => {
      fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes").then((response) => response.json())
        .then((data) => {
          setCita1(data);
        })
        .catch(err => (console.error(err)));
  }

  const handlerOnClick2 = async () => {
    const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const data = await response.json();
    setCita1(data);
        
  }
  return (
    <Fragment>
      <Cita1 cita1={cita1}/>
      <Boton onClick={(e) => handlerOnClick1(e)}>Fetch</Boton>
      <Boton onClick={(e)=>handlerOnClick2(e)}>Async await</Boton>
    </Fragment>
  );
}

export default App;
