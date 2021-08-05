import React from 'react';
import styled from '@emotion/styled';

const DivCita = styled.div`
  text-align: center;
  padding: 20px;

  div{
    background-color: white;
    margin: 20px;
  }
`

function Cita2({ cita2, setCita2 }) {
    const handlerOnClick = () => {
        
    }

    return (
      <DivCita>
          <div>
                <h3>Cita2: {cita2.cita}</h3>
                <p>Autor: {cita2.autor}</p>
          </div>
          <button onClick={(e)=>handlerOnClick(e)}>Nueva Cita</button>
      </DivCita>
    );
  }
  
  export default Cita2;