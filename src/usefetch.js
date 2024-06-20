import { useState,useEffect } from "react";


const useFetch = (url)=>{
    const [data, setData] = useState(null)
    const [ispending, setispending]= useState(true);
    const [error,seterror] =useState(null);




    useEffect(()=>
    {
        const abortconst= new AbortController();
        setTimeout(()=>{
            fetch(url ,{signal:abortconst.signal})
        .then(res => {
            if(!res.ok){
                throw Error('Could not find the data :(');
            }
            return res.json();
        })
        .then(data =>{
            setData(data);
            setispending(false);
            seterror(null);
        })
        .catch(err=>{
            if(err.name === 'AbortError'){
                console.log('aborted');
            }
            else{
                seterror(err.message);
                setispending(false);

            }
            
        })

        },1000);

        return () => abortconst.abort();

    },[url]);
    return {data,ispending,error};
}

export default useFetch;
