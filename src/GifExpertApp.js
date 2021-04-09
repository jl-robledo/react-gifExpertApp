// importamos react
import React, { useState } from 'react';

// importamos PropTypes
// import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// creamos el componente
export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball'])

    // const handleAdd = () => {

    //     // setCategories ( [...categories, 'Hunter X Hunter'] );
    //     // se puede poner delante de los elementos seria de la siguiente forma
    //     // setCategories ( ['Hunter X Hunter', ...categories] );

    //     // otra forma de hacerlo mas util
    //     setCategories( cats => [ ...categories , 'Hunter X Hunter' ] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr />

           {/*  quitamos el boton porque añadiremos las categorias mediante un formulario
            <button onClick= { handleAdd }>Agregar</button>
           */}

            <ol>
                {
                    categories.map( category => (
                        // <li key= { category }> { category } </li>
                        // es necesario poner el key porque hacer referencia a la llave que los hace unico
                    
                        // añadimos el nuevo componente
                        <GifGrid 
                            key = { category }
                            category = { category } 
                        />
                    ))

                }
            </ol>



        </>
    );

}