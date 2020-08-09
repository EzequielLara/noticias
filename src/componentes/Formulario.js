import React from 'react';
import style from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ()=>{

    const OPCIONES =[
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'sciencie', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ]

    // utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);
    return(
       <div className={`${style.buscador} row`}>
           <div className="col s12 m8 offset-m2">
               <form>
                   <h2 className={style.heading}>Encuentra Noticias por Categoria</h2>
                   <SelectNoticias />
                   <div className="input-field col s12">
                       <input
                            type="submit"
                            className={`${style.btn_block} btn-larg amber arken-2`}
                            value="Buscar"/>
                   </div>
               </form>
           </div>
       </div> 
    );

}
export default Formulario;