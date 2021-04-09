

export const getGifs = async( category ) => {

    // peticion http de la data
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=eEWG21qqNpVo28ySdCXzA3Xy2HZfvvWe`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url 
        }
    })

    return gifs;

    // setImages( gifs );

}