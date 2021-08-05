import React from 'react';
import styled from '@emotion/styled';

const DivCita = styled.div`
  text-align: center;
  padding: 20px;
  margin-top:170px;

  div{
    background-color: white;
    margin: 20px;
  }

  p, h3 {
      padding:20px;
  }

  p{
      text-align: end;
  }
`

function Cita1({ cita1 }) {
    return (
      <DivCita>
          <div>
                {cita1[0] ? <h3>{cita1[0].quote}</h3> : <h3>Cargando Cita...</h3>}
                {cita1[0] ? <p>{cita1[0].author}</p>: <p>Cargando Autor...</p>}
          </div>
      </DivCita>
    );
  }
  
  export default Cita1;