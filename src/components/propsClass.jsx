import NestComponent from "./propdrilling/nestComponent"
export const PropsClass = ({product}) => {
    return (
        <>
        <div className="">
        <div className="max-w-sm rounded  shadow-lg">
  <img className="w-full" src={product.imageId} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{product.name}</div>
    <p className="text-gray-700 text-base">
{product.description}   
 </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$ {product.price}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> {product.rating} </span>
  </div>
</div>
</div>
        </>
    )
}