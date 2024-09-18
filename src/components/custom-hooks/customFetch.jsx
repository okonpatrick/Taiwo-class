import { useEffect, useState } from "react"
import axios from "axios";

 const usualAxiosFetch = (url) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const FetchFunc =  async () => {
            const getData = await axios.get(url)
            const response = await getData.data;
            setData(response)
        }
        FetchFunc();
    }, [])
    return {data};
}
export default usualAxiosFetch;