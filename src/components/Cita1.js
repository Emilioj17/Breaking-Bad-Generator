import React from 'react';
import styled from '@emotion/styled';

const DivCita = styled.div`
  text-align: center;
  padding: 20px;
  margin-top:60px;

  div{
    background-color: white;
    margin: 20px;
  }
`

function Cita1({ cita1 }) {
    return (
      <DivCita>
          <div>
                <h3>Cita1: {cita1.cita}</h3>
                <p>Autor: {cita1.autor}</p>
          </div>
      </DivCita>
    );
  }
  
  export default Cita1;