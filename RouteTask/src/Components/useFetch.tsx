import { useEffect, useState } from "react"

 interface UseFetchResult{
  data: any | null,
  isPending : boolean,
  error: any | null
}
const useFetch = (url: string) : UseFetchResult => {
    const [data ,setData] = useState<any | null>(null)
    const [isPending , setIsPending]=useState(true)
    const [error, setError]= useState<any|null>(null)
    
    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("Error fetching customer data")
                }
               return res.json()
            })
            .then( data =>{
                setData(data);
                setIsPending(false);
                setError(null)
            })
            .catch(err => {
                setError(err.massage);
                setIsPending(false)
            })

        },1000)
    }, [url])
  return (
    {data ,isPending, error }
  )
}


export default useFetch