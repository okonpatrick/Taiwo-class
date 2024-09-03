import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

export const AxiosComponent = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const Fetch = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                const getResponse = await response.data;
                setData(getResponse)
            }
            catch (err) {
                console.log(err);
            }
        }
        Fetch();
    }, [])

    const filterProducts = data.filter((items) => {
        if (id) {
            return items.id === parseInt(id) && items.title.toLowerCase().includes(search.toLowerCase());
        }
        return items.title.toLowerCase().includes(search.toLowerCase())

    })

    return (
        <div className="w-[90%] m-auto text-center justify-center">
            <input
                className="m-16 border border-lg"
                onChange={(e) => setSearch(e.target.value)}
            ></input>
            <div className="grid grid-cols-3 w-[90%] m-auto text-center justify-center">

                {filterProducts.length > 0 ? (
                    //true block

                    filterProducts.map((items) => {
                        return (
                            <div key={items.id} className="grid grid-cols-3">
                                <p>item id: {items.id}</p>
                                <div className="">
                                    <div>{items.title}
                                        <img src={items.image} />
                                    </div>
                                </div>
                            </div>


                        )
                    })
                ) : (
                    //false block
                    <div>No item found!</div>
                )}
            </div>
        </div>

    )
}

