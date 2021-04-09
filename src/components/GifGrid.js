import React, {/* useState, useEffect */} from 'react'; // los quitamos para utilizar el useFetchGifs
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ( { category }) => {

   // const [ images, setImages ] = useState( [] );

   const { data: images, loading } = useFetchGifs( category );  // renderizacion en el componente
   // renombramos la data y la llamamos images

    // se implementa para que cada vez que se hacia un cambio se volviera a ejecutar
    // useEffect( () => {           
    //     getGifs( category )
    //         .then( setImages )
    // }, [ category ])


    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }  {/* si es true se muestra el mensaje */}

            <div className="card-grid"> 
                {
                    images.map( ( img ) => (

                        <GifGridItem 
                            key = { img.id }
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}


