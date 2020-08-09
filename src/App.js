import React, { Fragment } from 'react';
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <Fragment>
        <Header
          titulo="Buscador de noticias"
        />

        <div className="container white">
          <Formulario />
        </div>
    </Fragment>
  );
}

export default App;
