import usualAxiosFetch from "./customFetch"

export const CallHookComp = () => {

    const {data} = usualAxiosFetch("https://jsonplaceholder.typicode.com/posts");

    return (
        <div>
            {data.map((items) => {
               
                    <div key={items.id} className="">
                <div className="border brder-gray-500 m-4 py-4 px-4 gap-6">
                    <div>
                        <h1 className="font-bold tex-xl">title: {items.title}</h1>
                    </div>
                        
                    <div>
                        <p className="">Body: {items.body}</p>
                    </div>
                </div>
            </div>
               
            })}
        </div>
    )
}