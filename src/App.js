import React, { Fragment, useState, useEffect } from 'react';
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import ListadoNoticias from "./componentes/ListadoNoticias";

function App() {

  //Definir la categoria y noticias.
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarAPI = async () =>{
      const url =`http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=b6e3f4e4b0194cb0afefac44b1fe8f25`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.article);
      
    }
    consultarAPI();
  }, [categoria]);
  return (
    <Fragment>
        <Header
          titulo="Buscador de noticias"
        />

        <div className="container white">
          <Formulario
            guardarCategoria={guardarCategoria}
          />

          <ListadoNoticias noticias={noticias}/>
        </div>
    </Fragment>
  );
}

export default App;
