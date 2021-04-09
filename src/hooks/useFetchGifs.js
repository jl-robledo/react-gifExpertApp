import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// los hooks no son mas que funciones se diferencian de los funcional component 

export const useFetchGifs = ( category ) => {

    const [ state, setState ] = useState({

        data: [],
        loading: true
    });

    
    useEffect( () =>{                   // se usa el efecto para que se use cuando cambie la categoria (busqueda)
        getGifs( category )             // peticion http
            .then( imgs => {            // tenemos las imagenes

                setState({          // cuando tenemos la data cambiando la informacion
                    data: imgs,
                    loading: false
                });
            })
            
    }, [ category ])

    return state;

}
