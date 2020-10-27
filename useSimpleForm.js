import { useState } from "react"


export const useSimpleForm = (initialState={}) => {

    const [valueF, setValueF] = useState(initialState);


    const handleChange=({target})=>{ 
        const {name, value}=target;
        setValueF({
            ...valueF,
            [name]:value
        });
        
    }

    const reset = ()=>{
        setValueF(initialState);
    }

    return [valueF, handleChange, reset];
}
