import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {
    const isMounted= useRef(true);

    console.log(isMounted);

    const [state, setstate] = useState(
        { data: null,loading:true, error:null}
    );

        useEffect(() => {
            
            return (() => {
                isMounted.current=false;
            })
        }, []);


    useEffect(() => {
        setstate({...state, data:null, loading:true});

        fetch(url).then(
        (resp)=>{return resp.json()}
        ).then( 
            (data)=>{
               if(isMounted.current) { setstate({...state, data:data, loading:false}) } 
                else { console.log('setState no se llamo')}
            }
            ).catch( ()=>{
                setstate({
                    data:null,
                    loading:false,
                    error: 'No se pudo cargar la pagina'
                });
            })

    }, [url]);
    return state;
}
