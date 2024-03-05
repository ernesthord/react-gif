import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ name }) => {

    const { images, isLoading } = useFetchGifs( name );
    
    return (
        <>
            <h3>{ name }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}
