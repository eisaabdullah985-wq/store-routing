

export default function ProductCard({title = "", url = "", description ="", price = 0, onAdd }) {

    return (
        <div className="shadow-xl bg-white rounded-lg w-full flex flex-col justify-between">
            <div className="flex justify-center items-center p-4">
                <img className="h-[150px]" src ={url} />
            </div>
            <h2 className="p-4 font-semibold text-gray-700">{title}</h2>
            <p className="text-gray-500 px-3 line-clamp-2">{description}</p>
            <div className="p-4 flex justify-between">
                <p className="font-bold p-4 text-green-400 text-xl">${price.toFixed(2)}</p>
                <button onClick={onAdd} className="bg-blue-400 px-4 rounded-lg cursor-pointer font-bold text-white hover:bg-blue-300">Add to Cart</button>
            </div>
        </div>
    )
}